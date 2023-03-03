import React, {useState} from 'react';
import {Box} from 'native-base';
import LoginBackground from '../components/molecules/LoginBackground';
import {SCREEN_HEIGHT} from '../utils/consts';
import LoginFormTop from '../components/molecules/LoginFormTop';
import RegisterForm from '../components/molecules/RegisterForm';
import LoginForm from '../components/organisms/LoginForm';

const LoginScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Box flex={1} backgroundColor={'background'} justifyContent={'center'}>
      <LoginBackground />
      <Box
        marginX={'xl'}
        height={SCREEN_HEIGHT / 2.25}
        backgroundColor={'white'}
        borderRadius={'lg'}>
        <LoginFormTop isLogin={isLogin} setIsLogin={setIsLogin} />
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </Box>
    </Box>
  );
};

export default LoginScreen;
