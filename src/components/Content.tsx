import {
  Box,
  ChakraProps,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  VStack,
  Image,
  HStack,
  Link,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import { FaDev } from 'react-icons/fa';
import { services, languages, tools } from '../data';
import {
  animationFlex,
  MotionFlex,
  MotionSimpleGrid,
  itemAnimationX,
} from './Animation';
import Bar from './Bar';
import ServiceCard from './ServiceCard';

const Content = ({ ...props }: ChakraProps) => {
  return (
    <Tabs align="start" {...props} isFitted colorScheme={'whatsapp'} isLazy>
      <TabList>
        <Tab>About</Tab>
        <Tab>Resume</Tab>
        <Tab>Other Skills</Tab>
        <Tab>Project</Tab>
      </TabList>
      <main>
        <ContentTabPanels />
      </main>
    </Tabs>
  );
};

const ContentTabPanels = () => {
  return (
    <TabPanels>
      <TabPanel p={0}>
        <VStack gap={5}>
          <Box p={4}>
            <Text fontStyle={'oblique'}>
              I'm currently pursuing a degree (Final Year) in Computer
              Engineering at KTH Royal Institute of Technology. My journey with
              programming started in 2018 as I worked with many university and hobby
              projects. Over the last year, I've been working mostly with .NET and
              React.js.
            </Text>
          </Box>

          <VStack
            w={'full'}
            p={3}
            gap={5}
            bg={useColorModeValue('gray.400', '#0f1115')}>
            <Text fontWeight={'bold'} w={'full'}>
              What I can do :
            </Text>
            <MotionSimpleGrid
              variants={animationFlex}
              initial={'hidden'}
              animate={'visible'}
              gap={4}
              columns={{ base: 1, md: 2 }}>
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </MotionSimpleGrid>
          </VStack>
        </VStack>
      </TabPanel>

      <TabPanel>
        <Box/>
        <MotionSimpleGrid
          gap={4}
          columns={{ base: 1, md: 2 }}
          variants={animationFlex}
          initial={'hidden'}
          animate={'visible'}>
          <MotionFlex
            variants={itemAnimationX}
            direction={'column'}
            justifyContent={'start'}
            gap={3}>
            <Heading as={'h3'} fontSize={'xl'}>
              Education
            </Heading>
            <HStack>
              <Image boxSize={'4em'} src={'/logoKth.png'} alt={''} />
              <Text
                as={Link}
                href={
                  'https://www.kth.se/utbildning/hogskoleingenjor/datateknik-flemingsberg'
                }
                fontSize={'lg'}
                fontWeight={'semibold'}>
                Computer Engineering, 180 credits
                <br />
                KTH Royal Institute Of Technology (2018 - 2022)
              </Text>
            </HStack>
            <Text fontSize={'lg'} fontWeight={'semibold'}></Text>
            <Text>I'm about to graduate</Text>
          </MotionFlex>

          <MotionFlex
            variants={itemAnimationX}
            direction={'column'}
            justifyContent={'start'}
            gap={3}>
            <Heading as={'h3'} fontSize={'xl'}>
              Field Of Interest
            </Heading>
            <HStack>
              <Icon
                boxSize={'4em'}
                as={FaDev}
                bgGradient={'linear(to-l, #92FE9D, #00C9FF)'}
                color={useColorModeValue('white', 'black')}
              />
              <Text fontSize={'lg'} fontWeight={'semibold'}>
                Fullstack Web Development
                <br />
                .NET & React.js
              </Text>
            </HStack>
            <Text fontSize={'lg'} fontWeight={'semibold'}></Text>
            <Text>
              I'm interested in doing more software projects using these
              technologies
            </Text>
          </MotionFlex>

          {languages.map((language, index) => (
            <Bar key={index} {...language} />
          ))}
        </MotionSimpleGrid>
      </TabPanel>

      <TabPanel>
        <Flex direction={'column'}>
          <Heading fontSize={'xl'} as={'h3'}>
            Tools & Software
          </Heading>
          {tools.map((tool, index) => (
            <Bar key={index} {...tool} />
          ))}
        </Flex>
      </TabPanel>

      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  );
};

export default Content;
