import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./pages/products.jsx";
import Cart from "./pages/Cart.jsx";
import ProductContext from "./contexts/ProductContext.js";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/products", element: <Products /> },
  { path: "/cart", element: <Cart /> },
]);



const ProductContextProvider = ({children}) => {
  const [productQuantity, setProductQuantity] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <ProductContext.Provider value={{cartProducts, setCartProducts, productQuantity, setProductQuantity}}>
      {children}
    </ProductContext.Provider>
  )
}

createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ProductContextProvider>
);
