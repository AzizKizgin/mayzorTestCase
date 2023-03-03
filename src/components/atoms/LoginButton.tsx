import React from 'react';
import {Pressable, Text} from 'native-base';

interface ButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
}
const LoginButton = () => {
  return (
    <Pressable
      backgroundColor={'orange'}
      width={'100%'}
      paddingY={'m'}
      alignItems={'center'}
      borderRadius={'sm'}>
      <Text color={'white'} fontSize={'15'}>
        Şimdi Giriş Yap
      </Text>
    </Pressable>
  );
};

export default LoginButton;
