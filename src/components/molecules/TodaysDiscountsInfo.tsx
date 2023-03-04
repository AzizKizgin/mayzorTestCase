import React from 'react';
import {Box, Text} from 'native-base';
import TodaysDiscountsIcon from '../atoms/TodaysDiscountsIcon';

const TodaysDiscountsInfo = () => {
  return (
    <Box
      background={'white'}
      borderRadius={'lg'}
      paddingY={'m'}
      paddingX={'xs'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'center'}>
      <TodaysDiscountsIcon />
      <Box marginLeft={'s'}>
        <Text fontSize={'sm'} color={'black'} bold>
          Bugünün 5 Fırsatı
        </Text>
        <Text fontSize={'sm'} color={'black'}>
          Fırsat süreleri ve stoklar bitiyor çabuk acele et.
        </Text>
      </Box>
    </Box>
  );
};

export default TodaysDiscountsInfo;
