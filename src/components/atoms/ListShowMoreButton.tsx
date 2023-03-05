import React from 'react';
import {Box, Icon, Pressable, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {strings} from '../../utils/strings';

const ListShowMoreButton = () => {
  return (
    <Pressable>
      <Box
        flexDir={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        paddingY={'m'}
        marginTop={'l'}
        borderRadius={'sm'}
        width={'100%'}
        backgroundColor={'orange'}>
        <Icon
          as={MaterialCommunityIcons}
          name="plus-circle-outline"
          size={21}
          color={'white'}
          marginRight={'s'}
        />
        <Text color={'white'} fontSize={'md'}>
          {strings.seeAll}
        </Text>
      </Box>
    </Pressable>
  );
};

export default ListShowMoreButton;
