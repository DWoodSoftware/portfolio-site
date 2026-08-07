export type TechnologyIcon =
  | "python"
  | "typescript"
  | "javascript"
  | "react"
  | "nodejs"
  | "scala"
  | "play"
  | "gcp"
  | "kubernetes"
  | "docker"
  | "postgresql"
  | "firebase"
  | "scalatest"
  | "tdd"
  | "webgl"
  | "css";

export interface Technology {
  id: string;
  name: string;
  icon: TechnologyIcon;
}