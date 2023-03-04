import React, {FC} from 'react';
import {Box, Text} from 'native-base';

interface Props {
  title: string;
  color?: 'purple' | 'orange';
}
const UpcomingProductTittle: FC<Props> = ({title, color = 'purple'}) => {
  return (
    <Box
      alignItems={'center'}
      justifyContent={'center'}
      marginBottom={'s'}
      backgroundColor={color}
      borderBottomLeftRadius={'md'}
      borderBottomRightRadius={'md'}>
      <Text color={'white'} fontSize={'sm'} paddingX={'sm'} paddingY={'xs'}>
        {title}
      </Text>
    </Box>
  );
};

export default UpcomingProductTittle;
