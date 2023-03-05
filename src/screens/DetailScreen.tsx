import React from 'react';
import {Box, ScrollView, VStack} from 'native-base';
import DetailImage from '../components/organisms/DetailImage';
import {ProductProvider} from '../context/ProductContext';
import DetailProductOptions from '../components/organisms/DetailProductOptions';
import ProductDescription from '../components/molecules/Detail/ProductDescription';
import ProductReview from '../components/organisms/ProductReview';

const data: {
  products: Product[];
} = require('../data/productData.json');

const DetailScreen = () => {
  return (
    <ProductProvider product={data.products[0]}>
      <Box flex={1} backgroundColor={'background'}>
        <ScrollView>
          <DetailImage />
          <Box flex={1} paddingX={'l'}>
            <DetailProductOptions />
            <ProductDescription />
            <ProductReview />
          </Box>
        </ScrollView>
      </Box>
    </ProductProvider>
  );
};

export default DetailScreen;
