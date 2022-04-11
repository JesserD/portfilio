import { IconType } from 'react-icons';

export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface AboutPanelData {
  description: string;
  introToServices: string;
  services: Service[];
}
export interface SideBarData {
  photo:string;
  name: string;
  surname: string;
  title: string;
  buttonContent: string;
  resourceHref: string;
  location: string;
  emailAddress: string;
  darkMode: string;
  lightMode: string;
}

export interface ResumePanelData {
  resumeSections: ResumeSection[];
  skills: Skill[];
}

export interface ResumeSection {
  sectionName: string;
  title: string;
  subTitle: string;
  description: string;
  image: string | IconType;
  link?: string;
}


export interface AppData {
  sideBarData: SideBarData;
  tabListItems: string[];
  aboutPanelData: AboutPanelData;
  resumePanelData: ResumePanelData;
  projectPanelData: Project[];
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
  deployedUrl: string | null;
  githubUrl: string;
  keyTechs: string[];
}
