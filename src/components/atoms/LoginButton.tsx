import React, {FC} from 'react';
import {Pressable, Text} from 'native-base';
import {strings} from '../../utils/strings';

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
        {strings.signIn}
      </Text>
    </Pressable>
  );
};

export default LoginButton;
