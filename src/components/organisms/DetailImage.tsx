import React from 'react';
import {Box, Image, ScrollView, Text, VStack} from 'native-base';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/consts';
import DetailImageBottom from '../molecules/DetailImageBottom';
import IconButton from '../atoms/IconButton';
import {useNavigation} from '@react-navigation/native';
import FavButton from '../atoms/FavButton';
import {useProduct} from '../../context/ProductContext';

const data = [1, 2, 3, 4, 5];
const DetailImage = () => {
  const {product} = useProduct();
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <Box>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <Box key={index}>
              <Image
                source={{
                  uri: product?.image,
                }}
                defaultSource={require('../../assets/default.png')}
                alt={'tomorrowsProduct'}
                resizeMode={'cover'}
                height={SCREEN_HEIGHT * 0.4}
                width={SCREEN_WIDTH}
                borderColor={'gray.200'}
              />
            </Box>
          );
        })}
      </ScrollView>
      <DetailImageBottom imageIndex={0} />
      <Box position={'absolute'} top={21} left={21}>
        <IconButton iconName="chevron-left" iconSize={27} onPress={goBack} />
      </Box>
      <VStack position={'absolute'} top={21} right={21} space={4}>
        <FavButton />
        <IconButton iconName="share-variant-outline" iconSize={27} />
      </VStack>
    </Box>
  );
};

export default DetailImage;
