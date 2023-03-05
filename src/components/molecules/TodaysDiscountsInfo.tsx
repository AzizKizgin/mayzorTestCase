import React from 'react';
import {Box, Text} from 'native-base';
import TodaysDiscountsIcon from '../atoms/TodaysDiscountsIcon';
import {strings} from '../../utils/strings';

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
          {strings.todaysFiveDiscounts}
        </Text>
        <Text fontSize={'sm'} color={'black'}>
          {strings.hurryUp}
        </Text>
      </Box>
    </Box>
  );
};

export default TodaysDiscountsInfo;
