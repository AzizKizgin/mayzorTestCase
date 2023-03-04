import React from 'react';
import {Box, HStack, Text} from 'native-base';
import Time from '../atoms/Time';

const ProductTime = () => {
  return (
    <Box
      backgroundColor={'orange'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'center'}>
      <Box>
        <Text color={'white'}>Kalan</Text>
        <Text color={'white'}>Süre</Text>
      </Box>
      <HStack space={1}>
        <Time time={9} unit={'Saat'} />
        <Time time={23} unit={'Dakika'} />
        <Time time={42} unit={'Saniye'} />
      </HStack>
    </Box>
  );
};

export default ProductTime;
