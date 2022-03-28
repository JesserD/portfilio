import { RiComputerLine } from 'react-icons/ri';
import { FaDev, FaServer } from 'react-icons/fa';
import { GiBookCover } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import {
  AboutPanelData,
  PanelData,
  Project,
  ResumePanelData,
  ResumeSection,
  Service,
  SideBarData,
} from '../app/models/Interfaces';
import { languagesAndFrameworks } from './common';




const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build responsive accessible graphical user interfaces using React.js, TypeScript, and Chakra UI',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about:
      'I can handle relational databases, business logic, and API endpoints using .NET & its popular frameworks',
  },
  {
    Icon: GiBookCover,
    title: 'Personal Development',
    about:
      'I am keen on keeping myself posted about the latest technologies in the field of web development',
  },
  {
    Icon: BsFillPersonFill,
    title: 'Personal Characteristics',
    about:
      'I have enough patience to deal with a computer until I solve the problem I have',
  },
];

const resumeSections: ResumeSection[] = [
  {
    sectionName: 'Education',
    title: 'Bachelor of Engineering in Computer Engineering, 180 credits',
    subTitle: 'KTH Royal Institute Of Technology (2018 - 2022)',
    description: "I'm about to graduate", // eslint-disable-line
    link: 'https://www.kth.se/utbildning/hogskoleingenjor/datateknik-flemingsberg',
    image: '/logoKth.png'
  },
  {
    sectionName: 'Field Of Interest',
    title: 'Fullstack Web Development',
    subTitle: '.NET & React.js',
    description: 'I look forward to doing more projects using .NET and React.js',
    image: FaDev
  }
];

const sideBarData: SideBarData = {
  photo: '/images/jesserPhoto.jpg',
  name: 'Jesser',
  surname: 'Daa',
  title: 'Web Developer',
  buttonContent: 'Download CV',
  resourceHref: '/assets/Jesser Daa Resume.pdf',
  location: 'Stockholm, Sweden',
  emailAddress: 'jesser.daa@gmail.com',
  darkMode: 'Dark Mode',
  lightMode: 'Light Mode',
};

const tabListItems = ['About', 'Resume', 'Other Skills', 'Projects'];

const aboutPanelData: AboutPanelData = {
  description:
    'My journey with programming started in 2018 as I worked with many university and hobby projects. I used many programming languages and frameworks, but over the past year I have mostly worked with .NET and React.js',
  introToServices: 'What I can do :',
  services: services,
};

const resumePanelData: ResumePanelData = {
  resumeSections: resumeSections,
  skills: languagesAndFrameworks
};

const projectPanelData: Project[] = [
  {
    name: 'Reactivites Platform',
    description: 'A social media platform where users can register, login, add, share ,edit and attend events, follow each other, and personalise their profiles.',
    imagePath: '/images/ReactivitesPlatform.png',
    deployedUrl: 'https://reactivitiesplatform.herokuapp.com/',
    githubUrl: 'https://github.com/JesserD/Reactivities-Platform',
    keyTechs: ['.NET 6', 'Postgre SQL', 'Entity Framework', '.Net Core Identity', 'SignalR', 'TypeScript', 'React.js', 'MobX.js', 'Axios.js', 'Chakra UI']
  },
  {
    name: 'Community',
    description:'A simple messaging web application',
    imagePath: '/images/Community.png',
    deployedUrl: null,
    githubUrl: 'https://github.com/JesserD/Community',
    keyTechs: ['ASP.NET 3.1 Core MVC', 'MS SQL', 'Entity Framework', '.Net Core Identity', 'MVVM'],
  },
  {
    name: 'Portfilio',
    description:'A portfolio single page application',
    imagePath: '/images/portfilio.png',
    deployedUrl: null,
    githubUrl: 'https://github.com/JesserD/portfilio',
    keyTechs: ['TypeScript', 'React.js', 'MobX.js', 'Chakra UI', 'Framer Motion'],
  }
];

const panelDataEnglish: PanelData = {
  tabListItems,
  sideBarData,
  resumePanelData,
  aboutPanelData,
  projectPanelData,
};

export default panelDataEnglish;
