import React, { useState, useEffect } from "react";
import { WindowControlls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Search } from "lucide-react";
import useLocationStore from "#store/location";
import { locations, TAGS } from "#constants"; // Import TAGS from constants
import clsx from "clsx";
import useWindowStore from "#store/window";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();
  const [currentProject, setCurrentProject] = useState(null);

  // Reset currentProject when activeLocation changes to a project from home
  useEffect(() => {
    // If activeLocation is a project (has tags property), don't use currentProject
    if (activeLocation?.tags !== undefined) {
      setCurrentProject(null);
    }
  }, [activeLocation?.id]);

  // Helper function to get filtered projects for a tag
  const getProjectsForTag = (tagName) => {
    return locations.work.children.filter((project) =>
      project.tags?.includes(tagName),
    );
  };

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume", item);
    if (item.kind === "folder") {
      // If it's a project folder, set it as current project instead of changing active location
      if (item.tags !== undefined) {
        setCurrentProject(item);
      } else {
        setActiveLocation(item);
      }
      return;
    }
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    if (item.fileType === "img") {
      return openWindow("imgfile", {
        ...item,
        gallery: item.images || [
          { id: item.id, url: item.imageUrl, name: item.name },
        ],
        isProjectImage:
          activeLocation?.type === "work" ||
          activeLocation?.type === "tag" ||
          activeLocation?.tags !== undefined,
      });
    }

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const handleBack = () => {
    setCurrentProject(null);
    setActiveLocation(locations.work);
  };

  // Get the content to display based on active location
  const getDisplayContent = () => {
    // If viewing a specific project
    if (currentProject) {
      return currentProject.children || [];
    }
    // If a project was clicked from home and set as activeLocation
    if (activeLocation?.tags !== undefined) {
      return activeLocation.children || [];
    }
    // If viewing a tag filter
    if (activeLocation?.type === "tag") {
      return getProjectsForTag(activeLocation.name);
    }
    // Default: show children of active location (Projects, About, etc.)
    return activeLocation?.children || [];
  };

  return (
    <>
      <div id="window-header">
        <WindowControlls target="finder" />
        <h2 className="font-bold">
          {activeLocation?.type === "about" ? "About me" : "Portfolio"}
        </h2>
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {/* 1. Favorites Section */}
          <div>
            <h3>Favorites</h3>
            <ul>
              {Object.values(locations).map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setCurrentProject(null);
                    setActiveLocation(item);
                  }}
                  className={clsx(
                    (item.id === activeLocation.id && !currentProject) ||
                      (item.type === "work" && currentProject) ||
                      (item.type === "work" &&
                        activeLocation?.tags !== undefined)
                      ? "active"
                      : "not-active",
                  )}
                >
                  <img src={item.icon} className="w-4" alt={item.name} />
                  <p className="text-sm font-medium truncate">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Tags Section */}
          <div>
            <h3>Tags</h3>
            <ul>
              {TAGS.map((tag) => (
                <li
                  key={tag.id}
                  onClick={() => {
                    setCurrentProject(null);
                    setActiveLocation(tag);
                  }}
                  className={clsx(
                    tag.id === activeLocation.id ? "active" : "not-active",
                  )}
                >
                  <div
                    className="tag-dot"
                    style={{ backgroundColor: tag.color }}
                  />
                  <p className="text-sm font-medium">{tag.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Area */}
        <div className="content-wrapper">
          {(currentProject || activeLocation?.tags !== undefined) && (
            <button onClick={handleBack} className="back-button">
              ‹
            </button>
          )}
          <ul className="content">
            {getDisplayContent().map((item) => (
              <li
                key={item.id}
                className={item.position}
                onClick={() => openItem(item)}
              >
                <img src={item.icon} alt={item.name} />
                <div className="flex items-center gap-1">
                  {/* Show tag dots for projects */}
                  {item.kind === "folder" && item.tags && (
                    <div className="project-tag-container">
                      {item.tags?.slice(0, 3).map((tagName) => {
                        const tag = TAGS.find((t) => t.name === tagName);
                        return (
                          <div
                            key={tagName}
                            className="mini-dot"
                            style={{ backgroundColor: tag?.color }}
                          />
                        );
                      })}
                    </div>
                  )}
                  <p>{item.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
