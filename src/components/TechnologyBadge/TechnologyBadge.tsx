import type { IconType } from "react-icons";

import {
  SiCss,
  SiDocker,
  SiFirebase,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiScala,
  SiTypescript,
  SiWebgl,
} from "react-icons/si";

import { FaCode, FaFlask, FaPlay } from "react-icons/fa";

import "./TechnologyBadge.css";

import type {
  Technology,
  TechnologyIcon,
} from "../../domain/Technology";

interface TechnologyBadgeProps {
  technology: Technology;
}

const technologyIcons: Record<TechnologyIcon, IconType> = {
  python: SiPython,
  typescript: SiTypescript,
  javascript: SiJavascript,
  react: SiReact,
  nodejs: SiNodedotjs,
  scala: SiScala,
  play: FaPlay,
  gcp: SiGooglecloud,
  kubernetes: SiKubernetes,
  docker: SiDocker,
  postgresql: SiPostgresql,
  firebase: SiFirebase,
  scalatest: FaFlask,
  tdd: FaCode,
  webgl: SiWebgl,
  css: SiCss,
};

export function TechnologyBadge({
  technology,
}: TechnologyBadgeProps) {
  const Icon = technologyIcons[technology.icon];

  return (
    <span className="technology-badge">
      <span
        className="technology-badge__icon"
        aria-hidden="true"
      >
        <Icon />
      </span>

      <span className="technology-badge__label">
        {technology.name}
      </span>
    </span>
  );
}