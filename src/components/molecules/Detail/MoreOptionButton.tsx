import React, {FC} from 'react';
import {Box, HStack, Icon, Image, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface MoreOptionButtonProps {
  onPress?: () => void;
  icon: 'credit-card-outline' | 'chat-outline' | 'backspace-outline';
  text: string;
}
const MoreOptionButton: FC<MoreOptionButtonProps> = (props) => {
  const {onPress, icon, text} = props;
  return (
    <Box
      variant={'detail'}
      borderBottomWidth={0}
      justifyContent={'space-between'}
      alignItems={'center'}
      flexDirection={'row'}
      marginBottom={'m'}>
      <HStack space={4} alignItems={'center'}>
        <Box
          padding={'s'}
          justifyContent={'center'}
          alignItems={'center'}
          backgroundColor={'background'}>
          <Icon as={MaterialCommunityIcons} name={icon} size={23} />
        </Box>
        <Text fontSize={'sm'} color={'black'}>
          {text}
        </Text>
      </HStack>
      <Icon as={MaterialCommunityIcons} name={'arrow-right-bottom'} size={23} />
    </Box>
  );
};

export default MoreOptionButton;
