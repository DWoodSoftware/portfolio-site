import type { Project } from "../../domain/Project";
import { TechnologyBadge } from "../TechnologyBadge/TechnologyBadge";

import "./ProjectDetailsCard.css"

interface ProjectDetailsCardProps {
    project: Project;
}

export function ProjectDetailsCard({
    project,
}: ProjectDetailsCardProps) {
    return (
        <article className="project-details-card">
            <div className="project-details-card__heading">
                <span className="project-details-card__index">
                    {project.index}
                </span>

                <h2 className="project-details-card__title">
                    {project.title}
                </h2>
            </div>

            <div className="project-details-card__meta">
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

            <p className="project-details-card__description">
                {project.description}
            </p>

            <ul
                className="project-details-card__technologies"
                aria-label={`${project.title} technologies`}
            >
                {project.technologies.map((technology) => (
                    <li key={technology.id}>
                        <TechnologyBadge technology={technology} />
                    </li>
                ))}
            </ul>

            <div className="project-details-card__actions">
            {project.demoUrl && (
                <a
                className="project-details-card__link"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                >
                View project
                <span aria-hidden="true">↗</span>
                </a>
            )}

            {project.sourceUrl && (
                <a
                className="project-details-card__source-link"
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                >
                Source
                <span aria-hidden="true">↗</span>
                </a>
            )}
            </div>
        </article>
    );
}