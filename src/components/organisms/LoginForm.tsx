import React from 'react';
import {Box, Text, VStack} from 'native-base';
import LoginInputs from '../molecules/LoginInputs';
import LoginButton from '../atoms/LoginButton';

const LoginForm = () => {
  return (
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
  );
};

export default LoginForm;
