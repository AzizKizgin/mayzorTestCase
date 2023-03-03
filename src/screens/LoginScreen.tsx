import React, {useState} from 'react';
import {Box, HStack, Icon, Text, VStack} from 'native-base';
import LoginBackground from '../components/molecules/LoginBackground';
import {SCREEN_HEIGHT} from '../utils/consts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import TextInput from '../components/atoms/TextInput';
import LoginButton from '../components/atoms/LoginButton';
import {KeyboardAvoidingView} from 'react-native';
import LoginFormTop from '../components/molecules/LoginFormTop';
import LoginInputs from '../components/molecules/LoginInputs';
import LoginForm from '../components/organisms/LoginForm';

const LoginScreen = () => {
  return (
    <Box flex={1} backgroundColor={'background'} justifyContent={'center'}>
      <LoginBackground />
      <LoginForm />
    </Box>
  );
};

export default LoginScreen;
