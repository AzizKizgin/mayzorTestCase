import React from 'react';
import {Box, Text} from 'native-base';
import ProductReviewInfo from '../molecules/Detail/ProductReviewInfo';
import {useProduct} from '../../context/ProductContext';
import ProductUserReview from '../molecules/Detail/ProductUserReview';
import ShowMoreButton from '../atoms/Detail/ShowMoreButton';
import {strings} from '../../utils/strings';

const ProductReview = () => {
  const {product} = useProduct();
  return (
    <Box marginBottom={'m'}>
      <Box variant={'detail'}>
        <Text fontSize={'md'} color={'black'}>
          {strings.productReviews}
        </Text>
      </Box>
      <ProductReviewInfo />
      {product.reviews.map((item, index) => (
        <ProductUserReview review={item} key={index} />
      ))}
      <ShowMoreButton />
    </Box>
  );
};

export default ProductReview;
