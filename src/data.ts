import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { GiBookCover } from 'react-icons/gi';
import { BsCircleFill, BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';
import { SiCsharp, SiTypescript, SiVisualstudiocode, SiW3C, SiDocker, SiDotNet } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { Service, Skill } from './Interfaces';

export const services: Service[] = [
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
    about: 'I have patience to deal with computers without losing my temper',
  },
];

export const languages: Skill[] = [
  {
    Icon: SiCsharp,
    name: '.NET C#',
    level: '60',
  },
  {
    Icon: SiDotNet,
    name: 'EntityFramework',
    level: '50',
  },
  {
    Icon: SiDotNet,
    name: 'IdentityCore',
    level: '45',
  },
  {
    Icon: SiTypescript,
    name: 'TypeScript',
    level: '70',
  },
  {
    Icon: GrReactjs,
    name: 'React.js',
    level: '70',
  },
  {
    Icon: BsCircleFill,
    name: 'MobX.js',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Axios.js',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Chakra UI',
    level: '70',
  },
];

export const tools: Skill[] = [
  {
    Icon: SiVisualstudiocode,
    name: 'Vscode',
    level: '70',
  },
  {
    Icon: AiOutlineGithub,
    name: 'Git',
    level: '40',
  },
  {
    Icon: SiW3C,
    name: 'WCAG',
    level: '50',
  },
  {
    Icon: SiDocker,
    name: 'Docker',
    level: '35',
  },
];
