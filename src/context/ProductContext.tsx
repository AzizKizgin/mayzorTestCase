import {createContext, ReactNode, useContext} from 'react';

interface ProductContextProps {
  children: ReactNode;
  product: Product;
}

interface ProductContextType {
  product: Product;
}

const ProductContext = createContext<ProductContextType>({
  product: {
    id: 0,
    name: '',
    description: '',
    image: '',
    newPrice: 0,
    oldPrice: 0,
    discount: 0,
    rate: '',
    rateCount: 0,
    reviews: [],
  },
});

export const ProductProvider = ({children, product}: ProductContextProps) => {
  return (
    <ProductContext.Provider value={{product}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
