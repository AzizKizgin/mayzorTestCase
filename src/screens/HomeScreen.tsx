import React from 'react';
import {Box, Text} from 'native-base';
import Header from '../components/molecules/Header';

const HomeScreen = () => {
  return (
    <Box flex={1} backgroundColor={'background'}>
      <Header />
    </Box>
  );
};

export default HomeScreen;
