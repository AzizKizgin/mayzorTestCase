import React, {FC} from 'react';
import {Box, Text} from 'native-base';

interface TimeProps {
  time: number;
  unit: 'Saat' | 'Dakika' | 'Saniye';
  size?: 'xs' | 's';
}
const Time: FC<TimeProps> = (props) => {
  const {time, unit, size} = props;
  return (
    <Box
      alignItems={'center'}
      backgroundColor={'darkOrange'}
      padding={size}
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
