import React from 'react';
import {Box, Text} from 'native-base';
import DetailProductInfo from '../atoms/Detail/DetailProductInfo';
import DetailDiscountTime from '../molecules/Detail/DetailDiscountTime';
import DetailPriceButtons from '../molecules/Detail/DetailPriceButtons';
import ProductColors from '../molecules/Detail/ProductColors';
import ProductRate from '../molecules/Detail/ProductRate';
import ProductSizes from '../molecules/Detail/ProductSizes';

const DetailProductOptions = () => {
  return (
    <Box marginBottom={'m'}>
      <DetailProductInfo />
      <DetailDiscountTime />
      <DetailPriceButtons />
      <ProductRate />
      <ProductColors />
      <ProductSizes />
    </Box>
  );
};

export default DetailProductOptions;
