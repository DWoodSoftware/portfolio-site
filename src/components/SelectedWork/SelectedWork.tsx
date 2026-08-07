import { useState, type CSSProperties } from "react";

import { featuredProjects } from "../../domain/projects";
import { TechnologyBadge } from "../TechnologyBadge/TechnologyBadge";
import "./SelectedWork.css";

export function SelectedWork() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  return (
    <section
      id="work"
      className="selected-work"
      aria-labelledby="selected-work-title"
    >
      <header className="selected-work__header">
        <p className="selected-work__eyebrow">
          Selected Work
        </p>

        <h2
          id="selected-work-title"
          className="selected-work__title"
        >
          Systems built
          <span>to do real work.</span>
        </h2>
      </header>

      <div className="selected-work__folders">
        <div
          className="selected-work__tabs"
          role="tablist"
          aria-label="Selected projects"
          style={{
            "--project-count": featuredProjects.length,
          } as CSSProperties}
        >
          {featuredProjects.map((project, index) => {
            const isActive = index === activeProjectIndex;

            return (
              <button
                key={project.index}
                id={`project-tab-${project.index}`}
                className="selected-work__tab"
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`project-panel-${project.index}`}
                onClick={() => setActiveProjectIndex(index)}
              >
                <span className="selected-work__tab-index">
                    {project.index}
                </span>
                <span className="selected-work__tab-label">
                    {project.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="selected-work__stack">
          {featuredProjects.map((project, index) => {
            const isActive = index === activeProjectIndex;

            return (
              <article
                key={project.index}
                id={`project-panel-${project.index}`}
                className="selected-work__folder"
                role="tabpanel"
                aria-labelledby={`project-tab-${project.index}`}
                aria-hidden={!isActive}
                data-active={isActive}
                data-position={index - activeProjectIndex}
              >
                <div className="selected-work__project-content">
                  <h3 className="selected-work__project-title">
                    {project.title}
                  </h3>
                  <div className="selected-work__meta">
                    <div>
                        <span>Role</span>
                        <strong>{project.role}</strong>
                    </div>

                    <div>
                        <span>Focus</span>
                        <strong>{project.focus}</strong>
                    </div>
                    
                    <div>
                        <span>Status</span>
                        <strong>{project.status}</strong>
                    </div>
                  </div>
                  <p>{project.description}</p>

                  <ul aria-label={`${project.title} technologies`}>
                    {project.technologies.map((technology) => (
                      <li key={technology.id}>
                        <TechnologyBadge technology={technology} />
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  className="selected-work__link"
                  href="#"
                  aria-label={`View ${project.title}`}
                >
                  Explore
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}