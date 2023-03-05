import React from 'react';
import {Box, Icon, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {strings} from '../../utils/strings';

const ProductTop = () => {
  return (
    <Box flexDirection={'row'} alignItems={'center'} paddingX={'sm'}>
      <Box
        backgroundColor={'purple'}
        rounded={'full'}
        alignItems={'center'}
        justifyContent={'center'}
        padding={'0.25'}>
        <Icon as={Ionicons} name={'arrow-down'} color={'white'} size={'3'} />
      </Box>
      <Text color={'purple'} marginLeft={'xs'} bold fontSize={'xs'}>
        {strings.superPrice}
      </Text>
    </Box>
  );
};

export default ProductTop;
