import React, { useState, useContext, useEffect } from "react";

import GlobalStyles from "./GlobalStyles";
import { NavBar, OverLay, MainContainer, ProductList } from "./AppStyles";

import Context from "./store/Context";
import Cart from "./components/Cart";
import Product from "./components/Product";

export default function App() {
  const [isToggle, setToggle] = useState(false);
  const context = useContext(Context);

  useEffect(() => {
    console.log(context);
  }, [context]);

  return (
    <>
      <GlobalStyles />
      <NavBar>
        <Cart
          isToggle={isToggle}
          setToggle={setToggle}
          carts={context.carts}
          removeProductFromCart={context.removeProductFromCart}
          clearCart={context.clearCart}
        />
      </NavBar>

      <MainContainer>
        {isToggle && <OverLay />}
        <ProductList>
          {context.products.map((p) => (
            <Product
              key={p.id}
              id={p.id}
              imageURL={p.imageURL}
              price={p.price}
              title={p.title}
              addProductToCart={context.addProductToCart}
            />
          ))}
        </ProductList>
      </MainContainer>
    </>
  );
}
