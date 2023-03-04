import React from 'react';
import {Box, HStack, ScrollView, Text, VStack} from 'native-base';
import ProductImage from '../atoms/ProductImage';
import ProductTop from '../atoms/ProductTop';
import ProductInfo from '../atoms/ProductInfo';
import ProductTime from '../molecules/ProductTime';
import ProductPrice from '../atoms/ProductPrice';
import {SCREEN_WIDTH} from '../../utils/consts';

const ProductItem = () => {
  return (
    <Box
      flexDirection={'row'}
      marginTop={'m'}
      backgroundColor={'white'}
      height={150}>
      <Box w={'40%'}>
        <ProductImage name={'Slazenger'} size={150} discount={50} />
      </Box>
      <Box w={'60%'}>
        <VStack paddingY={'s'} space={1}>
          <ProductTop />
          <ProductInfo />
          <ProductTime />
          <ProductPrice />
        </VStack>
      </Box>
    </Box>
  );
};

export default ProductItem;
