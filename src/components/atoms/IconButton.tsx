import React, {FC} from 'react';
import {Box, Icon, Pressable, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconButtonProps {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
}
const IconButton: FC<IconButtonProps> = (props) => {
  const {iconName, iconSize = 21, iconColor = 'lightGray'} = props;
  return (
    <Pressable padding={'xs'} borderRadius={'full'} backgroundColor={'white'}>
      <Icon
        as={MaterialCommunityIcons}
        name={iconName}
        size={iconSize}
        color={iconColor}
      />
    </Pressable>
  );
};

export default IconButton;
