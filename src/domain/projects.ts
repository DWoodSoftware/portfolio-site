import type { Project } from "./Project";
import { technologies } from "./technologies";
import { workCapacities } from "./workCapacities";

export const projects: readonly Project[] = [
  {
    id: "coreforge-audio",
    index: "02",

    title: "CoreForge Audio",
    role: "Former CTO / Lead Engineer",
    focus: "Distributed audio infrastructure",
    status: "Production system",

    description:
      "Distributed audio-generation infrastructure I led as CTO, combining mobile interfaces, event-driven orchestration and GPU-backed compute.",

    capacity: workCapacities.fullTime,
    
    technologies: [
      technologies.react,
      technologies.nodejs,
      technologies.python,
      technologies.gcp,
    ],

    featured: true,
    featuredOrder: 2,
  },

  {
  id: "quarterly-tax-service",
  index: "03",

  title: "Quarterly Tax Service",
  role: "Software Engineer",
  focus: "Backend architecture",
  status: "Active project",

  description:
    "Production-style Scala 3 and Play Framework service built around typed domain modelling, test-driven development and explicit architectural boundaries.",

  capacity: workCapacities.personal,

  technologies: [
    technologies.scala,
    technologies.play,
    technologies.scalatest,
    technologies.tdd,
    technologies.docker
  ],

  featured: true,
  featuredOrder: 3,
  
  demoUrl:
    "https://dwoodsoftware.github.io/scala-play-quarterly-tax-service/",

  sourceUrl:
    "https://github.com/DWoodSoftware/scala-play-quarterly-tax-service",
},

{
  id: "portfolio",
  index: "04",

  title: "DWoodSoftware Portfolio",
  role: "Designer / Engineer",
  focus: "Frontend engineering",
  status: "Active",

  description:
    "My personal engineering site: a responsive React frontend built around accessibility, WebGL visual systems and a deliberately custom design language.",

  capacity: workCapacities.personal,

  technologies: [
    technologies.react,
    technologies.typescript,
    technologies.webgl,
    technologies.css,
  ],

  demoUrl: "https://fideron.co.uk",

  featured: true,
  featuredOrder: 4,
},
{
  id: "devflow",
  index: "01",

  title: "DevFlow",
  role: "Creator / Software Engineer",
  focus: "Developer tooling and workflow orchestration",
  status: "In development",

  description:
    "A development-cycle control surface for modelling issues, blockers, dependencies, pull requests, integrations and automation across software projects.",

  capacity: workCapacities.personal,

  technologies: [
    technologies.react,
    technologies.typescript,
  ],

  sourceUrl:
    "https://github.com/DWoodSoftware/project-devflow",

  featured: true,
  featuredOrder: 1,
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