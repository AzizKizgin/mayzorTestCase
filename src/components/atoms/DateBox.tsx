import React, {FC} from 'react';
import {Box, Icon, Pressable, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  title: string;
  isChosen: boolean;
  onPress?: () => void;
}
const DateBox: FC<Props> = (props) => {
  const {title, isChosen, onPress} = props;
  return (
    <Pressable
      onPress={onPress}
      flexDirection={'row'}
      paddingX={'s'}
      paddingY={'m'}
      borderRadius={'lg'}
      flex={1}
      backgroundColor={isChosen ? 'orange' : 'white'}>
      <Icon
        as={MaterialCommunityIcons}
        name={'calendar-check'}
        size={23}
        color={isChosen ? 'white' : 'lightGray'}
      />
      <Text color={isChosen ? 'white' : 'lightGray'}>{title}</Text>
    </Pressable>
  );
};

export default DateBox;
