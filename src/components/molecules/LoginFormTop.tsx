import React from 'react';
import {Box, HStack, Icon, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginFormTop = () => {
  return (
    <Box paddingX={'s'}>
      <HStack justifyContent={'space-evenly'} paddingY={'l'}>
        <Text fontSize={'16'}>Giriş Yap</Text>
        <Icon
          as={MaterialCommunityIcons}
          name={'swap-horizontal'}
          size={23}
          color={'lightGray'}
        />
        <Text fontSize={'16'}>Kayıt Ol</Text>
      </HStack>
      {/* <Box
            height={0.5}
            backgroundColor={'orange'}
            width={'25%'}

          /> */}
    </Box>
  );
};

export default LoginFormTop;
