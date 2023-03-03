import React from 'react';
import {Box, HStack, Icon, Text} from 'native-base';
import LoginBackground from '../components/molecules/LoginBackground';
import {SCREEN_HEIGHT} from '../utils/consts';
import MaterialCommunityIcons from 'react-native-vector-icons';

const LoginScreen = () => {
  return (
    <Box flex={1} backgroundColor={'background'} justifyContent={'center'}>
      <LoginBackground />
      <Box
        marginX={'xl'}
        height={SCREEN_HEIGHT / 2}
        backgroundColor={'pink.300'}>
        <HStack>
          <Text>Giriş Yap</Text>
          <Icon as={MaterialCommunityIcons} name={'swap-horizontal'} />
        </HStack>
      </Box>
    </Box>
  );
};

export default LoginScreen;
