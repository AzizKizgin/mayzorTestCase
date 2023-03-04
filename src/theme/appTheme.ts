import {extendTheme} from 'native-base';

const colors = {
  purple: '#660099',
  orange: '#ff9600',
  black: '#29282E',
  cream: '#edd4be',
  lightGray: '#c3c5c4',
  darkGray: '#525647',
  navyBlue: '#192033',
  background: '#f5f6fb',
  textColor: '#191d26',
  darkRed: '#581B20',
  darkPurple: '#5B0486',
  darkOrange: '#EF8D00',
};

const appTheme = extendTheme({
  colors: {
    purple: colors.purple,
    darkPurple: colors.darkPurple,
    orange: colors.orange,
    black: colors.black,
    cream: colors.cream,
    lightGray: colors.lightGray,
    darkGray: colors.darkGray,
    navyBlue: colors.navyBlue,
    background: colors.background,
    textColor: colors.textColor,
    darkRed: colors.darkRed,
    darkOrange: colors.darkOrange,
  },

  space: {
    xxs: 2,
    xs: 4,
    s: 8,
    sm: 12,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
  },

  components: {
    Pressable: {
      baseStyle: {
        _pressed: {
          opacity: 0.5,
        },
      },
    },
  },
});

type CustomThemeType = typeof appTheme;
declare module 'native-base' {
  interface ICustomeTheme extends CustomThemeType {}
}

export default appTheme;
