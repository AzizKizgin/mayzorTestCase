import React from 'react';
import {Box, Icon, Pressable, Text} from 'native-base';
import UpcomingDiscounts from './UpcomingDiscounts';
import MissingDiscounts from './MissingDiscounts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ListShowMoreButton from '../atoms/ListShowMoreButton';

const ListFooter = () => {
  return (
    <Box
      backgroundColor={'background'}
      borderRadius={'xl'}
      paddingY={'sm'}
      marginBottom={'l'}
      flex={1}>
      <UpcomingDiscounts />
      <MissingDiscounts />
      <ListShowMoreButton />
    </Box>
  );
};

export default ListFooter;
