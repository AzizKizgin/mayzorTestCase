import React from 'react';
import {Box, Text} from 'native-base';

const RegisterForm = () => {
  return (
    <Box flex={1} marginBottom={'l'} paddingX={'m'}>
      <Text fontSize={'xl'}>
        Şimdi
        <Text fontSize={'xl'} bold>
          {' Kayıt Ol'}
        </Text>
      </Text>
      <Text marginTop={'sm'}>Kayıt ol tab sayfası</Text>
    </Box>
  );
};

export default RegisterForm;
