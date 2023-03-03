import React from 'react';
import {Box, NativeBaseProvider, Text} from 'native-base';
import appTheme from './src/theme/appTheme';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <NativeBaseProvider theme={appTheme}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
