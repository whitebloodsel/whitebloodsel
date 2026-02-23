import { WindowControlls } from "#components";
import React, { useState, useEffect, useMemo } from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import resumePdf from "../assets/files/resume.pdf";
import workerSrc from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    console.log("PDF loaded, pages:", numPages);
    setNumPages(numPages);
    setPageNumber(1);
    setPdfError(false);
  }

  function onDocumentLoadError(error) {
    console.error("PDF Load Error:", error);
    setPdfError(true);
  }

  const goToNextPage = () => {
    if (pageNumber < numPages) setPageNumber((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) setPageNumber((prev) => prev - 1);
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
        <div
          className="flex flex-col items-center bg-white overflow-auto p-4 pb-0"
          style={{ height: "calc(100% - 44px)" }}
        >
          <Document
            file={resumePdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<p className="text-gray-400 text-sm mt-4">Loading...</p>}
          >
            <Page
              pageNumber={pageNumber}
              width={Math.min(window.innerWidth - 48, 500)}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>

          {numPages && (
            <div className="flex items-center gap-4 mt-1">
              <button
                onClick={goToPrevPage}
                disabled={pageNumber === 1}
                className="px-1 py-1rounded disabled:opacity-50"
              >
                <ChevronLeft size={15} />
              </button>
              <span className="text-xs">
                {pageNumber} of {numPages}
              </span>
              <button
                onClick={goToNextPage}
                disabled={pageNumber === numPages}
                className="px-1 py-1 rounded disabled:opacity-50"
              >
                <ChevronRight size={15} />
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
