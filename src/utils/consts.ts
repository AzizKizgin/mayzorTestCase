import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const COLORS = [
  'black',
  'darkRed',
  'cream',
  'lightGray',
  'darkGray',
  'navyBlue',
];

export const COLOR_NAMES: {
  [key: string]: string;
} = {
  black: 'siyah',
  darkRed: 'bordo',
  cream: 'krem',
  lightGray: 'açık gri',
  darkGray: 'koyu gri',
  navyBlue: 'lacivert',
};

export const PRODUCT_SIZES = ['38', '39', '40', '41', '42', '43.5'];

export const PRODUCT_SIZES_NAMES: {
  [key: string]: string;
} = {
  '38': 'M',
  '39': 'L',
  '40': 'XL',
  '41': 'XXL',
  '42': 'XXXL',
  '43.5': 'XXXXL',
};
