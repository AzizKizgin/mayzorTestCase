import React, {FC, useEffect} from 'react';
import {Box, HStack} from 'native-base';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import LoginFormTopButton from '../atoms/LoginFormTopButton';
import SwitchIcon from '../atoms/SwitchIcon';
import AnimatedBox from '../atoms/AnimatedBox';

interface Props {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}
const LoginFormTop: FC<Props> = (props) => {
  const {isLogin, setIsLogin} = props;
  const animatedLeft = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      left: animatedLeft.value + '%',
    };
  });

  const onPress = () => {
    setIsLogin(!isLogin);
    if (isLogin) {
      animatedLeft.value = withTiming(62.5, {duration: 500});
    } else {
      animatedLeft.value = withTiming(0, {duration: 500});
    }
  };

  return (
    <Box paddingX={'s'}>
      <HStack
        justifyContent={'space-evenly'}
        alignItems={'center'}
        paddingY={'s'}>
        <LoginFormTopButton onPress={onPress} text={'Giriş Yap'} />
        <SwitchIcon />
        <LoginFormTopButton onPress={onPress} text={'Kayıt Ol'} />
      </HStack>
      <AnimatedBox
        height={0.5}
        backgroundColor={'orange'}
        width={'37.5%'}
        left={'62.5%'}
        style={animatedStyle}
      />
    </Box>
  );
};

export default LoginFormTop;
