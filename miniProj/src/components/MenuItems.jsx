import React from "react";
import { BiCartAdd } from "react-icons/bi";
import { PiCurrencyInrBold } from "react-icons/pi";
import { useState } from "react";
import { MdFileDownloadDone } from "react-icons/md";


function MenuItems(props) {
  const [cart, setCart] = useState( <BiCartAdd />);
  return (
    <>
      <div className="w-40 h-56 m-10 border-2 text-white border-slate-600 rounded-[3px] hover:opacity-80">
        <img
          className="w-full h-36 p-1 rounded-t-md "
          src={props.img}
          alt="food-img"
        />
        <div className=" flex justify-between px-2">
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
            onClick={() => setCart(<div className="text-green-500"><MdFileDownloadDone /></div>)}
            className="hover:text-green-300 text-white text-2xl"
          >
           {cart}
          </button>
        </div>
      </div>
    </>
  );
}

export default MenuItems;
