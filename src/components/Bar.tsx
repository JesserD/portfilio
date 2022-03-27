import { Flex, Icon as ChakraIcon, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Skill } from '../Interfaces';
import { MotionFlex } from './Animation';

const Bar = ({ Icon, name, level }: Skill) => {
  const barWidth = `${level}%`;
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: barWidth,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stifness: 100,
      },
    },
  };
  return (
    <Flex
      w={'full'}
      my={2}
      textColor={useColorModeValue('white','black')}
      bgColor={useColorModeValue('gray.200', '#16181d')}
      rounded={'full'}>
      <MotionFlex
        variants={variants}
        initial={'initial'}
        animate={'animate'}
        gap={2}
        px={4}
        py={1}
        w={barWidth}
        rounded={'full'}
        bgGradient={'linear(to-l, #92FE9D, #00C9FF)'}>
        <ChakraIcon my={'auto'} as={Icon} /> {name}
      </MotionFlex>
    </Flex>
  );
};

export default Bar;
