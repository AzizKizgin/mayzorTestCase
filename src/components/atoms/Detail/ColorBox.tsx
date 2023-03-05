import React, {FC} from 'react';
import {Box, Text} from 'native-base';

interface ColorBoxProps {
  color: string;
  isChoosen: boolean;
}
const ColorBox: FC<ColorBoxProps> = ({color, isChoosen}) => {
  return (
    <Box
      width={10}
      height={10}
      rounded={'full'}
      backgroundColor={color}
      alignItems={'center'}
      justifyContent={'center'}>
      <Box
        width={9}
        height={9}
        rounded={'full'}
        backgroundColor={color}
        borderWidth={isChoosen ? 1 : 0}
        borderColor={'white'}
      />
    </Box>
  );
};

export default ColorBox;
