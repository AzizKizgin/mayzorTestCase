import React from 'react';
import {Box, Center, Image, Text, VStack} from 'native-base';
import UpcomingProductTittle from '../atoms/UpcomingProductTitle';
import UpcomingProductPrice from '../atoms/UpcomingProductPrice';
import UpcomingProductImage from '../atoms/UpcomingProductImage';

const TomorrowsProduct = () => {
  return (
    <Box
      backgroundColor={'white'}
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}>
      <VStack space={2} alignItems={'center'} justifyContent={'center'}>
        <UpcomingProductTittle title="1600 TL İndirim" color="purple" />
        <UpcomingProductImage url="https://ayb.akinoncdn.com/products/2022/12/28/1870436/cc906a42-8797-4a9c-a6db-59d73c260cb3_size780x780_quality60_cropCenter.jpg" />
        <Text
          fontSize={'sm'}
          color={'black'}
          paddingY={'xs'}
          marginBottom={'sm'}>
          Bioblas Saç Kremi
        </Text>
        <UpcomingProductPrice newPrice={77.77} oldPrice={99.99} />
      </VStack>
    </Box>
  );
};

export default TomorrowsProduct;
