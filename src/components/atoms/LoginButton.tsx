import React from 'react';
import {Pressable, Text} from 'native-base';

interface ButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
}
const LoginButton = () => {
  return (
    <Pressable>
      <Text>Button</Text>
    </Pressable>
  );
};

export default LoginButton;
