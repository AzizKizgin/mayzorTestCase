import React from 'react';
import {Box, Text} from 'native-base';
import {useProduct} from '../../context/ProductContext';

const ProductInfo = () => {
  const {product} = useProduct();
  return (
    <Box paddingX={'sm'}>
      <Text letterSpacing={0}>{product.name}</Text>
    </Box>
  );
};

export default ProductInfo;
