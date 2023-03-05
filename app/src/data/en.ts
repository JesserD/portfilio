import { RiComputerLine } from 'react-icons/ri';
import { FaDev, FaServer } from 'react-icons/fa';
import { GiBookCover } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import {
  AboutPanelData,
  AppData,
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
      'I can build modern responsive web-based graphical user interfaces using React.js, TypeScript, and Chakra UI',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about:
      'I can build APIs and develope integrations between IT-systems using .NET',
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
      'I am happy to give my clients suggestions on how their IT-related problems can be solved and adapt my speech to their IT knowledge level',
  },
];

const resumeSections: ResumeSection[] = [
  {
    sectionName: 'Education',
    title: 'Bachelor of Science in Computer Engineering, 180 credits',
    subTitle: 'KTH Royal Institute Of Technology (2018 - 2022)',
    description: '',
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
  title: 'Software Developer',
  buttonContent: 'Download CV',
  resourceHref: '/assets/Jesser Daa Resume.pdf',
  location: 'Stockholm, Sweden',
  emailAddress: 'jesser.daa@gmail.com',
  darkMode: 'Dark Mode',
  lightMode: 'Light Mode',
};

const tabListItems = ['About', 'Resume', 'Other Skills', 'Projects'];

const aboutPanelData: AboutPanelData = {
  description:'I am a software developer who has been programming since 2018. I have developed my programming skills by both understanding the most common theoretical concepts of the software field and aquring the practical experience by working on lots of IT-projects.',
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
    description: 'A social media platform where users can register, login, add, share ,edit and attend events, follow each other, and personalise their profiles. Hint* log in using the following information : bob@test.com, Pa$$w0rd',
    imagePath: '/images/ReactivitesPlatform.png',
    deployedUrl: 'https://app-dev-reactivities.azurewebsites.net/',
    githubUrl: 'https://github.com/JesserD/Reactivities-Platform',
    keyTechs: ['.NET 6', 'SQLite', 'Entity Framework', '.Net Core Identity', 'SignalR', 'TypeScript', 'React.js', 'MobX.js', 'Axios.js', 'Chakra UI']
  },
  {
    name: 'WhatsApp Clone',
    description: 'A centralized instant messaging service where users can register, login, and text each other in real time. Hint* log in using the following information : bob@test.com, Pa$$w0rd',
    imagePath: '/images/WhatsAppClone.png',
    deployedUrl: 'https://app-dev-whatsappclone.azurewebsites.net/',
    githubUrl: 'https://github.com/JesserD/WhatsAppClone',
    keyTechs: ['.NET 7', 'SQLite', 'Entity Framework', '.Net Core Identity', 'SignalR', 'TypeScript', 'React.js', 'MobX.js', 'Axios.js', 'Chakra UI']
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
    name: 'BSport+',
    description:'A portal for physical activities meant for people with disability',
    imagePath: '/images/BSportPlus.png',
    deployedUrl: 'https://bsportplus.herokuapp.com/capacitybuilding/',
    githubUrl: 'https://github.com/JesserD/bsportplus',
    keyTechs: ['TypeScript', 'React.js', 'Chakra UI', 'Framer Motion'],
  },
  {
    name: 'Portfilio',
    description:'A portfolio single page application',
    imagePath: '/images/portfilio.png',
    deployedUrl: null,
    githubUrl: 'https://github.com/JesserD/portfilio',
    keyTechs: ['TypeScript', 'React.js', 'MobX.js', 'Chakra UI', 'Framer Motion'],
  },
];

const panelDataEnglish: AppData = {
  tabListItems,
  sideBarData,
  resumePanelData,
  aboutPanelData,
  projectPanelData,
};

export default panelDataEnglish;
