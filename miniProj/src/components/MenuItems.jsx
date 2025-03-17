import React, { useState, useContext, useEffect } from "react";
import { BiCartAdd } from "react-icons/bi";
import { PiCurrencyInrBold } from "react-icons/pi";
import { MdFileDownloadDone } from "react-icons/md";
import { CartContext } from './CartContext';

function MenuItems(props) {
  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);
  const [isSelected, setIsSelected] = useState(false);


  useEffect(() => {
    // Debug: Check initial state
    console.log(`Checking if item ${props.id} is in cart`);
    setIsSelected(isInCart(props.id));
  }, [props.id, isInCart]);

  const handleCardClick = () => {
    const cardDetails = {
      id: props.id,
      name: props.name,
      price: props.price,
      img: props.img,
      description: 'This is a sample card description.',
      qty:1
    };

    if (isSelected) {
      console.log(`Removing item ${props.id} from cart`);
      removeFromCart(props.id);
      props.setNum(prev => prev - 1);
    } else {
      console.log(`Adding item ${props.id} to cart`);
      addToCart(cardDetails);
      props.setNum(prev=>prev+1)
    }
    setIsSelected(!isSelected); // Toggle selection state
  };

  return (
    <div className="w-40 h-56 m-10 border-2 text-white border-slate-600 rounded-[3px] hover:opacity-80">
      <img
        className="w-full h-36 p-1 rounded-t-md"
        src={props.img}
        alt="food-img"
      />
      <div className="flex justify-between px-2">
        <h1>{props.name}</h1>
        <h1 className="flex">
          <span className="text-xl pt-1">
            <PiCurrencyInrBold />
          </span>
          {props.price}
        </h1>
      </div>
      <div className="border-2 border-slate-500 rounded-[20px] w-[9rem] flex px-2 mt-4 ml-1 justify-between">
        <h1 className="text-white text-sm">Add to Cart:</h1>
        <button
          onClick={handleCardClick}
          className="hover:text-green-300 text-white text-2xl"
        >
          {isSelected ? <MdFileDownloadDone className="text-green-500" /> : <BiCartAdd />}
        </button>
      </div>
    </div>
  );
}

export default MenuItems;
