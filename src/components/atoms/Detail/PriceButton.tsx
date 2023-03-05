import React, {FC} from 'react';
import {Box, Text} from 'native-base';
import {useProduct} from '../../../context/ProductContext';

interface PriceButtonProps {
  type: 'mayzor' | 'market';
}
const PriceButton: FC<PriceButtonProps> = ({type}) => {
  const {product} = useProduct();
  return (
    <Box
      alignItems={'center'}
      paddingX={'7'}
      paddingY={'s'}
      backgroundColor={type === 'mayzor' ? 'purple' : 'background'}
      borderRadius={'md'}>
      <Text color={type === 'mayzor' ? 'white' : 'lightGray'} fontSize={'md'}>
        {type === 'mayzor' ? 'Mayzor Fiyatı' : 'Piyasa Fiyatı'}
      </Text>
      <Text
        textDecorationLine={type === 'mayzor' ? 'unset' : 'line-through'}
        color={'lightGray'}
        fontSize={'xl'}
        fontWeight={type === 'mayzor' ? 'extrabold' : 'normal'}>
        {type === 'mayzor' ? product.newPrice : product.oldPrice}
      </Text>
    </Box>
  );
};

export default PriceButton;
