import React from 'react';
import {Box, ScrollView, VStack} from 'native-base';
import DetailImage from '../components/organisms/DetailImage';
import {ProductProvider} from '../context/ProductContext';
import DetailProductOptions from '../components/organisms/DetailProductOptions';
import ProductDescription from '../components/molecules/Detail/ProductDescription';
import ProductReview from '../components/organisms/ProductReview';
import MoreOptionButtonGroup from '../components/molecules/Detail/MoreOptionButtonGroup';
import UpcomingDiscounts from '../components/organisms/UpcomingDiscounts';
import AddToCard from '../components/molecules/Detail/AddToCard';
import {RouteProp, useRoute} from '@react-navigation/native';

const data: {
  products: Product[];
} = require('../data/productData.json');

const DetailScreen = () => {
  const route = useRoute<RouteProp<HomeNavigationParams, 'Details'>>();
  const {id} = route.params;
  return (
    <ProductProvider product={data.products[id]}>
      <Box flex={1} backgroundColor={'background'}>
        <ScrollView>
          <DetailImage />
          <Box flex={1} paddingX={'l'}>
            <DetailProductOptions />
            <ProductDescription />
            <ProductReview />
            <MoreOptionButtonGroup />
            <UpcomingDiscounts />
          </Box>
          <AddToCard />
        </ScrollView>
      </Box>
    </ProductProvider>
  );
};

export default DetailScreen;
