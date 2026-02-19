import { WindowControlls } from "#components";
import React, { useState } from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import resumePdf from "../assets/files/resume.pdf";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
    setPdfError(false);
  }

  function onDocumentLoadError(error) {
    console.error("PDF Load Error:", error);
    setPdfError(true);
  }

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(prev => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(prev => prev - 1);
    }
  };

  return (
    <>
      <div id="window-header">
        <WindowControlls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href={resumePdf}
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>

      {pdfError ? (
        <div className="flex items-center justify-center h-full bg-white">
          <div className="text-center text-gray-400">
            <p>Failed to load</p>
            <a
              href={resumePdf}
              download
              className="text-blue-500 mt-2 block text-sm"
            >
              Download instead
            </a>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center bg-white h-full overflow-auto p-4">
          
          <Document
            file={resumePdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
          >
            <Page
              pageNumber={pageNumber}
              renderTextLayer
              renderAnnotationLayer
            />
          </Document>

          {/* Navigation Controls */}
          {numPages && (
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={goToPrevPage}
                disabled={pageNumber === 1}
                className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                <ChevronLeft size={20} />
              </button>

              <span className="text-sm">
                {pageNumber} of {numPages}
              </span>

              <button
                onClick={goToNextPage}
                disabled={pageNumber === numPages}
                className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
