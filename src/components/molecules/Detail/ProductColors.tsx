import React, {useState} from 'react';
import {Box, HStack, Pressable, Text} from 'native-base';
import {COLORS, COLOR_NAMES} from '../../../utils/consts';
import ColorBox from '../../atoms/Detail/ColorBox';
import {strings} from '../../../utils/strings';

const ProductColors = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  return (
    <Box variant={'detail'}>
      <Box>
        <Text color={'black'} fontSize={'sm'}>
          <Text color={'black'} fontSize={'sm'} fontWeight={'bold'}>
            {strings.color}:
          </Text>
          {' ' + COLOR_NAMES[COLORS[selectedColor].toString()]}
        </Text>
        <HStack space={2} marginTop={2}>
          {COLORS.map((color, index) => (
            <Pressable key={index} onPress={() => setSelectedColor(index)}>
              <ColorBox
                color={color}
                isChoosen={index === selectedColor ? true : false}
              />
            </Pressable>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductColors;
