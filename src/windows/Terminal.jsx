import { techStack } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'
import { Check} from 'lucide-react'
import WindowControlls from '#components/WindowControlls.jsx'

const Terminal = () => {
  return <>
    <div id="window-header">
        <WindowControlls target="terminal"/>
        <h2>Tech Stack</h2>
    </div>

    <div className='techstack'>
        <p>
            <span className='font-bold'>@gisella % </span>
            show tech stack
        </p>

        <div className='label'>
            <p className='w-32'>Category</p>
            <p>Technologies</p>
        </div>

        <ul className='content'>
            {techStack.map(({category, items}) => (
                <li key={category} className="flex items-center">
                    <Check className="check" size={20} color="#fffff"/>
                    <h3>{category}</h3>
                    <ul>
                        {items.map((item, i) => (
                            <li key={i}>{item}{i < items.length - 1 ? ', ' : ''}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    </div>
  </>
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal')

export default TerminalWindow
