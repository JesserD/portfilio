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
  useColorMode,
} from '@chakra-ui/react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload, // eslint-disable-line
} from 'react-icons/ai';
import Flag from 'react-world-flags';

import { GoLocation } from 'react-icons/go';
import { IoMdMail } from 'react-icons/io';
import React from 'react';
import ColorModeSwitcher from '../../components/ColorModeSwitcher';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store/store';
import { Langauge } from '../models/Language';

const SideBar = ({ ...props }: FlexProps) => {
  const {
    commonStore: { data },
  } = useStore();
  const { sideBarData } = data;
  const {
    commonStore: { selectedLangauge, setLangauge },
  } = useStore();
  const { colorMode } = useColorMode();
  return (
    <Flex direction={'column'} {...props}>
      <Image
        borderRadius={'full'}
        boxSize={'8rem'}
        src={sideBarData.photo}
        alt={''}
      />
      <Heading as={'h1'} fontSize={'3xl'} fontFamily={'kaushan'}>
        <chakra.span color={'green.500'}>{sideBarData.name}</chakra.span>{' '}
        {sideBarData.surname}
      </Heading>
      <Flex
        bgColor={useColorModeValue('gray.200', '#16181d')}
        rounded={'lg'}
        w={'90%'}
        justifyContent={'center'}>
        {sideBarData.title}
      </Flex>
      {/*
      <Link
        as={Button}
        leftIcon={<AiOutlineDownload />}
        href={sideBarData.resourceHref}
        download={sideBarData.resourceHref.split('/').slice(-1)[0]}
        rounded={'lg'}
        w={'90%'}>
        {sideBarData.buttonContent}
        </Link>
        */}

      <Flex justifyContent={'space-evenly'} w={'full'}>
        <Link
          aria-label={'Go to linkedin profile'}
          href={'https://www.linkedin.com/in/jesser-daa/'}>
          <Icon as={AiFillLinkedin} boxSize={'30px'} color={'green.400'} />
        </Link>
        <Link
          aria-label={'Go to GitHub profile'}
          href={'https://github.com/JesserD'}>
          <Icon as={AiFillGithub} boxSize={'30px'} color={'green.400'} />
        </Link>
      </Flex>

      <Flex
        direction={'column'}
        bgColor={useColorModeValue('gray.200', '#16181d')}
        w={'90%'}
        justifyContent={'center'}
        py={3}>
        <Flex justifyContent={'center'} gap={2}>
          <GoLocation />
          <Text fontSize={'md'}>{sideBarData.location}</Text>
        </Flex>
        <Flex justifyContent={'center'} gap={2}>
          <button
            type={'button'}
            aria-label={`Send email to ${sideBarData.emailAddress}`}
            onClick={() => window.open(`mailto:${sideBarData.emailAddress}`)}>
            <IoMdMail />
          </button>
          <Text fontSize={'md'}>{sideBarData.emailAddress}</Text>
        </Flex>
      </Flex>
      <VStack w={'full'}>
        <Button
          w={'70%'}
          _hover={{ bg: 'gray.500' }}
          bgGradient={'linear(to-l, #92FE9D, #00C9FF)'}
          color={'black'}
          gap={2}
          onClick={() =>
            selectedLangauge === Langauge.English
              ? setLangauge(Langauge.Swedish)
              : setLangauge(Langauge.English)
          }>
          {selectedLangauge === Langauge.English ? (
            <>
              <Flag width={20} code={'se'} alt={''} /> Svenska
            </>
          ) : (
            <>
              <Flag width={20} code={'gb'} alt={''} /> English
            </>
          )}
        </Button>
        <ColorModeSwitcher
          w={'70%'}
          _hover={{ bg: 'gray.500' }}
          bgGradient={'linear(to-l, #92FE9D, #00C9FF)'}
          color={'black'}>
          {colorMode === 'light' ? sideBarData.darkMode : sideBarData.lightMode}
        </ColorModeSwitcher>
      </VStack>
    </Flex>
  );
};

export default observer(SideBar);
