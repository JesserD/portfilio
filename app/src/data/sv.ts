import { RiComputerLine } from 'react-icons/ri';
import { FaDev, FaServer } from 'react-icons/fa';
import { GiBookCover } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { AppData, Project, ResumePanelData, ResumeSection, Service, SideBarData } from '../app/models/Interfaces';
import { languagesAndFrameworks } from './common';

const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend-utveckling',
    about: 'Jag kan bygga moderna responsiva webbaserade grafiska användargränssnitt med hjälp av React.js, TypeScript och Chakra UI',
  },
  {
    Icon: FaServer,
    title: 'Backend-utveckling',
    about: 'Jag kan bygga API:er och utveckla integrationer mellan IT-system med hjälp av .NET',
  },
  {
    Icon: GiBookCover,
    title: 'Personlig utveckling',
    about: 'Jag är angelägen om att hålla mig uppdaterad på de senaste teknikerna inom webbutvecklingsområdet',
  },
  {
    Icon: BsFillPersonFill,
    title: 'Personlighetsdrag',
    about: 'Jag ger gärna mina kunder förslag på hur deras IT-relaterade problem kan lösas och anpassar mitt tal till deras IT-kunskapsnivå',
  },
];


const resumeSections: ResumeSection[] = [
  {
    sectionName: 'Utbildning',
    title: 'Högskoleingenjörsprogram i datateknik, 180hp',
    subTitle: 'Kungliga Tekniska Högskolan (2018 - 2022)',
    description: '',
    link: 'https://www.kth.se/utbildning/hogskoleingenjor/datateknik-flemingsberg',
    image: '/logoKth.png'
  },
  {
    sectionName: 'Intresseområde',
    title: 'Fullstack-webbutveckling',
    subTitle: '.NET & React.js',
    description: 'Jag ser fram emot att göra fler projekt i .NET och React.js',
    image: FaDev
  }
];

const sideBarData: SideBarData = {
  photo: '/images/jesserPhoto.jpg',
  name: 'Jesser',
  surname: 'Daa',
  title: 'Systemutvecklare',
  buttonContent: 'Hämta CV',
  resourceHref: '/assets/Jesser Daa Resume.pdf',
  location: 'Stockholm, Sverige',
  emailAddress: 'jesser.daa@gmail.com',
  darkMode: 'Mörkt läge',
  lightMode: 'Ljusläge',
};

const tabListItems = ['Om', 'CV', 'Andra Kompetenser', 'Projekt'];

const aboutPanelData = {
  description:
    'Jag är systemutvecklare som har programmerat sedan 2018. Jag har utvecklat mina kunskaper inom programmering genom att både förstå de vanligaste teoretiska begreppen inom IT-området och skaffa mig praktisk erfarenhet genom att arbeta med massor av IT-projekt.',
  introToServices: 'Vad jag kan göra :',
  services: services,
};

const resumePanelData: ResumePanelData = {
  resumeSections: resumeSections,
  skills: languagesAndFrameworks
};

const projectPanelData: Project[] = [
  {
    name: 'Reactivites Platform',
    description: 'En social medieplattform där användare kan registrera sig, logga in, lägga till, dela, redigera och delta i evenemang, följa varandra och skräddarsy sina konton efter smak. Tips* logga in med följande användaruppgifter : bob@test.com, Pa$$w0rd',
    imagePath: '/images/ReactivitesPlatform.png',
    deployedUrl: 'https://app-dev-reactivities.azurewebsites.net/',
    githubUrl: 'https://github.com/JesserD/Reactivities-Platform',
    keyTechs: ['.NET 6', 'Postgre SQL', 'Entity Framework', '.Net Core Identity', 'SignalR', 'TypeScript', 'React.js', 'MobX.js', 'Axios.js', 'Chakra UI']
  },
  {
    name: 'Community',
    description:'En enkel webbapplikation för att skicka privata textmeddelanden',
    imagePath: '/images/Community.png',
    deployedUrl: null,
    githubUrl: 'https://github.com/JesserD/Community',
    keyTechs: ['ASP.NET 3.1 Core MVC', 'MS SQL', 'Entity Framework', '.Net Core Identity', 'MVVM'],
  },
  {
    name: 'BSport+',
    description:'En portal för fysiska aktiviteter avsedda för personer med funktionsnedsättning',
    imagePath: '/images/BSportPlus.png',
    deployedUrl: 'https://bsportplus.herokuapp.com/capacitybuilding/',
    githubUrl: 'https://github.com/JesserD/bsportplus',
    keyTechs: ['TypeScript', 'React.js', 'Chakra UI', 'Framer Motion'],
  },
  {
    name: 'Portfilio',
    description:'En portföljapplikation',
    imagePath: '/images/portfilio.png',
    deployedUrl: null,
    githubUrl: 'https://github.com/JesserD/portfilio',
    keyTechs: ['TypeScript', 'React.js', 'MobX.js', 'Chakra UI', 'Framer Motion'],
  },
];

const panelDataSwedish: AppData = {
  sideBarData,
  tabListItems,
  aboutPanelData,
  resumePanelData,
  projectPanelData,
};

export default panelDataSwedish;
