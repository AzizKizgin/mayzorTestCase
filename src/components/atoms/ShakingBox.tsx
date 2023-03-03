import {StyleSheet} from 'react-native';
import React, {FC, ReactNode, useEffect, useState} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import AnimatedBox from './AnimatedBox';
import {IBoxProps} from 'native-base';

type ShakingBoxProps = {
  children: ReactNode;
  isButtonPressed?: boolean;
  setIsButtonPressed?: (value: boolean) => void;
  errors?: boolean;
};
const ShakingBox: FC<ShakingBoxProps> = (props) => {
  const {children, isButtonPressed, setIsButtonPressed, errors} = props;
  const translateX = useSharedValue(0);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    if (isButtonPressed && errors && setIsButtonPressed) {
      setHasError(true);
      setIsButtonPressed(false);
    } else if (isButtonPressed && !errors && setIsButtonPressed) {
      setHasError(false);
      setIsButtonPressed(false);
    } else {
      setHasError(false);
    }
  }, [isButtonPressed, errors]);

  const shake = () => {
    translateX.value = withRepeat(
      withTiming(10, {
        duration: 75,
      }),
      -1,
      true,
    );
  };

  const reset = () => {
    translateX.value = withTiming(0, {
      duration: 75,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  useEffect(() => {
    setTimeout(() => {
      if (hasError) {
        shake();
        setTimeout(() => {
          reset();
        }, 750);
      }
    }, 100);
  }, [hasError]);

  return <AnimatedBox style={animatedStyle}>{children}</AnimatedBox>;
};

export default ShakingBox;

const styles = StyleSheet.create({});
