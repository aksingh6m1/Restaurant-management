import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import OrderList from "./components/OrderList";
import Forworker from "./components/Forworker";
import { CartProvider } from "./components/CartContext";
import Thankyou from "./components/Thanks";
import Check from "./components/Check";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/forworker" element={<Forworker />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/thanks" element={<Thankyou />} />
          <Route path="/check" element={<Check />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
