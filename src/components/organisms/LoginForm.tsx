import React from 'react';
import {Box, Text, VStack} from 'native-base';
import {SCREEN_HEIGHT} from '../../utils/consts';
import LoginFormTop from '../molecules/LoginFormTop';
import LoginInputs from '../molecules/LoginInputs';
import LoginButton from '../atoms/LoginButton';

const LoginForm = () => {
  return (
    <Box
      marginX={'xl'}
      height={SCREEN_HEIGHT / 2.25}
      backgroundColor={'white'}
      borderRadius={'lg'}>
      <LoginFormTop />
      <VStack
        flex={1}
        alignItems={'center'}
        marginBottom={'l'}
        paddingX={'m'}
        justifyContent={'space-evenly'}>
        <LoginInputs />
        <Box>
          <Text color={'black'}>Şifreni mi Unuttun</Text>
        </Box>
        <LoginButton />
      </VStack>
    </Box>
  );
};

export default LoginForm;
