import React from 'react';
import {Box, Text} from 'native-base';
import MoreOptionButton from './MoreOptionButton';

const MoreOptionButtonGroup = () => {
  return (
    <Box>
      <MoreOptionButton icon="chat-outline" text="Şimdi Yorum Yap" />
      <MoreOptionButton
        icon="backspace-outline"
        text="İade Koşullarını İnceleyiniz"
      />
      <MoreOptionButton
        icon="credit-card-outline"
        text="Mayzor Taksit Seçenekleri"
      />
    </Box>
  );
};

export default MoreOptionButtonGroup;
