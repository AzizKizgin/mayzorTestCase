import React from 'react';
import {Box, Text} from 'native-base';
import {useProduct} from '../../../context/ProductContext';
import {strings} from '../../../utils/strings';

const ProductDescription = () => {
  const {product} = useProduct();
  return (
    <Box marginBottom={'m'}>
      <Box variant={'detail'}>
        <Text fontSize={'md'} color={'black'}>
          {strings.productInfo}
        </Text>
      </Box>
      <Box variant={'detail'}>
        <Box>
          <Text>{product.description}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDescription;
