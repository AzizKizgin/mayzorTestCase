import React, {useState} from 'react';
import {Box, Text, VStack} from 'native-base';
import LoginInputs from '../molecules/LoginInputs';
import LoginButton from '../atoms/LoginButton';
import {login} from '../../utils/helpers';
import {useToast} from 'rn-toast-message';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPressed, setIsPressed] = useState(false);
  const {showToast} = useToast();
  const navigation = useNavigation<NavigationProp<AppNavigationParams>>();

  const onPress = () => {
    setIsPressed(true);
    login({
      email,
      password,
      showToast,
    }).then((res) => {
      setIsPressed(false);
      if (res) {
        navigation.navigate('Home');
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      }
    });
  };

  return (
    <VStack
      flex={1}
      alignItems={'center'}
      marginBottom={'l'}
      paddingX={'m'}
      justifyContent={'space-evenly'}>
      <LoginInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isButtonPressed={isPressed}
        setIsButtonPressed={setIsPressed}
      />
      <Box>
        <Text color={'black'}>Şifreni mi Unuttun</Text>
      </Box>
      <LoginButton onPress={onPress} />
    </VStack>
  );
};

export default LoginForm;
