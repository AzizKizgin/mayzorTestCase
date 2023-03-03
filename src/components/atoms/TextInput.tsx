import React, {FC, useState} from 'react';
import {Box, IInputProps, Input} from 'native-base';

interface TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  inputProps?: IInputProps;
  secureTextEntry?: boolean;
}
const TextInput: FC<TextInputProps> = (props) => {
  const {placeholder, value, onChangeText, inputProps, secureTextEntry} = props;
  const [borderColor, setBorderColor] = useState('gray.200');
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  return (
    <Box
      width={'100%'}
      borderWidth={'1'}
      paddingY={'xs'}
      backgroundColor={'white'}
      borderColor={borderColor}
      borderRadius={'sm'}>
      <Input
        _focus={{
          selectionColor: 'purple',
        }}
        marginX={'sm'}
        value={value}
        onChangeText={onChangeText}
        borderWidth={0}
        placeholder={placeholder}
        backgroundColor={'white'}
        fontSize={'sm'}
        color={'black'}
        onFocus={() => setBorderColor('purple')}
        onBlur={() => setBorderColor('gray.200')}
        onEndEditing={() => setBorderColor('gray.200')}
        secureTextEntry={secureTextEntry || false}
        {...inputProps}
      />
    </Box>
  );
};

export default TextInput;
