import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  function menuHandler() {
    navigate("/menu");
  }

  return (
    <div className="flex items-center justify-around h-screen flex-col">
      <div className="heading">
        <h1 className="text-7xl text-center">Welcome to Food's</h1>
        <h1 className="text-7xl mb-7 text-center">Kitchen</h1>
        <div className="text-center">
          <button
            onClick={menuHandler}
            className="bg-[#4f46e5] relative rounded-sm pl-3 pr-3 pt-2 pb-2 rounded-lg text-white"
          >
            GO TO MENU
          </button>
        </div>
      </div>
    </div>
  );
}
