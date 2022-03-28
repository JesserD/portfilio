import { BsCircleFill } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';
import {
  SiCsharp,
  SiTypescript,
  SiVisualstudiocode,
  SiW3C,
  SiDocker,
  SiDotNet,
} from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { Skill } from '../app/models/Interfaces';

export const languagesAndFrameworks: Skill[] = [
  {
    Icon: SiCsharp,
    name: 'C#',
    level: '60',
  },
  {
    Icon: SiCsharp,
    name: '.NET',
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
    name: 'ChakraUI',
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