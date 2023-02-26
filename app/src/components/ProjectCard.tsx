import { useColorModeValue, Image, Heading, Link } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Project } from '../app/models/Interfaces';
import { useStore } from '../app/store/store';
import { itemAnimationY, MotionFlex } from './Animation';
import ProjectDetail from './ProjectDetail';

const ProjectCard = (project: Project) => {
    const { modalStore } = useStore();
    return (
        <MotionFlex
            as={Link}
            variants={itemAnimationY}
            textAlign={'center'}
            rounded={'2xl'}
            gap={3}
            p={3}
            boxShadow={'2xl'}
            direction={'column'}
            _hover={{bg: 'gray.400', transform:'translateY(-10px)'}}
            onClick={() => modalStore.openModal(<ProjectDetail {...project} />)}
            bgColor={useColorModeValue('gray.200', '#16181d')}>
            <Image alt={''} src={project.imagePath} />
            <Heading fontSize={'2xs'}>{project.name}</Heading>
        </MotionFlex>
    );
};

export default observer(ProjectCard);
