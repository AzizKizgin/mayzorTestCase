import React from 'react';
import {Box, Text} from 'native-base';
import {SCREEN_HEIGHT} from '../../utils/consts';
import {strings} from '../../utils/strings';

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
        {strings.appName}
      </Text>
    </Box>
  );
};

export default LoginBackground;
