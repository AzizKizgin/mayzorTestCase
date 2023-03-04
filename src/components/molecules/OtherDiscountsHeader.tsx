import React, {FC} from 'react';
import {Box, HStack, Text} from 'native-base';
import IconButton from '../atoms/IconButton';

interface Props {
  title: string;
}
const OtherDiscountsHeader: FC<Props> = (props) => {
  const {title} = props;
  return (
    <Box
      marginTop={'l'}
      marginBottom={'s'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}>
      <Text>{title}</Text>
      <HStack space={3}>
        <IconButton iconName="chevron-left" iconSize={21} />
        <IconButton iconName="chevron-right" iconSize={21} />
      </HStack>
    </Box>
  );
};

export default OtherDiscountsHeader;
