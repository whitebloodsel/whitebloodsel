import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Dock, Home, Navbar, StickyNote, OrientationWarning } from '#components'
import React, { useState, useEffect } from 'react'
import { Terminal, Resume, Finder, Text, Contacts, Image} from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  const [showOrientationWarning, setShowOrientationWarning] = useState(false);

  const checkOrientation = () => {
    const isMobile = window.innerWidth < 768; // Tailwind's 'md' breakpoint
    const isPortrait = window.innerHeight > window.innerWidth;

    if (isMobile && isPortrait) {
      setShowOrientationWarning(true);
    } else {
      setShowOrientationWarning(false);
    }
  };

  useEffect(() => {
    checkOrientation(); // Check on initial render
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  return (
    <main>
      <OrientationWarning />
      {!showOrientationWarning && (
        <>
          <Navbar />
          <Dock />
          <Home />
          <StickyNote />

          <Terminal />
          <Resume />
          <Finder />
          <Text />
          <Image />
          <Contacts />
        </>
      )}
    </main>
  )
}

export default App
