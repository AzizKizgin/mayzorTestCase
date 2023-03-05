import React, {FC, useState} from 'react';
import {Box, Icon, Pressable, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FavButton = () => {
  const [isFav, setIsFav] = useState(false);
  const toggleFav = () => {
    setIsFav(!isFav);
  };
  return (
    <Pressable onPress={toggleFav}>
      <Box
        padding={'s'}
        rounded={'full'}
        backgroundColor={'white'}
        justifyContent={'center'}
        alignItems={'center'}>
        <Icon
          as={MaterialCommunityIcons}
          name={isFav ? 'heart' : 'heart-outline'}
          size={27}
          color={isFav ? 'red.500' : 'darkGray'}
        />
      </Box>
    </Pressable>
  );
};

export default FavButton;
