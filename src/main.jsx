import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import ProductContext, {
  ProductContextProvider,
} from "./contexts/ProductContext.jsx";
import Products from "./pages/Products.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/products", element: <Products /> },
  { path: "/cart", element: <Cart /> },
]);

createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ProductContextProvider>
);
