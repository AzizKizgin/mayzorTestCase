type AppNavigationParams = {
  Login: undefined;
  Home: undefined;
};

type HomeNavigationParams = {
  Home: undefined;
  Details: {id: number};
};

type ProductReview = {
  id: number;
  name: string;
  rate: string;
  comment: string;
};

type Product = {
  id: number;
  name: string;
  image: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  rate: string;
  rateCount: number;
  description: string;
  reviews: ProductReview[];
};
