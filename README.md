# Mayzor Test Case

## Kurulum

Android için projeyi klonlayıp yarn ile kütüphaneleri indirmeniz yeterli. Windows kullandığım için bu kütüphanlerin kurulumlarını ios için yapmadım.

Reanimated kütüphanesi yüzünde bir hata çıkarsa
yarn start --reset-cache
npm start -- --reset-cache
komutları kullanılmalıdır.

## Kullandığım Kütüphaneler

```json
    "@react-native-async-storage/async-storage": "^1.17.11",
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/native-stack": "^6.9.12",
    "native-base": "^3.4.26",
    "react": "18.1.0",
    "react-native": "0.70.6",
    "react-native-gesture-handler": "^2.9.0",
    "react-native-reanimated": "^3.0.0",
    "react-native-safe-area-context": "^4.5.0",
    "react-native-screens": "^3.20.0",
    "react-native-svg": "12.1.1",
    "react-native-vector-icons": "^9.2.0",
    "rn-toast-message": "^1.0.4"
```

## Dipnot

[rn-toast-message](https://www.npmjs.com/package/rn-toast-message) kütüphanesi kendi yazmış olduğum bir kütüphanedir. Login işlemi sırasında uyarı, hata veya başarı mesajları göstermek için kullandım.
