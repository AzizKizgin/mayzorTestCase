import React from 'react';
import {Box, Text} from 'native-base';
import {SCREEN_HEIGHT} from '../../utils/consts';

const LoginBackground = () => {
  return (
    <Box
      height={SCREEN_HEIGHT / 3}
      backgroundColor={'purple'}
      position={'absolute'}
      top={0}
      right={0}
      left={0}
      alignItems={'center'}
      justifyContent={'center'}>
      <Text fontSize={30} fontWeight={'bold'} color={'white'}>
        MAYZOR TEST CASE
      </Text>
    </Box>
  );
};

export default LoginBackground;
