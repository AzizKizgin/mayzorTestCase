import React, {FC} from 'react';
import {Actionsheet, Box, HStack, Icon, Text} from 'native-base';
import {useAuth} from '../../context/AuthContext';
import {Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface AccountMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const AccountMenu: FC<AccountMenuProps> = ({isOpen, onClose}) => {
  const {logout} = useAuth();
  const handleLogout = () => {
    Alert.alert(
      'Çıkış Yap',
      'Çıkış yapmak istediğinize emin misiniz?',
      [
        {
          text: 'Hayır',
          onPress: () => {
            onClose();
          },
          style: 'cancel',
        },
        {
          text: 'Evet',
          onPress: () => {
            onClose();
            logout();
          },
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <Actionsheet
      isOpen={isOpen}
      onClose={onClose}
      _backdrop={{
        backgroundColor: 'rgba(0,0,0,0.0)',
      }}>
      <Actionsheet.Content
        backgroundColor={'purple'}
        borderTopRadius={0}
        margin={0}
        padding={0}
        paddingBottom={4}>
        <Actionsheet.Item onPress={handleLogout} backgroundColor={'purple'}>
          <HStack space={8} alignItems={'center'} paddingX={'sm'}>
            <Icon
              as={MaterialCommunityIcons}
              name="exit-to-app"
              size="25"
              color="iconColor"
            />
            <Text color={'textDark'} fontSize={'md'}>
              Çıkış Yap
            </Text>
          </HStack>
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default AccountMenu;
