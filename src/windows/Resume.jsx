import { WindowControlls } from "#components";
import React, { useState } from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import resumePdf from '../assets/files/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pdfError, setPdfError] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPdfError(false);
  }

  function onDocumentLoadError(error) {
    console.error("PDF Load Error:", error);
    setPdfError(true);
  }

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
            <p>Failed to load PDF</p>
            <p className="text-xs mt-1">{resumePdf}</p>
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
        <Document
          file={resumePdf}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
        >
          <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
        </Document>
      )}
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
