import React, {FC} from 'react';
import {Box, Pressable, Text} from 'native-base';

interface Props {
  onPress: () => void;
  text: string;
}

const LoginFormTopButton: FC<Props> = ({onPress, text}) => {
  return (
    <Pressable paddingY={'sm'} onPress={onPress}>
      <Text fontSize={'16'}>{text}</Text>
    </Pressable>
  );
};

export default LoginFormTopButton;
