import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Detail, Home} from '../screens';

const HomeNavigation = () => {
  const Stack = createNativeStackNavigator<HomeNavigationParams>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Detail} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
