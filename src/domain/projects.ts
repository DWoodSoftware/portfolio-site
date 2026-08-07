import type { Project } from "./Project";
import { technologies } from "./technologies";

export const projects: readonly Project[] = [
  {
    id: "coreforge-audio",
    index: "01",

    title: "CoreForge Audio",
    role: "CTO / Lead Engineer",
    focus: "Distributed audio infrastructure",
    status: "Production system",

    description:
      "Distributed audio-generation infrastructure combining mobile interfaces, event-driven orchestration and GPU-backed compute.",

    technologies: [
      technologies.react,
      technologies.nodejs,
      technologies.python,
      technologies.gcp,
    ],

    featured: true,
    featuredOrder: 1,
  },

  {
  id: "quarterly-tax-service",
  index: "02",

  title: "Quarterly Tax Service",
  role: "Software Engineer",
  focus: "Backend architecture",
  status: "Portfolio project",

  description:
    "Scala 3 and Play Framework service built around typed domain modelling, test-driven development and explicit architectural boundaries.",

  technologies: [
    technologies.scala,
    technologies.play,
    technologies.scalatest,
    technologies.tdd,
  ],

  featured: true,
  featuredOrder: 2,
},

{
  id: "portfolio",
  index: "03",

  title: "Portfolio",
  role: "Designer / Engineer",
  focus: "Frontend engineering",
  status: "Active",

  description:
    "The site you're using: a responsive, accessible frontend with WebGL metaballs, switchable visual systems and fluid design primitives.",

  technologies: [
    technologies.react,
    technologies.typescript,
    technologies.webgl,
    technologies.css,
  ],

  featured: true,
  featuredOrder: 3,
},
];

export const featuredProjects: readonly Project[] = projects
  .filter((project) => project.featured)
  .sort(
    (a, b) =>
      (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) -
      (b.featuredOrder ?? Number.MAX_SAFE_INTEGER),
  )
  .slice(0, 4);