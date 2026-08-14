import type { Project } from "./Project";
import { technologies } from "./technologies";
import { workCapacities } from "./workCapacities";

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

    capacity: workCapacities.fullTime,
    
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
  status: "Live portfolio project",

  description:
    "Production-style scala 3 and Play Framework service built around typed domain modelling, test-driven development and explicit architectural boundaries.",

  capacity: workCapacities.personal,

  technologies: [
    technologies.scala,
    technologies.play,
    technologies.scalatest,
    technologies.tdd,
    technologies.docker
  ],

  featured: true,
  featuredOrder: 2,
  
  demoUrl:
    "https://dwoodsoftware.github.io/scala-play-quarterly-tax-service/",

  sourceUrl:
    "https://github.com/DWoodSoftware/scala-play-quarterly-tax-service",
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

  capacity: workCapacities.personal,

  technologies: [
    technologies.react,
    technologies.typescript,
    technologies.webgl,
    technologies.css,
  ],

  demoUrl: "https://fideron.co.uk",

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