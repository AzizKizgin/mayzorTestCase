import React from 'react';
import {Box, HStack, Icon, Text} from 'native-base';
import Time from '../../atoms/Time';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailDiscountTime = () => {
  return (
    <Box variant={'detail'}>
      <Box
        backgroundColor={'orange'}
        flexDirection={'row'}
        paddingY={'sm'}
        paddingX={'s'}
        borderRadius={'md'}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Icon
          as={MaterialCommunityIcons}
          name={'progress-clock'}
          size={'33'}
          color={'white'}
        />
        <Text color={'white'}>Fırsat Süresi</Text>
        <HStack space={1}>
          <Time time={9} unit={'Saat'} size={'s'} />
          <Time time={23} unit={'Dakika'} size={'s'} />
          <Time time={42} unit={'Saniye'} size={'s'} />
        </HStack>
      </Box>
    </Box>
  );
};

export default DetailDiscountTime;
