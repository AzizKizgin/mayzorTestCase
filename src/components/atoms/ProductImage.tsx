import React, {FC} from 'react';
import {Box, Center, Image, Text} from 'native-base';
import {useProduct} from '../../context/ProductContext';

const ProductImage = () => {
  const {product} = useProduct();
  return (
    <Center alignItems="center" justifyContent="center">
      <Image
        source={{
          uri: product.image,
        }}
        alt="Slazenger"
        resizeMode="cover"
        size={150}
        defaultSource={require('../../assets/default.png')}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        backgroundColor={'purple'}
        borderBottomRightRadius={'md'}>
        <Text color="white" paddingX={'s'} paddingY={'xxs'}>
          {'%' + product.discount}
        </Text>
      </Box>
    </Center>
  );
};

export default ProductImage;
