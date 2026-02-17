import { WindowControlls } from "#components";
import React, { useState } from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Using the legacy build of the PDF.js worker from a CDN to improve compatibility with older browsers, especially Safari.
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

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
          href="/files/resume.pdf"
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
            <p className="text-xs mt-1">/files/resume.pdf</p>
            <a
              href="/files/resume.pdf"
              download
              className="text-blue-500 mt-2 block text-sm"
            >
              Download instead
            </a>
          </div>
        </div>
      ) : (
        <Document
          file="/files/resume.pdf"
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
