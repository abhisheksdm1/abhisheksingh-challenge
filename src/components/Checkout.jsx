import React from "react";
import "../App.css";

export default function Checkout() {
  return (
    <div className="flex justify-center items-center w-fill h-screen">
      <div
        style={{ width: "70%" }}
        className="checkout border-solid shadow-md rounded-lg"
      >
        <h1 className="m-5 text-5xl text-center">Checkout</h1>
        <p className="m-5 text-2xl">Thank you for your order</p>
      </div>
    </div>
  );
}
