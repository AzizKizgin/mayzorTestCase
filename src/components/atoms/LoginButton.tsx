import React, {FC} from 'react';
import {Pressable, Text} from 'native-base';

interface ButtonProps {
  onPress: () => void;
}
const LoginButton: FC<ButtonProps> = ({onPress}) => {
  return (
    <Pressable
      onPress={onPress}
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
