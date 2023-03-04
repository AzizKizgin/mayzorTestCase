import React, {FC} from 'react';
import {HStack, Icon, Image, Pressable, Text} from 'native-base';

interface ShopCartButtonProps {
  onPress?: () => void;
  productCount?: number;
}
const ShopCartButton: FC<ShopCartButtonProps> = (props) => {
  const {onPress, productCount = 0} = props;
  return (
    <Pressable onPress={onPress}>
      <HStack
        backgroundColor={'orange'}
        paddingX={'m'}
        paddingY={'sm'}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={'sm'}>
        <Icon
          as={
            <Image
              source={require('../../assets/shopping-cart.png')}
              alt={'shopping-cart'}
              tintColor={'white'}
            />
          }
          name={'shopping-basket'}
          size={23}
          color={'white'}
        />
        <Text color={'white'} fontSize={'sm'} marginLeft={'xs'}>
          ({productCount})
        </Text>
      </HStack>
    </Pressable>
  );
};

export default ShopCartButton;
