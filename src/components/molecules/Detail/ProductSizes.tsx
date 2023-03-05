import React, {useState} from 'react';
import {Box, HStack, Text, Pressable} from 'native-base';
import SizeBox from '../../atoms/Detail/SizeBox';
import {PRODUCT_SIZES_NAMES, PRODUCT_SIZES} from '../../../utils/consts';
import {strings} from '../../../utils/strings';

const ProductSizes = () => {
  const [selectedSize, setSelectedSize] = useState(0);
  return (
    <Box variant={'detail'}>
      <Box>
        <Text color={'black'} fontSize={'sm'}>
          <Text color={'black'} fontSize={'sm'} fontWeight={'bold'}>
            {strings.color}:
          </Text>
          {' ' + PRODUCT_SIZES_NAMES[PRODUCT_SIZES[selectedSize].toString()]}
        </Text>
        <HStack space={2} marginTop={2}>
          {PRODUCT_SIZES.map((size, index) => (
            <Pressable key={index} onPress={() => setSelectedSize(index)}>
              <SizeBox
                size={size}
                isChoosen={index === selectedSize ? true : false}
              />
            </Pressable>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductSizes;
