import { socials } from '#constants';
import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControlls } from '#components';

const Contacts = () => {
  return (
    <>
      <div id="window-header">
        <WindowControlls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">

        <h3>Let's Connect!</h3>
        <p>Whether you're looking to collaborate or just want to say hi, I'm just a click away.</p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
              className='flex flex-col items-center justify-center'
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-7" />
                
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contacts, 'contact');

export default ContactWindow