import React from 'react'
import { locations, TAGS } from '#constants';
import clsx from 'clsx';
import {useGSAP} from "@gsap/react";
import {Draggable} from 'gsap/Draggable';
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';
import useIsMobile from '#store/device';
import StickyNote from './StickyNote';

const projects = locations.work?.children ?? [];

const categories = TAGS.map((tag) => ({
    ...tag,
    projects: projects.filter((project) => project.tags?.includes(tag.name)),
})).filter((category) => category.projects.length > 0);

const Home = () => {
    const {setActiveLocation} = useLocationStore();
    const {openWindow} = useWindowStore();
    const isMobile = useIsMobile();

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    }

    const handleOpenCategoryFinder = (category) => {
        setActiveLocation(category);
        openWindow("finder");
    }

    useGSAP(() => {
        // Draggable.create(".folder")
    }, []);

    if (isMobile) {
        return <section id="home">
            <ul className="category-grid">
                <li className="max-sm:col-span-2 max-sm:row-span-2">
                    <StickyNote />
                </li>
                {categories.map((category) => (
                    <li key={category.id} className="category-folder"
                    onClick={() => handleOpenCategoryFinder(category)}>
                        <div className="folder-icon">
                            {category.projects.slice(0, 4).map((project) => (
                                <img key={project.id} src={project.icon} alt={project.name} />
                            ))}
                        </div>
                        <p>{category.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    }

  return <section id="home">
    <StickyNote />
    <ul className="grid grid-flow-col grid-cols-14 grid-rows-5 gap-1 pt-10 pl-8">
        {projects.map((project) => (
            <li key={project.id} className="group folder flex flex-col items-center justify-center p-2"
            onClick={() => handleOpenProjectFinder(project)}>
                <img src={project.icon} alt={project.name}/>
                <p>{project.name}</p>
            </li>
        ))}
    </ul>
  </section>
}

export default Home
