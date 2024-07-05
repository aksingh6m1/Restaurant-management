import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Nav = (props) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Cart");
  };
  return (<>
      <nav className='w-full flex justify-between'>
        <img className='w-auto h-[25vh] ' src='./ImagesP/logo1.png' alt="logo" />
        <ul className='text-white flex  mx-10 my-16'>
          <li className='px-8'>Home</li>
          <li className='px-8'>Contact</li>
          <li className='px-8'>About</li>
          <li className='px-8'>Orders</li>
        </ul>
        <div className='flex w-15 h-10 mx-10 my-16'>
        <button onClick={handleNavigate} className='hover:text-green-300 text-white text-3xl pr-5'>{props.cart}</button>
        <Button sx={{ color: 'white' }} variant="outlined">SignUp</Button>    
        </div>
      </nav>
   </>
  );
};

export default Nav;
