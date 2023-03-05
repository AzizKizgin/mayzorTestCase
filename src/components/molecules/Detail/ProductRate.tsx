import React from 'react';
import {Box, Icon, Text, HStack} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useProduct} from '../../../context/ProductContext';

const ProductRate = () => {
  const {product} = useProduct();
  return (
    <Box variant={'detail'}>
      <Box
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <HStack alignItems={'center'} space={1}>
          <HStack>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <Icon
                as={MaterialCommunityIcons}
                key={index}
                name={'star'}
                color={index < Number(product.rate) ? 'orange' : 'black'}
                size={'23'}
              />
            ))}
          </HStack>
          <Text color={'gray.500'} fontSize={'md'}>
            ({product.rate}/5)
          </Text>
        </HStack>
        <Text color={'gray.500'} fontSize={'sm'}>
          {product.rateCount} Değerlendirme
        </Text>
      </Box>
    </Box>
  );
};

export default ProductRate;
