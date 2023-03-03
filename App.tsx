import React from 'react';
import {Box, NativeBaseProvider, Text} from 'native-base';
import appTheme from './src/theme/appTheme';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import {ToastMessageProvider} from 'rn-toast-message';

const App = () => {
  return (
    <NativeBaseProvider theme={appTheme}>
      <ToastMessageProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </ToastMessageProvider>
    </NativeBaseProvider>
  );
};

export default App;
