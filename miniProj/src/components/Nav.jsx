import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

const Nav = (props) => {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);

  const handleNavigate1 = () => {
    navigate("/cart");
  };
  
  const handleNavigate2 = () => {
    navigate("/Forworker");
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleNavigateContact = () => {
    navigate("/contact");
  };

  const handleNavigateAbout = () => {
    navigate("/about");
  };

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <nav className="w-full flex justify-between items-center md:px-16 px-5 ">
        <img
          className="w-auto h-32 md:h-[25vh]"
          src="./ImagesP/logo1.png"
          alt="logo"
        />
        <ul className="hidden md:flex text-white mx-10 my-1">
          <li
            className="px-4 cursor-pointer hover:text-green-300"
            onClick={handleNavigateHome}
          >
            Home
          </li>
          <li
            className="px-4 cursor-pointer hover:text-green-300"
            onClick={handleNavigateContact}
          >
            Contact
          </li>
          <li
            className="px-4 cursor-pointer hover:text-green-300"
            onClick={handleNavigateAbout}
          >
            About
          </li>
          <li className="px-4 cursor-pointer hover:text-green-300">Orders</li>
        </ul>
        <div className="border-white md:flex items-center space-x-4">
          <button onClick={handleNavigate1}>
            <div className="flex text-white text-3xl ">
              <span className="hover:text-green-300">{props.cart}</span>
              <span className="text-xl">
                <sup>{props.sup}</sup>
              </span>
            </div>
          </button>
          <div className="hidden md:flex">
            <Button
              onClick={handleNavigate2}
              sx={{ color: "white", borderColor: "white" }}
              variant="outlined"
            >
              LogIn
            </Button>
          </div>
        </div>
        <div className="sm:hidden">
          <IconButton onClick={toggleDrawer(true)} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        </div>
      </nav>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List className="w-44 h-screen text-white bg-slate-900">
          <ListItem>
            <ListItemButton onClick={handleNavigateHome}>Home</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleNavigateContact}>
              Contact
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleNavigateAbout}>About</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>Developer</ListItemButton>
          </ListItem>
        </List>
        <ListItem className="border bg-green-500 hover:bg-green-700 w-10 text-white ">
          <ListItemButton onClick={handleNavigate2}>LogIn</ListItemButton>
        </ListItem>
      </Drawer>
    </>
  );
};

export default Nav;
