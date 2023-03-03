import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Detail, Home, Login} from '../screens';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator<AppNavigationParams>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Detail} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
