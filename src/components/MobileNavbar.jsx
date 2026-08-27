import React from 'react';
import { dockApps, locations } from '#constants';
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';
import imageNotesPng from '../assets/images/notes.png';
import imagePagesPng from '../assets/images/pages.png';

const MobileNavbar = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const navApps = [
    dockApps.find((app) => app.id === 'contact'),
    dockApps.find((app) => app.id === 'terminal'),
    { id: 'about', name: 'About', icon: imageNotesPng, canOpen: true },
    { id: 'resume', name: 'Resume', icon: imagePagesPng, canOpen: true },
  ];

  const handleOpen = (app) => {
    if (!app.canOpen) return;

    if (app.id === 'about') {
      setActiveLocation(locations.about);
      openWindow('finder');
      return;
    }

    openWindow(app.id);
  };

  return (
    <>
      <nav id="mobile-navbar">
        {navApps.map((app) => (
          <button
            key={app.id}
            type="button"
            aria-label={app.name}
            onClick={() => handleOpen(app)}
          >
            <span className="icon-frame">
              <img src={app.icon} alt={app.name} />
            </span>
            <p>{app.name}</p>
          </button>
        ))}
      </nav>

      <div className="home-indicator" />
    </>
  );
};

export default MobileNavbar;
