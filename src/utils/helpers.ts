import {IShowToast} from 'rn-toast-message/dist/toast_message/types';

export const login = async ({
  email,
  password,
  showToast,
}: {
  email: string;
  password: string;
  showToast: ({message, type, duration, textStyle}: IShowToast) => void;
}) => {
  if (email === '' || password === '') {
    showToast({
      message: 'Lütfen tüm alanları doldurunuz',
      type: 'error',
      duration: 3000,
    });
    return false;
  } else if (email === 'emre@mayzor.net' && password === 'mayzor') {
    showToast({
      message: 'Hoşgeldiniz',
      type: 'success',
      duration: 3000,
    });
    return true;
  }
  showToast({
    message: 'Kullanıcı adı veya şifre hatalı',
    type: 'warning',
    duration: 3000,
  });
  return false;
};
