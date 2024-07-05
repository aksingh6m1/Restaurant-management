import React from "react";
import Nav from "./Nav";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItems from "./MenuItems";
import { BiCartAdd } from "react-icons/bi";

function Menu() {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-900 via-cyan-500 to-blue-500 h-36 ">
        <Nav cart={<BiCartAdd/>} />
      </div>
      <div className="h-full bg-gradient-to-b to-zinc-900 from-gray-700 pr-6">
        <div className="flex">
          <img
            className="w-auto h-[20vh] pl-[20rem]   "
            src="./ImagesP/logo2.png"
            alt="logo"
          />
          <Box
            className="mt-10"
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-search"
              placeholder="Search items type..."
              label="𝙼𝚎𝚗𝚞"
              type="search"
              variant="standard"
            />
          </Box>
        </div>
        <div className="grid grid-cols-6 gap-1 ">
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img3.jpg" name="Icecream" price="49" />
          <MenuItems img="./itemsImg/img4.jpg" name="ADKiMal" price="1999" />
          <MenuItems img="./itemsImg/img5.jpg" name="Burger" price="199" />
          <MenuItems img="./itemsImg/img6.jpg" name="Pao Bhaji" price="99" />
          <MenuItems img="./itemsImg/img7.jpg" name="Maugi" price="39" />
          <MenuItems img="./itemsImg/img8.jpg" name="EggBurger" price="139" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
          <MenuItems img="./itemsImg/img2.jpg" name="Burger" price="99" />
        </div>
      </div>
    </>
  );
}

export default Menu;
