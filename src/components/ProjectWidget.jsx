import React, { useEffect, useMemo, useState } from 'react';
import { locations } from '#constants';
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';

const ROTATE_INTERVAL = 6000;

const getCoverImage = (project) => {
  const imgFile = project.children?.find((child) => child.fileType === 'img');
  return imgFile?.images?.[0]?.url ?? imgFile?.imageUrl ?? null;
};

const ProjectWidget = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();
  const projects = useMemo(() => locations.work?.children ?? [], []);
  const [project, setProject] = useState(
    () => projects[Math.floor(Math.random() * projects.length)]
  );

  useEffect(() => {
    if (projects.length < 2) return;

    const id = setInterval(() => {
      setProject((current) => {
        let next = current;
        while (next.id === current.id) {
          next = projects[Math.floor(Math.random() * projects.length)];
        }
        return next;
      });
    }, ROTATE_INTERVAL);

    return () => clearInterval(id);
  }, [projects]);

  if (!project) return null;

  const cover = getCoverImage(project);

  const handleOpen = () => {
    setActiveLocation(project);
    openWindow('finder');
  };

  return (
    <button type="button" id="project-widget" onClick={handleOpen}>
      <div key={project.id} className="widget-frame">
        {cover && <img src={cover} alt={project.name} />}
        <div className="overlay">
          <p className="eyebrow">Featured Project</p>
          <p className="title">{project.name}</p>
        </div>
      </div>
    </button>
  );
};

export default ProjectWidget;
