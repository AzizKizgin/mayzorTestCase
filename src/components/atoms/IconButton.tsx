import React, {FC} from 'react';
import {Box, Icon, Pressable, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconButtonProps {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  onPress?: () => void;
}
const IconButton: FC<IconButtonProps> = (props) => {
  const {iconName, iconSize = 21, iconColor = 'darkGray', onPress} = props;
  return (
    <Pressable onPress={onPress}>
      <Box
        padding={'s'}
        rounded={'full'}
        backgroundColor={'white'}
        justifyContent={'center'}
        alignItems={'center'}>
        <Icon
          as={MaterialCommunityIcons}
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      </Box>
    </Pressable>
  );
};

export default IconButton;
