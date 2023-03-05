import React from 'react';
import {Box, Icon, Image, Text} from 'native-base';
import {HStack} from 'native-base';
import {useProduct} from '../../../context/ProductContext';
import ProductInfo from '../../atoms/ProductInfo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {strings} from '../../../utils/strings';

const ProductReviewInfo = () => {
  const {product} = useProduct();
  return (
    <Box variant={'detail'} marginBottom={'m'}>
      <HStack space={2}>
        <Image
          source={{uri: product.image}}
          alt="image"
          size={16}
          resizeMode="cover"
          borderRadius={'md'}
          alignSelf={'center'}
        />
        <Box justifyContent={'center'}>
          <ProductInfo />
          <HStack space={1} paddingX={'s'} marginTop={'xs'}>
            <Icon
              as={MaterialCommunityIcons}
              name="star"
              color="orange"
              size={5}
            />
            <Text fontSize={'sm'} color={'black'}>
              {product.rate}/5 - {product.rateCount} {strings.rate}
            </Text>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default ProductReviewInfo;
