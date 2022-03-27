import {
  VStack,
  Image,
  Heading,
  chakra,
  Flex,
  Button,
  Link,
  Icon,
  Text,
  useColorModeValue,
  FlexProps,
} from '@chakra-ui/react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
} from 'react-icons/ai';
import Flag from 'react-world-flags';

import { GoLocation } from 'react-icons/go';
import { IoMdMail } from 'react-icons/io';
import React from 'react';
import ColorModeSwitcher from './ColorModeSwitcher';

const SideBar = ({ ...props }: FlexProps) => {
  return (
    <Flex direction={'column'} {...props}>
      <Image
        borderRadius="full"
        boxSize="5rem"
        src="https://bit.ly/dan-abramov"
        alt=""
      />
      <Heading as="h1" fontSize="3xl" fontFamily="kaushan">
        <chakra.span color="green.500">Jesser</chakra.span> Daa
      </Heading>
      <Flex
        bgColor={useColorModeValue('gray.200', '#16181d')}
        rounded="lg"
        w="90%"
        justifyContent="center">
        Web Developer
      </Flex>
      <Link
        as={Button}
        leftIcon={<AiOutlineDownload />}
        href="/assets/Jesser Daa Resume.pdf"
        download="Jesser Daa Resume.pdf"
        rounded="lg"
        w="90%">
        Download Resume
      </Link>

      <Flex justifyContent="space-evenly" w="full">
        <Link href="https://www.linkedin.com/in/jesser-daa/">
          <Icon as={AiFillLinkedin} boxSize="30px" color="green.400" />
        </Link>
        <Link href="https://github.com/JesserD">
          <Icon as={AiFillGithub} boxSize="30px" color="green.400" />
        </Link>
      </Flex>

      <Flex
        direction="column"
        bgColor={useColorModeValue('gray.200', '#16181d')}
        w="90%"
        justifyContent="center"
        py={3}>
        <Flex justifyContent="center" gap={2}>
          <GoLocation />
          <Text fontSize="md">Stockholm, Sweden</Text>
        </Flex>
        <Flex justifyContent="center" gap={2}>
          <button
            type="button"
            aria-label="jesser.daa@gmail.com"
            onClick={() => window.open('mailto:jesser.daa@gmail.com')}>
            <IoMdMail />
          </button>
          <Text fontSize="md">jesser.daa@gmail.com</Text>
        </Flex>
      </Flex>
      <VStack w={'full'}>
        <Button
          w="70%"
          _hover={{ bg: 'gray.500' }}
          bgGradient="linear(to-l, #92FE9D, #00C9FF)"
          color={useColorModeValue('white', 'black')}
          gap={2}
          >
         <Flag width={20} code={'se'} /> Svenska
        </Button>
        <ColorModeSwitcher
          w="70%"
          _hover={{ bg: 'gray.500' }}
          bgGradient="linear(to-l, #92FE9D, #00C9FF)"
          color={useColorModeValue('white', 'black')}
        />
      </VStack>
    </Flex>
  );
};

export default SideBar;
