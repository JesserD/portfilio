import { BsCircleFill } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';
import {
  SiCsharp,
  SiTypescript,
  SiVisualstudiocode,
  SiDocker,
  SiDotNet,
  SiMicrosoftazure,
  SiAzuredevops,
} from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { Skill } from '../app/models/Interfaces';

export const languagesAndFrameworks: Skill[] = [
  {
    Icon: SiCsharp,
    name: 'C#',
    level: '80',
  },
  {
    Icon: SiDotNet,
    name: '.NET',
    level: '80',
  },
  {
    Icon: SiDotNet,
    name: 'EntityFramework',
    level: '70',
  },
  {
    Icon: SiMicrosoftazure,
    name: 'Microsoft Azure',
    level: '70',
  },
  {
    Icon: SiTypescript,
    name: 'TypeScript',
    level: '70',
  },
  {
    Icon: GrReactjs,
    name: 'React.js',
    level: '90',
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
    name: 'GitHub',
    level: '70',
  },
  {
    Icon: SiAzuredevops,
    name: 'Azure DevOps',
    level: '85',
  },
  {
    Icon: SiDocker,
    name: 'Docker',
    level: '70',
  },
];
