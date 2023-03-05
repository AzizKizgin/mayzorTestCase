import React, {FC} from 'react';
import {Box, HStack, Icon, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ProductUserReviewProps {
  review: ProductReview;
}
const ProductUserReview: FC<ProductUserReviewProps> = ({review}) => {
  return (
    <Box variant={'detail'}>
      <Text fontSize={'md'} color={'black'} marginLeft={'xs'}>
        {review.name}
      </Text>
      <HStack marginTop={'s'}>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Icon
            as={MaterialCommunityIcons}
            key={index}
            name={'star'}
            color={index < Number(review.rate) ? 'orange' : 'black'}
            size={'23'}
          />
        ))}
        <Text fontSize={'sm'} color={'darkGray'} marginLeft={'s'}>
          ({review.rate})
        </Text>
      </HStack>

      <Text fontSize={'16'} color={'black'} marginLeft={'xs'} marginTop={'l'}>
        {review.comment}
      </Text>
    </Box>
  );
};

export default ProductUserReview;
