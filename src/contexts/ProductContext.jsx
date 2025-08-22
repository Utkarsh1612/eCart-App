import { createContext, useState } from "react";

const ProductContext = createContext();

export default ProductContext;

export const ProductContextProvider = ({children}) => {
  const [productQuantity, setProductQuantity] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <ProductContext.Provider value={{cartProducts, setCartProducts, productQuantity, setProductQuantity}}>
      {children}
    </ProductContext.Provider>
  )
}