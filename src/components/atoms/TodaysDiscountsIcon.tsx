import React from 'react';
import {Box, Icon, Image} from 'native-base';

const TodaysDiscountsIcon = () => {
  return (
    <Icon
      as={
        <Image
          source={require('../../assets/shop.png')}
          alt={'todaysDiscounts'}
          tintColor={'purple'}
        />
      }
      size={25}
    />
  );
};

export default TodaysDiscountsIcon;
