import React from 'react';
import {Box, FlatList, Pressable} from 'native-base';
import Header from '../components/molecules/Header';
import TodaysDiscountsInfo from '../components/molecules/TodaysDiscountsInfo';
import ProductItem from '../components/organisms/ProductItem';
import ListFooter from '../components/organisms/ListFooter';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const data: {
  products: Product[];
} = require('../data/productData.json');

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeNavigationParams>>();

  const renderItem = (item: Product) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('Details', {id: item.id});
        }}>
        <ProductItem key={item.id.toString()} product={item} />
      </Pressable>
    );
  };
  return (
    <Box flex={1} backgroundColor={'background'}>
      <Header />
      <FlatList
        padding={'l'}
        data={data.products}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<TodaysDiscountsInfo />}
        ListFooterComponent={<ListFooter key={'listFooter'} />}
      />
    </Box>
  );
};

export default HomeScreen;
