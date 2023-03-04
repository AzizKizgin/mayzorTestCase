import React from 'react';
import {Box, HStack, Text} from 'native-base';
import AccountButton from '../atoms/AccountButton';
import ShopCartButton from '../atoms/ShopCartButton';

const Header = () => {
  return (
    <HStack
      backgroundColor={'purple'}
      paddingY={'l'}
      paddingX={'l'}
      alignItems={'center'}
      justifyContent={'space-around'}>
      <AccountButton />
      <Text color={'white'} fontSize={'sm'} fontWeight={'bold'}>
        MAYZOR TEST CASE
      </Text>
      <ShopCartButton />
    </HStack>
  );
};

export default Header;
