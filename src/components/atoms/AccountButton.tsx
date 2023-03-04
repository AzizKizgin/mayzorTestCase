import React from 'react';
import {Box, Icon, Pressable, useDisclose} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccountMenu from './AccountMenu';

const AccountButton = () => {
  const {isOpen, onOpen, onClose} = useDisclose();

  return (
    <>
      <Pressable onPress={onOpen}>
        <Box
          backgroundColor={'darkPurple'}
          alignItems={'center'}
          justifyContent={'center'}
          paddingX={'l'}
          paddingY={'sm'}
          borderRadius={'sm'}>
          <Icon
            as={Ionicons}
            name={'person-outline'}
            size={23}
            color={'white'}
          />
        </Box>
      </Pressable>
      <AccountMenu isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AccountButton;
