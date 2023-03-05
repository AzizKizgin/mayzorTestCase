import React from 'react';
import {Box, Text} from 'native-base';
import {useProduct} from '../../../context/ProductContext';

const DetailProductInfo = () => {
  const {product} = useProduct();
  return (
    <Box variant={'detail'}>
      <Text letterSpacing={0} fontWeight={'semibold'} flexShrink={1}>
        {product.name}
      </Text>
    </Box>
  );
};

export default DetailProductInfo;
