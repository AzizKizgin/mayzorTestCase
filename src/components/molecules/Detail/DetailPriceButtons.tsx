import React from 'react';
import {Box, Pressable, Text} from 'native-base';
import PriceButton from '../../atoms/Detail/PriceButton';

const DetailPriceButtons = () => {
  return (
    <Box
      variant={'detail'}
      flexDirection={'row'}
      justifyContent={'space-between'}>
      <PriceButton type={'market'} />
      <PriceButton type={'mayzor'} />
    </Box>
  );
};

export default DetailPriceButtons;
