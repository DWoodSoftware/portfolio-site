import type { Technology } from "./Technology";

export const technologies = {
  python: {
    id: "python",
    name: "Python",
    icon: "python",
  },

  typescript: {
    id: "typescript",
    name: "TypeScript",
    icon: "typescript",
  },

  javascript: {
    id: "javascript",
    name: "JavaScript",
    icon: "javascript",
  },

  react: {
    id: "react",
    name: "React",
    icon: "react",
  },

  nodejs: {
    id: "nodejs",
    name: "Node.js",
    icon: "nodejs",
  },

  scala: {
    id: "scala",
    name: "Scala",
    icon: "scala",
  },

  play: {
    id: "play",
    name: "Play Framework",
    icon: "play",
  },

  gcp: {
    id: "gcp",
    name: "Google Cloud",
    icon: "gcp",
  },

  kubernetes: {
    id: "kubernetes",
    name: "Kubernetes",
    icon: "kubernetes",
  },

  docker: {
    id: "docker",
    name: "Docker",
    icon: "docker",
  },

  postgresql: {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "postgresql",
  },

  firebase: {
    id: "firebase",
    name: "Firebase",
    icon: "firebase",
  },

  scalatest: {
    id: "scalatest",
    name: "ScalaTest",
    icon: "scalatest",
  },

    tdd: {
    id: "tdd",
    name: "TDD",
    icon: "tdd",
    },

    webgl: {
    id: "webgl",
    name: "WebGL",
    icon: "webgl",
    },

    css: {
    id: "css",
    name: "CSS",
    icon: "css",
    },
} as const satisfies Record<string, Technology>;