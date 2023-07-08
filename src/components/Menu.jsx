import React, { useContext } from "react";
import { FaShoppingCart, FaMinus, FaPlus } from "react-icons/fa";
// import MenuList from '../data/feeds.json'
import "../App.css";
import { userContext } from "../App";
import { cartContext } from "../App";

export default function Menu() {
  const { menuItems, setMenuItems } = useContext(userContext);
  const { cart, setCart } = useContext(cartContext);
  const totalCost = menuItems.reduce(
    (total, item) => (item.total <= 0 ? total : total + item.cost),
    0
  );

  const handleIncrement = (index) => {
    setMenuItems((prevState) => {
      const updatedItems = [...prevState];
      updatedItems[index] = {
        ...updatedItems[index],
        total: updatedItems[index].total + 1,
        cost: (updatedItems[index].total + 1) * updatedItems[index].price,
      };
      return updatedItems;
    });
    setCart((prev) => prev + 1);
  };

  const handleDecrement = (index) => {
    setMenuItems((prevState) => {
      const updatedItems = [...prevState];
      if (updatedItems[index].total > 0) {
        updatedItems[index] = {
          ...updatedItems[index],
          total: updatedItems[index].total - 1,
          cost: (updatedItems[index].total - 1) * updatedItems[index].price,
        };
      }
      return updatedItems;
    });
    if (cart > 0) {
      setCart((prev) => prev - 1);
    }
  };

  console.log(menuItems);
  return (
    <div className="flex flex-wrap items-center justify-center h-screen">
      {menuItems.map((list, index) => (
        <div
          key={index}
          className="w-64 h-71 m-5  border-solid shadow-md rounded-lg"
        >
          <img
            src={list.image}
            className=" rounded-t-lg"
            style={{ width: "300px", height: "200px" }}
          />
          <div className="ml-3 mb-1">
            <h3>{list.name}</h3>
            <p>Price: {list.price}</p>
            <p>Total: {list.total}</p>
            <p>cost(INR): {list.cost}</p>

            <br />
            <div>
              <button
                className="bg-[#4f46e5] rounded-sm pt-2 pb-2 pl-5 pr-5 mr-5 text-white"
                onClick={() => handleIncrement(index)}
              >
                <FaPlus />
              </button>
              <button
                className={`${
                  list.cost > 0 ? "active" : "inactive"
                } rounded-sm pt-2 pb-2 pl-5 pr-5 mr-5 text-white`}
                onClick={() => handleDecrement(index)}
              >
                <FaMinus />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
