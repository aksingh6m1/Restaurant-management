import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const Forworker = () => {
  const navigate1 = useNavigate();
  const handleNavigate1 = () => {
    navigate1("/OrderList");
  };
  const [password, setPassword] = useState("");
  const pswrd = "8888";

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleButtonClick = () => {
    if (password === pswrd) {
      handleNavigate1();
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div className="shadow-2xl shadow-green-300 gap-7 h-60 w-[50%] bg-gradient-to-b to-zinc-900 via-slate-600 from-gray-700 md:flex justify-center py-20 px-5 md:ml-72 ml-40 rounded-3xl mt-36 ">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      
      ></Box>
      <TextField
        required
        id="standard-password-input"
        value={password}
        label="Password"
        type="password"
        onChange={handlePasswordChange}
        variant="standard"
      />
      <button
        className="text-slate-300 w-56 h-10 bg-green-500 bg-opacity-60 rounded-lg justify-center mt-3 border-solid hover:border-x-4 border-sky-500"
        onClick={handleButtonClick}
      >
        Order List
      </button>
    </div>
  );
};

export default Forworker;
