import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Dock, Home, Navbar, StickyNote } from '#components'
import React from 'react'
import { Terminal, Resume, Finder, Text, Contacts, Image} from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
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
    </main>
  )
}

export default App
