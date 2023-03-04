import React from 'react';
import {Box, FlatList} from 'native-base';
import Header from '../components/molecules/Header';
import TodaysDiscountsInfo from '../components/molecules/TodaysDiscountsInfo';
import ProductItem from '../components/organisms/ProductItem';
import ListFooter from '../components/organisms/ListFooter';

const HomeScreen = () => {
  return (
    <Box flex={1} backgroundColor={'background'}>
      <Header />
      <FlatList
        padding={'l'}
        data={[1, 2, 3, 4, 5]}
        renderItem={({index}) => <ProductItem key={index.toString()} />}
        ListHeaderComponent={<TodaysDiscountsInfo />}
        ListFooterComponent={<ListFooter key={'listFooter'} />}
      />
    </Box>
  );
};

export default HomeScreen;
