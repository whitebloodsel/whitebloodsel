import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Dock, Home, Navbar, StickyNote, MobileNavbar, ProjectWidget } from '#components'
import React from 'react'
import { Terminal, Resume, Finder, Text, Contacts, Image} from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />

      <section id="mobile-widgets">
        <StickyNote />
        <ProjectWidget />
      </section>

      <Home />
      <MobileNavbar />

      <Terminal />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contacts />
    </main>
  )
}

export default App
