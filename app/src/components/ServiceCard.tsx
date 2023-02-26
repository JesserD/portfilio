import {
  Heading,
  Flex,
  Text,
  useColorModeValue,
  Icon as ChakraIcon,
} from '@chakra-ui/react';
import React from 'react';
import { Service } from '../app/models/Interfaces';
import { MotionFlex, itemAnimationY } from './Animation';

const ServiceCard = ({ Icon, title, about }: Service) => {
  return (
    <MotionFlex
      variants={itemAnimationY}
      justifyContent={'baseline'}
      rounded={'2xl'}
      gap={3}
      p={3}
      boxShadow={'2xl'}
      bgColor={useColorModeValue('gray.200', '#16181d')}>
      <ChakraIcon as={Icon} my={'auto'}boxSize={10} color={'green.400'} />
      <Flex direction={'column'} my={'auto'}>
        <Heading fontSize={'2xs'}>{title}</Heading>
        <Text fontSize={'md'}>{about}</Text>
      </Flex>
    </MotionFlex>
  );
};

export default ServiceCard;
