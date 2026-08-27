import React from 'react'
import { locations } from '#constants';
import clsx from 'clsx';
import {useGSAP} from "@gsap/react";
import {Draggable} from 'gsap/Draggable';
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';

const projects = locations.work?.children ?? []; 

const Home = () => {
    const {setActiveLocation} = useLocationStore();
    const {openWindow} = useWindowStore();

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    }

    useGSAP(() => {
        // Draggable.create(".folder")
    }, []);
  return <section id="home">
    <ul className="grid grid-flow-col grid-cols-14 grid-rows-5 gap-1 pt-10 pl-8 max-sm:grid-flow-row max-sm:grid-cols-4 max-sm:grid-rows-none max-sm:gap-x-3 max-sm:gap-y-4 max-sm:pt-10 max-sm:px-8 max-sm:pb-28">
        {projects.map((project) => (
            <li key={project.id} className="group folder flex flex-col items-center justify-center p-2 max-sm:p-0"
            onClick={() => handleOpenProjectFinder(project)}>
                <img src={project.icon} alt={project.name}/>
                <p>{project.name}</p>
            </li>
        ))}
    </ul>
  </section>
}

export default Home
