import React, {FC} from 'react';
import {Box, Center, Text} from 'native-base';

interface Props {
  oldPrice: number;
  newPrice: number;
}
const UpcomingProductPrice: FC<Props> = (props) => {
  const {oldPrice, newPrice} = props;

  return (
    <Center>
      <Text
        fontSize={'sm'}
        color={'lightGray'}
        textDecorationLine={'line-through'}>
        {oldPrice} TL
      </Text>
      <Text fontSize={'lg'} color={'purple'} bold>
        {newPrice} TL
      </Text>
    </Center>
  );
};

export default UpcomingProductPrice;
