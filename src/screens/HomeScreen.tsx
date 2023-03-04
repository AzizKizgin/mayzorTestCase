import React from 'react';
import {Box, FlatList, ScrollView, Text} from 'native-base';
import Header from '../components/molecules/Header';
import TodaysDiscountsInfo from '../components/molecules/TodaysDiscountsInfo';
import ProductItem from '../components/organisms/ProductItem';

const HomeScreen = () => {
  return (
    <Box flex={1} backgroundColor={'background'}>
      <Header />
      <FlatList
        padding={'l'}
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <ProductItem />}
        ListHeaderComponent={<TodaysDiscountsInfo />}
      />
    </Box>
  );
};

export default HomeScreen;
