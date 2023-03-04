import React from 'react';
import {Box, Icon, Image} from 'native-base';

const TodaysDealIcon = () => {
  return (
    <Icon
      as={
        <Image
          source={require('../../assets/shop.png')}
          alt={'todaysDeal'}
          tintColor={'purple'}
        />
      }
      size={25}
    />
  );
};

export default TodaysDealIcon;
