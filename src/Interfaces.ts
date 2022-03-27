import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface Project {
  name: string;
  description: string;
  imagePath: string;
  deployedUrl: string;
  githubUrl: string;
  keyTechs: string[];
}