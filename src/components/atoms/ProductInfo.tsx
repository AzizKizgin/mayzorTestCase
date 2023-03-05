import React from 'react';
import {Box, Text} from 'native-base';
import {useProduct} from '../../context/ProductContext';

const ProductInfo = () => {
  const {product} = useProduct();
  return (
    <Box paddingX={'sm'} flexShrink={1} width={'98%'}>
      <Text letterSpacing={0}>{product.name}</Text>
    </Box>
  );
};

export default ProductInfo;
