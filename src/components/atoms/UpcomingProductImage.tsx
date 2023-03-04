import React, {FC} from 'react';
import {Box, Text, Image} from 'native-base';

interface Props {
  url: string;
}
const UpcomingProductImage: FC<Props> = ({url}) => {
  return (
    <Image
      source={{
        uri: url,
      }}
      defaultSource={require('../../assets/default.png')}
      alt={'tomorrowsProduct'}
      resizeMode={'contain'}
      size={100}
      borderWidth={1}
      borderColor={'gray.200'}
    />
  );
};

export default UpcomingProductImage;
