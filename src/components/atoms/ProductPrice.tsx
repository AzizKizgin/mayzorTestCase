import React from 'react';
import {Box, Text} from 'native-base';

const ProductPrice = () => {
  return (
    <Box
      flexDirection={'row'}
      alignItems={'center'}
      paddingX={'sm'}
      justifyContent={'space-evenly'}>
      <Text
        textDecorationLine={'line-through'}
        fontSize={'2xs'}
        color={'lightGray'}>
        4.499.99 TL
      </Text>
      <Text marginLeft={'xs'} color={'orange'} bold>
        2.277,77 TL
      </Text>
    </Box>
  );
};

export default ProductPrice;
