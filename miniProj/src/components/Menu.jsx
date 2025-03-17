import React, { useState ,useContext} from "react";
import { CartContext } from "./CartContext";
import Nav from "./Nav";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItems from "./MenuItems";
import { BiCartAdd } from "react-icons/bi";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Footer from './footer'

const items = [
  { id: "101", img: "./itemsImg/img2.jpg", name: "Burger", price: "99" },
  { id: "102", img: "./itemsImg/img3.jpg", name: "Icecream", price: "49" },
  { id: "103", img: "./itemsImg/img5.jpg", name: "Burger", price: "199" },
  { id: "104", img: "./itemsImg/img6.jpg", name: "Pao Bhaji", price: "99" },
  { id: "105", img: "./itemsImg/img7.jpg", name: "Maugi", price: "39" },
  { id: "106", img: "./itemsImg/img8.jpg", name: "EggSandwiz", price: "139" },
  { id: "107", img: "./itemsImg/img9.jpg", name: "Masroom", price: "189" },
  { id: "108", img: "./itemsImg/img8.jpg", name: "EggSandwiz", price: "139" },
  { id: "108", img: "./itemsImg/img8.jpg", name: "EggSandwiz", price: "139" },
  { id: "108", img: "./itemsImg/img8.jpg", name: "EggSandwiz", price: "139" },
  { id: "108", img: "./itemsImg/img8.jpg", name: "EggSandwiz", price: "139" },
  { id: "108", img: "./itemsImg/img8.jpg", name: "EggSandwiz", price: "139" },
  { id: "108", img: "./itemsImg/img8.jpg", name: "EggSandwiz", price: "139" },
  { id: "108", img: "./itemsImg/img8.jpg", name: "EggSandwiz", price: "139" },
  { id: "108", img: "./itemsImg/img8.jpg", name: "EggSandwiz", price: "139" },
  { id: "108", img: "./itemsImg/img8.jpg", name: "EggSandwiz", price: "139" },
  { id: "108", img: "./itemsImg/img8.jpg", name: "EggSandwiz", price: "139" },
  { id: "108", img: "./itemsImg/img8.jpg", name: "EggSandwiz", price: "139" },
  { id: "108", img: "./itemsImg/img8.jpg", name: "EggSandwiz", price: "139" },
  { id: "108", img: "./itemsImg/img8.jpg", name: "EggSandwiz", price: "139" },
  { id: "108", img: "./itemsImg/img8.jpg", name: "EggSandwiz", price: "139" },
];

function Menu() {
  const [tblName, setTblName] = React.useState("");

  const cartContext = useContext(CartContext)
 
  const handleChange = (event) => {
    setTblName(event.target.value);
    // console.log(event.target.value)
    cartContext.setTableNo(event.target.value)
  };
 
  return (
    <>
      <div className="bg-gradient-to-r from-slate-900 via-cyan-500 to-blue-500 h-24">
        <Nav cart={<BiCartAdd />} sup={cartContext.itemNum} />
      </div>
      <div className="h-full bg-gradient-to-b to-zinc-900 from-gray-700 pr-6 overflow-hidden ">
        <div className="flex">
          <img
            className="w-auto h-[20vh] md:pl-[14rem] "
            src="./ImagesP/logo2.png"
            alt="logo"
          />
          <Box
            className="md:mt-10 md:mr-2 pr-4"
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-search"
              placeholder="Your Name"
              label="Full Name"
              type="search"
              required
              variant="standard"
              value={cartContext.userName}
              onChange={(e)=>{cartContext.setUserName(e.target.value)}}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Table Number
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={cartContext.tableNo}
                onChange={handleChange}
                label="Age"
                required
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={1}>1st</MenuItem>
                <MenuItem value={2}>2nd</MenuItem>
                <MenuItem value={3}>3rd</MenuItem>
                <MenuItem value={4}>4th</MenuItem>
                <MenuItem value={5}>5th</MenuItem>
                <MenuItem value={6}>6th</MenuItem>
                <MenuItem value={7}>7th</MenuItem>
                <MenuItem value={8}>8th</MenuItem>
                <MenuItem value={9}>9th</MenuItem>
                <MenuItem value={10}>10th</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-2 gap-1">
          {items.map((item) => (
            <MenuItems
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              setNum = {cartContext.setItemNum}
              num = {cartContext.itemNum}
            />
          ))}
        </div>
      </div>
      <Footer/>
    
    </>
  );
}

export default Menu;