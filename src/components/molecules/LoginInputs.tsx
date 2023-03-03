import React, {FC, useState} from 'react';
import {Box, Icon, Text, VStack} from 'native-base';
import TextInput from '../atoms/TextInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import ShakingBox from '../atoms/ShakingBox';

interface LoginInputsProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isButtonPressed: boolean;
  setIsButtonPressed: (isButtonPressed: boolean) => void;
}

const LoginInputs: FC<LoginInputsProps> = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isButtonPressed,
    setIsButtonPressed,
  } = props;
  return (
    <VStack width={'100%'} space={6}>
      <ShakingBox
        errors={email === '' || password === ''}
        isButtonPressed={isButtonPressed}
        setIsButtonPressed={setIsButtonPressed}>
        <TextInput
          placeholder={'E-Mail Adresi'}
          value={email}
          onChangeText={setEmail}
          inputProps={{
            InputLeftElement: (
              <Icon
                as={MaterialCommunityIcons}
                name={'email-outline'}
                size={23}
                color={'lightGray'}
              />
            ),
          }}
        />
      </ShakingBox>
      <ShakingBox
        errors={email === '' || password === ''}
        isButtonPressed={isButtonPressed}
        setIsButtonPressed={setIsButtonPressed}>
        <TextInput
          placeholder={'Şifre'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          inputProps={{
            InputLeftElement: (
              <Icon
                as={Octicons}
                name={'shield-lock'}
                size={22}
                color={'lightGray'}
              />
            ),
          }}
        />
      </ShakingBox>
    </VStack>
  );
};

export default LoginInputs;
