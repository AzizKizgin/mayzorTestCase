import React, {FC} from 'react';
import {Box, HStack, Text} from 'native-base';

const data = [1, 2, 3, 4, 5];
interface DetailImageBottomProps {
  imageIndex: number;
}
const DetailImageBottom: FC<DetailImageBottomProps> = ({imageIndex}) => {
  return (
    <Box position={'absolute'} bottom={3} alignSelf={'center'}>
      <HStack
        space={1}
        alignItems={'center'}
        padding={'1'}
        rounded={'full'}
        backgroundColor={'black'}>
        {data.map((item, index) => {
          return (
            <Box
              key={index}
              backgroundColor={imageIndex === index ? 'white' : 'black'}
              width={4}
              height={4}
              borderWidth={1}
              borderColor={'white'}
              rounded={'full'}
            />
          );
        })}
      </HStack>
    </Box>
  );
};

export default DetailImageBottom;
