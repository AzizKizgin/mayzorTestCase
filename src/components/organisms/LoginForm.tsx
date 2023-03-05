import React, {useState} from 'react';
import {Box, Text, VStack} from 'native-base';
import LoginInputs from '../molecules/LoginInputs';
import LoginButton from '../atoms/LoginButton';
import {useAuth} from '../../context/AuthContext';
import {strings} from '../../utils/strings';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPressed, setIsPressed] = useState(false);
  const {login} = useAuth();
  const onPress = () => {
    setIsPressed(true);
    login({
      email,
      password,
    }).then(() => {
      setIsPressed(false);
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
        <Text color={'black'}>{strings.forgetPassword}</Text>
      </Box>
      <LoginButton onPress={onPress} />
    </VStack>
  );
};

export default LoginForm;
