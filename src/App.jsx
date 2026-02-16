import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Dock, Home, Navbar} from '#components'
import React from 'react'
import { Terminal, Resume, Finder, Text, Contacts, Image} from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />
      <Home />

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
