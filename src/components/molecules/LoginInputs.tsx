import React, {useState} from 'react';
import {Box, Icon, Text, VStack} from 'native-base';
import TextInput from '../atoms/TextInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const LoginInputs = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <VStack width={'100%'} space={6}>
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
    </VStack>
  );
};

export default LoginInputs;
