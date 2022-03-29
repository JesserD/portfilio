import { RiComputerLine } from 'react-icons/ri';
import { FaDev, FaServer } from 'react-icons/fa';
import { GiBookCover } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { PanelData, Project, ResumePanelData, ResumeSection, Service, SideBarData } from '../app/models/Interfaces';
import { languagesAndFrameworks } from './common';

const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend-utveckling',
    about:
      'Jag kan bygga responsiva tillgängliga grafiska användargränssnitt med hjälp av React.js, TypeScript och Chakra-UI',
  },
  {
    Icon: FaServer,
    title: 'Backend-utveckling',
    about:
      'Jag kan hantera relationsdatabaser, affärslogik och API-slutpunkter med hjälp av .NET och dess populära ramverk',
  },
  {
    Icon: GiBookCover,
    title: 'Personlig utveckling',
    about:
      'Jag är angelägen om att hålla mig uppdaterad om de senaste teknikerna inom webbutvecklingsområdet',
  },
  {
    Icon: BsFillPersonFill,
    title: 'Personlighetsdrag',
    about:
      'Jag har tålamod nog att arbeta med datorn tills jag löser det problem jag har',
  },
];


const resumeSections: ResumeSection[] = [
  {
    sectionName: 'Utbildning',
    title: 'Högskoleingenjörsprogram i datateknik, 180hp',
    subTitle: 'Kungliga Tekniska Högskolan (2018 - 2022)',
    description: 'Jag är nära att ta examen',
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
  title: 'Webbutvecklare',
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
    'Min resa med programmering började 2018 då jag arbetade med många universitets- och hobbyprojekt. Jag använde många programmeringsspråk och ramverk, men under det senaste året har jag arbetat mestadels med .NET och React.js.',
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
    deployedUrl: 'https://reactivitiesplatform.herokuapp.com/',
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
    name: 'Portfilio',
    description:'En portföljapplikation',
    imagePath: '/images/portfilio.png',
    deployedUrl: null,
    githubUrl: 'https://github.com/JesserD/portfilio',
    keyTechs: ['TypeScript', 'React.js', 'MobX.js', 'Chakra UI', 'Framer Motion'],
  },
];

const panelDataSwedish: PanelData = {
  sideBarData,
  tabListItems,
  aboutPanelData,
  resumePanelData,
  projectPanelData,
};

export default panelDataSwedish;
