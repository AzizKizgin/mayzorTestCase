import React from 'react';
import {Box, HStack, Text, VStack} from 'native-base';
import OtherDiscountsHeader from '../molecules/OtherDiscountsHeader';
import MissingProduct from './MissingProduct';

const MissingDiscounts = () => {
  return (
    <VStack space={4}>
      <OtherDiscountsHeader title="Kaçırdığınız Fırsatlar" />
      <HStack space={4}>
        <MissingProduct />
        <MissingProduct />
      </HStack>
    </VStack>
  );
};

export default MissingDiscounts;
