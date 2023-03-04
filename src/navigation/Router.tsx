import React from 'react';
import {Box, Text} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../context/AuthContext';
import HomeNavigation from './HomeNavigation';
import LoginNavigation from './LoginNavigation';

const Router = () => {
  const {isLogged} = useAuth();
  return (
    <NavigationContainer>
      {isLogged ? <HomeNavigation /> : <LoginNavigation />}
    </NavigationContainer>
  );
};

export default Router;
