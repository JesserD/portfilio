import {
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
  Link,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import {
  animationFlex,
  MotionFlex,
  MotionSimpleGrid,
  itemAnimationX,
} from '../../components/Animation';
import Bar from '../../components/Bar';
import ModalContainer from '../../components/ModalContainer';
import ProjectCard from '../../components/ProjectCard';
import ServiceCard from '../../components/ServiceCard';
import { tools } from '../../data/common';
import { useStore } from '../store/store';

const Content = ({ ...props }: ChakraProps) => {
  const { commonStore: { data } } = useStore();
  const { tabListItems } = data;

  return (
    <Tabs align={'start'} {...props} isFitted colorScheme={'whatsapp'} isLazy>
      <TabList >
        {tabListItems.map((item, index) => (
          <Tab key={index + item}>{item}</Tab>
        ))}
      </TabList>
      <main>
        <ContentTabPanels />
      </main>
    </Tabs>
  );
};

const ContentTabPanels = observer(() => {
  const {
    commonStore: { data },
  } = useStore();
  const { aboutPanelData, resumePanelData, projectPanelData } = data;

  return (
    <TabPanels >
      <TabPanel p={0}>
        <VStack gap={5}>
          <MotionFlex variants={itemAnimationX} p={4}>
            <Text>{aboutPanelData.description}</Text>
          </MotionFlex>

          <VStack
            w={'full'}
            p={3}
            gap={5}
            bg={useColorModeValue('gray.400', '#0f1115')}>
            <Text fontWeight={'bold'} w={'full'}>
              {aboutPanelData.introToServices}
            </Text>
            <MotionSimpleGrid
              variants={animationFlex}
              initial={'hidden'}
              animate={'visible'}
              gap={4}
              columns={{ base: 1, md: 2 }}>
              {aboutPanelData.services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </MotionSimpleGrid>
          </VStack>
        </VStack>
      </TabPanel>

      <TabPanel>
        <MotionSimpleGrid
          gap={4}
          columns={{ base: 1, md: 2 }}
          variants={animationFlex}
          initial={'hidden'}
          animate={'visible'}>
          {resumePanelData.resumeSections.map(resumeSection =>
            <MotionFlex key={resumeSection.title} variants={itemAnimationX} direction={'column'} justifyContent={'start'} gap={3}>
              <Heading as={'h3'} fontSize={'xl'}>{resumeSection.sectionName}</Heading>
              <Flex gap={2}>
                {
                  typeof (resumeSection.image) == 'string' ?
                    <Image boxSize={'4em'} src={resumeSection.image} alt={''} />
                    :
                    <Icon boxSize={'4em'} as={resumeSection.image} bgGradient={'linear(to-l, #92FE9D, #00C9FF)'} color={useColorModeValue('white', 'black')} />
                }
                <Text as={resumeSection.link ? Link : Text} href={resumeSection.link || ''} fontSize={'lg'} fontWeight={'semibold'}>
                  {resumeSection.title}
                  <br />
                  {resumeSection.subTitle}
                </Text>
              </Flex>
              <Text fontSize={'lg'} fontWeight={'semibold'}></Text>
              <Text>{resumeSection.description}</Text>
            </MotionFlex>
          )}
          
        </MotionSimpleGrid >
        <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={4}>
        {resumePanelData.skills.map((skill, index) => (
            <Bar key={index} {...skill} />
          ))}
        </SimpleGrid>
      </TabPanel>

      <TabPanel>
        <Flex direction={'column'}>
          {tools.map((tool, index) => (
            <Bar key={index} {...tool} />
          ))}
        </Flex>
      </TabPanel>

      <TabPanel >
        <MotionSimpleGrid 
          variants={animationFlex}
          initial={'hidden'}
          animate={'visible'}
          gap={4}
          columns={{ base: 1, md: 3 }}>
          {projectPanelData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </MotionSimpleGrid>
        <ModalContainer/>
      </TabPanel>
    </TabPanels>
  );
});

export default observer(Content);
