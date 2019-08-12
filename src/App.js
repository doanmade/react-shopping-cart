import React, { useState } from "react";
import { Route } from "react-router-dom";
// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { CartContext } from "./contexts/CartContext";
import { ProductContext } from "./contexts/ProductContext";
import data from "./data";

// const ProductContext  = createContext();

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        {/* Routes */}
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation cart={cart} />
          <Route exact path="/" component={Products} />

          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
