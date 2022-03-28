import * as React from 'react';
import {
  Flex,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import SideBar from './SideBar';
import Content from './Content';
import { MotionFlex, itemAnimationX } from '../../components/Animation';
import { observer } from 'mobx-react-lite';

 const App = () => {
  const [isLargerThan991] = useMediaQuery('(min-width: 992px)');

  return (
    <Flex
      h={'100vh'}
      bgGradient={useColorModeValue(
        'linear(to-l, #92FE9D, #00C9FF)',
        '#17191e',
      )}>
      <MotionFlex
        w={'full'}
        variants={itemAnimationX}
        initial={'hidden'}
        animate={'visible'}
        m={'auto'}
        maxW={isLargerThan991 ? 'inherit' : '760px'}
        h={{ base: 'fit-content', lg: '33em' }}
        justifyContent={'center'}
        direction={isLargerThan991 ? 'row' : 'column'}
        gap={5}>
        <SideBar
          w={{ base: '100%', lg: '20%' }}
          gap={4}
          bg={useColorModeValue('white', '#0f1115')}
          rounded={'2xl'}
          boxShadow={'dark-lg'}
          py={4}
          minW={'20%'}
          alignItems={'center'}
          justifyContent={'space-between'}
        />

        <Content
          w={{ base: '100%', lg: '70%' }}
          bg={useColorModeValue('white', '#0f1115')}
          rounded={'2xl'}
          boxShadow={'dark-lg'}
          overflowY={{ lg: 'scroll' }}
        />
      </MotionFlex>
    </Flex>
  );
};

export default observer(App);