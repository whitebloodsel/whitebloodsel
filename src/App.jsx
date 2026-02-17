import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Dock, Home, Navbar, StickyNote, OrientationWarning } from '#components'
import React, { useState, useEffect } from 'react'
import { Terminal, Resume, Finder, Text, Contacts, Image} from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024); 
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

 if (isMobile) {
    return <OrientationWarning showWarning={true} />;
  }

  return (
    <main>
     
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

    </main>
  )
}

export default App
