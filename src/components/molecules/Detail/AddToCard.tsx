import React from 'react';
import {Box, HStack, Pressable, Text} from 'native-base';
import {useProduct} from '../../../context/ProductContext';

const AddToCard = () => {
  const {product} = useProduct();
  return (
    <Box marginY={'l'} backgroundColor={'white'} paddingY={'l'}>
      <HStack justifyContent={'center'} space={6}>
        <Box
          backgroundColor={'orange'}
          paddingX={'l'}
          paddingY={'m'}
          borderRadius={'md'}
          alignItems={'center'}>
          <Text color={'white'} fontSize={'md'}>
            -{product.discount}%
          </Text>
        </Box>
        <Box>
          <Text
            textDecorationLine={'line-through'}
            color={'lightGray'}
            fontSize={'lg'}
            fontWeight={'normal'}>
            {product.oldPrice} TL
          </Text>
          <Text color={'purple'} fontSize={'lg'} fontWeight={'extrabold'}>
            {product.newPrice} TL
          </Text>
        </Box>
        <Pressable>
          <Box
            backgroundColor={'purple'}
            paddingX={'xl'}
            paddingY={'m'}
            borderRadius={'md'}
            alignItems={'center'}>
            <Text color={'white'} fontSize={'md'}>
              Sepete Ekle
            </Text>
          </Box>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default AddToCard;
