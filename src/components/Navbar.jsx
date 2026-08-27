import dayjs from 'dayjs';

import { navLinks , navIcons} from '#constants/index.js';
import React from 'react'
import useWindowStore from '#store/window';
import logo3Svg from '../assets/images/file-logo.svg';
import iconWifiSvg from '../assets/icons/wifi.svg';

const Navbar = () => {
    const {openWindow} = useWindowStore();
  return (
    <nav>
        <div>
            <img src={logo3Svg} alt="logo" className="w-4.5 "/>
            <p className='font-bold'>Gisella's Portfolio</p>
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
                <time>{dayjs().format('h:mm A')}</time>
                <img src={iconWifiSvg} alt="wifi" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar
