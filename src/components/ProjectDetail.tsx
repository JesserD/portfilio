import React from 'react';
import { useColorModeValue, Image, Heading, Button, Text, Badge, Link, Flex, Icon } from '@chakra-ui/react';
import { Project } from '../app/models/Interfaces';
import { AiFillGithub } from 'react-icons/ai';

const ProjectDetail = ({ imagePath, name, description, keyTechs, githubUrl, deployedUrl }: Project) => {
    return (
        <Flex rounded={'2xl'} gap={3} p={3} boxShadow={'2xl'} direction={'column'}
            bgColor={useColorModeValue('gray.200', '#16181d')}>
            <Heading fontSize={'2xs'}>{name}</Heading>
            <Text>{description}</Text>
            <Flex gap={2} wrap={'wrap'}>
                {keyTechs.map(e => <Badge key={e} variant={'solid'} colorScheme={'whatsapp'} >{e}</Badge>)}
            </Flex>
            <Image alt={''} src={imagePath} />

            <Button as={Link} href={githubUrl} _hover={{ bg: 'gray.500' }}
                bgGradient={'linear(to-l, #92FE9D, #00C9FF)'}
                color={'black'} leftIcon={<Icon as={AiFillGithub}
                    boxSize={'30px'} />} >
                GitHub
            </Button>
            {
                deployedUrl && <Button as={Link} _hover={{ bg: 'gray.500' }}
                    bgGradient={'linear(to-l, #92FE9D, #00C9FF)'} href={deployedUrl}
                    color={'black'} leftIcon={<Icon as={AiFillGithub}
                        boxSize={'30px'} />} >Visit</Button>
            }
        </Flex >
    );
};

export default ProjectDetail;
