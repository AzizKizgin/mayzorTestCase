import React, {FC, memo} from 'react';
import {Box, VStack} from 'native-base';
import ProductImage from '../atoms/ProductImage';
import ProductTop from '../atoms/ProductTop';
import ProductInfo from '../atoms/ProductInfo';
import ProductTime from '../molecules/ProductTime';
import ProductPrice from '../atoms/ProductPrice';
import {ProductProvider} from '../../context/ProductContext';

interface ProductItemProps {
  product: Product;
}
const ProductItem: FC<ProductItemProps> = ({product}) => {
  return (
    <ProductProvider product={product}>
      <Box
        flexDirection={'row'}
        marginTop={'m'}
        backgroundColor={'white'}
        height={150}>
        <Box w={'40%'}>
          <ProductImage />
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
    </ProductProvider>
  );
};

export default memo(ProductItem);
