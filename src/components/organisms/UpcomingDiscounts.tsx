import React from 'react';
import {Box, HStack, Text, VStack} from 'native-base';
import OtherDiscountsHeader from '../molecules/OtherDiscountsHeader';
import DatePicker from '../molecules/DatePicker';
import TomorrowsProduct from './TomorrowsProduct';

const UpcomingDiscounts = () => {
  return (
    <VStack space={4}>
      <OtherDiscountsHeader title="Yarın Başlayacak Fırsatlar" />
      <DatePicker />
      <HStack space={4}>
        <TomorrowsProduct />
        <TomorrowsProduct />
      </HStack>
    </VStack>
  );
};

export default UpcomingDiscounts;
