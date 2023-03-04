import React from 'react';
import {Box, Text, VStack} from 'native-base';
import OtherDiscountsHeader from '../molecules/OtherDiscountsHeader';
import UpcomingProductImage from '../atoms/UpcomingProductImage';
import UpcomingProductTittle from '../atoms/UpcomingProductTitle';

const MissingDiscount = () => {
  return (
    <Box
      backgroundColor={'white'}
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}>
      <VStack space={2} alignItems={'center'} justifyContent={'center'}>
        <UpcomingProductTittle title="Oy Oranı: %50" color="orange" />
        <UpcomingProductImage url="https://ayb.akinoncdn.com/products/2022/12/28/1870436/cc906a42-8797-4a9c-a6db-59d73c260cb3_size780x780_quality60_cropCenter.jpg" />
        <Text
          fontSize={'sm'}
          color={'black'}
          paddingY={'xs'}
          marginBottom={'sm'}>
          Bioblas Saç Kremi
        </Text>
        <Text
          fontSize={'sm'}
          color={'lightGray'}
          paddingY={'xs'}
          marginBottom={'sm'}>
          11.32₺'den satıldı
        </Text>
      </VStack>
    </Box>
  );
};

export default MissingDiscount;
