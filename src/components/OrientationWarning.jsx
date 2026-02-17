import React, { useState, useEffect } from 'react';

const OrientationWarning = () => {
  const [showWarning, setShowWarning] = useState(false);

  const checkOrientation = () => {
    const isMobile = window.innerWidth < 768;
    const isPortrait = window.innerHeight > window.innerWidth;

    setShowWarning(isMobile && isPortrait);
  };

  useEffect(() => {
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  if (!showWarning) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="flex items-center gap-8">
        
        {/* Vertical Line */}
        <div className="w-1 h-40 bg-black"></div>

        {/* Text */}
        <div className="text-black text-3xl font-semibold tracking-widest leading-snug">
          <p>Rotate</p>
          <p>Your</p>
          <p>Phone</p>
        </div>

      </div>
    </div>
  );
};

export default OrientationWarning;
