import dayjs from 'dayjs';

import { navLinks , navIcons} from '#constants/index.js';
import React from 'react'
import useWindowStore from '#store/window';
import logo3Svg from '../assets/images/file-logo.svg';

const Navbar = () => {
    const {openWindow} = useWindowStore();
  return (
    <nav>
        <div>
            <div className="flex items-center gap-2">
                <img src={logo3Svg} alt="logo" className="w-7.5 "/>
                <p className='font-bold text-xl max-sm:text-base'>
                    <span className="relative -top-0.5 font-child text-xl font-normal max-sm:text-base">Gisella's</span> Portfolio
                </p>
            </div>
            <ul>
                {navLinks.map(({id, name, type}) => (
                    <li key={id} onClick={() => openWindow(type)}>
                    <p>{name}</p>
                    </li>
                ))}
            </ul>

        </div>

        <div>
            <ul>
                {navIcons.map(({id, img}) => (
                <li key={id}>
                    <img src={img} className="icon-hover" alt={`icon-${id}`} />
                </li>
            ))}
            </ul>

            <time className="max-sm:hidden">{dayjs().format('ddd MMM D h:mm A')}</time>

            <div className="mobile-status">
                {navIcons.map(({id, img}) => (
                    <img key={id} src={img} alt={`icon-${id}`} />
                ))}
            </div>
        </div>
    </nav>
  )
}

export default Navbar
