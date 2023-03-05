import React, {FC} from 'react';
import {Box, Center, Text} from 'native-base';

interface SizeBoxProps {
  size: string;
  isChoosen: boolean;
}
const SizeBox: FC<SizeBoxProps> = ({size, isChoosen}) => {
  return (
    <Center
      width={10}
      height={10}
      rounded={'md'}
      backgroundColor={isChoosen ? 'orange' : 'white'}
      borderWidth={0.5}
      borderColor={isChoosen ? 'orange' : 'gray.200'}>
      <Text color={isChoosen ? 'white' : 'black'} fontSize={'sm'}>
        {size}
      </Text>
    </Center>
  );
};

export default SizeBox;
