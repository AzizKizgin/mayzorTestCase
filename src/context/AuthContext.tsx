import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {useToast} from 'rn-toast-message';

interface AuthContextProps {
  children: ReactNode;
}

interface LoginProps {
  email: string;
  password: string;
}

interface AuthContextType {
  isLogged: boolean;
  login: ({email, password}: LoginProps) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLogged: false,
  login: async ({email, password}: LoginProps) => {
    return false;
  },
  logout: () => {},
});

export const AuthProvider = ({children}: AuthContextProps) => {
  const [isLogged, setIsLogged] = useState(false);
  const {showToast} = useToast();
  useEffect(() => {
    const checkIsLogged = async () => {
      const isUserLogged = await AsyncStorage.getItem('isLogged');
      if (isUserLogged === 'true') {
        setIsLogged(true);
      }
    };
    checkIsLogged();
  }, []);

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
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
        message: 'Giriş Başarılı',
        type: 'success',
        duration: 3000,
      });
      await AsyncStorage.setItem('isLogged', 'true');
      setIsLogged(true);
      return true;
    }
    showToast({
      message: 'Kullanıcı adı veya şifre hatalı',
      type: 'warning',
      duration: 3000,
    });
    return false;
  };

  const logout = async () => {
    await AsyncStorage.removeItem('isLogged');
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{isLogged, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
