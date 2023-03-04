import React, {FC} from 'react';
import {Box, Text} from 'native-base';

interface TimeProps {
  time: number;
  unit: 'Saat' | 'Dakika' | 'Saniye';
}
const Time: FC<TimeProps> = (props) => {
  const {time, unit} = props;
  return (
    <Box
      alignItems={'center'}
      backgroundColor={'darkOrange'}
      padding={'xs'}
      borderRadius={'xs'}
      justifyContent={'center'}>
      <Text marginY={-1} color={'white'}>
        {time}
      </Text>
      <Text marginY={-1} color={'white'}>
        {unit}
      </Text>
    </Box>
  );
};

export default Time;
