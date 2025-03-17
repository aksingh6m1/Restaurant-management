import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Check() {
  const [answer, setAnswer] = useState("Your Payment Status?");
  const navigate = useNavigate();
  const handleNavigate3 = () => {
    navigate("/Thanks");
  };
  const handleNavigate4 = () => {
    navigate("/Menu");
  };

  return (
    <div className="text-white text-2xl shadow-2xl shadow-green-300 gap-7 md:h-60 w-[50%] bg-gradient-to-b via-zinc-900 to-slate-600 from-gray-700 justify-center md:px-48 py-20 md:ml-72 ml-24 p-12 rounded-3xl mt-36 ">
      {answer === "Yes" ? (
        <h1>{handleNavigate3()}</h1>
      ) : answer === "No" ? (
        <h1>{handleNavigate4()}</h1>
      ) : (
        <h1>{answer}</h1>
      )}

      <div className="py-6 ">
        <button
          className="mr-2 justify-between w-16 border rounded-2xl hover:bg-green-500"
          onClick={() => setAnswer("Yes")}
        >
          Yes
        </button>
        <button
          className="ml-1 justify-between w-16 border  rounded-2xl hover:bg-green-500"
          onClick={() => setAnswer("No")}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Check;
