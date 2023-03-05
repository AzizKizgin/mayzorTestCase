import React from 'react';
import {Box, HStack, Text} from 'native-base';
import AccountButton from '../atoms/AccountButton';
import ShopCartButton from '../atoms/ShopCartButton';
import {strings} from '../../utils/strings';

const Header = () => {
  return (
    <HStack
      backgroundColor={'purple'}
      padding={'l'}
      alignItems={'center'}
      justifyContent={'space-around'}>
      <AccountButton />
      <Text color={'white'} fontSize={'sm'} fontWeight={'bold'}>
        {strings.appName}
      </Text>
      <ShopCartButton />
    </HStack>
  );
};

export default Header;
