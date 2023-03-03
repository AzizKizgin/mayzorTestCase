import React from 'react';
import {Box, Icon} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SwitchIcon = () => {
  return (
    <Box>
      <Icon
        as={MaterialCommunityIcons}
        name={'swap-horizontal'}
        size={23}
        color={'lightGray'}
      />
    </Box>
  );
};

export default SwitchIcon;
