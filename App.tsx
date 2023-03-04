import React from 'react';
import {Box, NativeBaseProvider, Text} from 'native-base';
import appTheme from './src/theme/appTheme';
import {NavigationContainer} from '@react-navigation/native';
import {ToastMessageProvider} from 'rn-toast-message';
import {AuthProvider} from './src/context/AuthContext';
import Router from './src/navigation/Router';

const App = () => {
  return (
    <NativeBaseProvider theme={appTheme}>
      <ToastMessageProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </ToastMessageProvider>
    </NativeBaseProvider>
  );
};

export default App;
