import React from 'react';
import {Box, Text} from 'native-base';
import {useProduct} from '../../context/ProductContext';

const ProductPrice = () => {
  const {product} = useProduct();
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
        {product.oldPrice} TL
      </Text>
      <Text marginLeft={'xs'} color={'orange'} bold>
        {product.newPrice} TL
      </Text>
    </Box>
  );
};

export default ProductPrice;
