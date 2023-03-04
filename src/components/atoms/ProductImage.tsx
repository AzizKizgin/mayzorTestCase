import React, {FC} from 'react';
import {Box, Center, Image, Text} from 'native-base';

interface ProductImageProps {
  name: string;
  size: number;
  discount?: number;
}
const ProductImage: FC<ProductImageProps> = (props) => {
  const {name, size, discount} = props;
  return (
    <Center alignItems="center" justifyContent="center">
      <Image
        source={require('../../assets/slazenger.png')}
        alt="Slazenger"
        resizeMode="cover"
        size={size}
      />
      {discount && (
        <Box
          position="absolute"
          top={0}
          left={0}
          backgroundColor={'purple'}
          borderBottomRightRadius={'md'}>
          <Text color="white" paddingX={'s'} paddingY={'xxs'}>
            {'%' + discount}
          </Text>
        </Box>
      )}
    </Center>
  );
};

export default ProductImage;
