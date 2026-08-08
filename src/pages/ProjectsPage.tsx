import { ProjectDetailsCard } from "../components/ProjectDetailsCard/ProjectDetailsCard";
import { projects } from "../domain/projects";

import "../styles/ProjectsPage.css"

export function ProjectsPage() {
  return (
    <section
      className="projects-page"
      aria-labelledby="projects-page-title"
    >
      <header className="projects-page__header">
        <h1 id="projects-page-title">
          Projects
        </h1>

        <p>
          A growing collection of production systems, experiments and portfolio work.
        </p>
      </header>

      <div className="projects-page__list">
        {projects.map((project) => (
            <ProjectDetailsCard
                key={project.id}
                project={project}
            />
        ))}
      </div>
    </section>
  );
}