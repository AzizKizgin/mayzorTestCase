import React from 'react';
import {Box, Pressable, Text} from 'native-base';
import {useProduct} from '../../../context/ProductContext';

const ShowMoreButton = () => {
  const {product} = useProduct();
  return (
    <Pressable>
      <Box
        alignItems={'center'}
        justifyContent={'center'}
        backgroundColor={'orange'}
        paddingY={'m'}
        width={'100%'}
        borderBottomLeftRadius={'md'}
        borderBottomRightRadius={'md'}>
        <Text fontSize={'lg'} color={'white'}>
          Tümünü Gör ({product.reviews.length})
        </Text>
      </Box>
    </Pressable>
  );
};

export default ShowMoreButton;
