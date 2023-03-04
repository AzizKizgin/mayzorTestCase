import React from 'react';
import {Box, Icon, Pressable, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
          Tümünü Gör
        </Text>
      </Box>
    </Pressable>
  );
};

export default ListShowMoreButton;
