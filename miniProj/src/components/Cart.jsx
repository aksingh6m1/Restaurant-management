import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { PiCurrencyInrBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Nav from './Nav'
import Footer from './footer'

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
    const handleNavigate3 = () => {
      navigate("/Menu");
    };

  const ByPass = () => {
    navigate("/Check");
  };

  const [counts, setCounts] = useState(cartItems.map(() => 1));
  const [totalAmount, setTotalAmount] = useState(0);

  const handleIncrement = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    cartItems[index].qty+=1;
    setCounts(newCounts);
  };

  const handleDecrement = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 1) {
      newCounts[index] -= 1;
      cartItems[index].qty-=1;  
      setCounts(newCounts);
    }
  };

  useEffect(() => {
    const total = cartItems.reduce((sum, item, index) => {
      return sum + item.price * counts[index];
    }, 0);
    setTotalAmount(total);
  }, [counts, cartItems]);

 

  return (
    <>
    <div className="bg-gradient-to-r from-slate-900 via-cyan-500 to-blue-500 h-24" >
    <Nav/>
    </div>
      <div className="md:px-32 px-16 md:py-10 h-full bg-gradient-to-b to-zinc-400 via-slate-800 from-gray-700 ">
        {cartItems.length > 0 ? (
          <div className="flex ">
            <ul className="gap-4 text-white grid md:grid-cols-2 mt-6">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="md:gap-6 rounded-3xl border p-2 flex  "
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="md:w-16 md:h-16 w-20 h-20 rounded-2xl "
                  />
                  <div className="p-5 md:flex gap-4">
                    <h2>{item.name}</h2>
                    <p className="flex">
                      Price:
                      <span className="pt-1">
                        <PiCurrencyInrBold />
                      </span>
                      {item.price}
                    </p>
                  </div>
                  <div className="flex items-center md:gap-2">
                    <button
                      onClick={() => handleDecrement(index)}
                      className="bg-red-500 text-white w-[2rem] px-2 py-1 rounded-full"
                    >
                      -
                    </button>
                    <span className="px-3">{counts[index]}</span>
                    <button
                      onClick={() => handleIncrement(index)}
                      className="bg-green-500 text-white w-[2rem] px-2 py-1 rounded-full"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-white">Your cart is empty.</p>
        )}
        {cartItems.length > 0 ? (
          <button
            onClick={() => ByPass()}
            className="w-[10rem] text-lg hover:bg-blue-700 justify-center  bg-blue-600 rounded-3xl  text-white px-4 py-2 flex mb-0.5 md:mt-16 my-10 "
          >
            Pay:
            <span className="flex items-center ml-2">
              <PiCurrencyInrBold /> {totalAmount}
            </span>
          </button>
        ) : (
          <p className="text-white">Please select your favourite food</p>
          
        )}
        <button
                      onClick={() => handleNavigate3()}
                      className="bg-green-500 text-white px-2 mt-2 py-1 rounded-full"
                    >Go To Menu</button>
      </div>
        <Footer/>
        
    </>
  );
};

export default CartPage;
