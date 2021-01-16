import { createContext } from "react";

export default createContext({
  products: [],
  carts: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productID) => {},
  clearCart: () => {},
});
