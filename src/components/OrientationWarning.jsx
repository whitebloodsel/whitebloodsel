import React from "react";

const OrientationWarning = ({ showWarning }) => {
  if (!showWarning) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <div className="flex items-center gap-8">
        <div className="w-1 h-30 bg-white"></div>

        <div className="text-white text-xl font-bold tracking-[0.2em] ">
          <p>MOBILE</p>
          <p>NOT</p>
          <p>SUPPORTED</p>
        </div>
      </div>
    </div>
  );
};

export default OrientationWarning;
