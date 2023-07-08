import { useState, createContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Menu from "./components/Menu";
import Checkout from "./components/Checkout";
import Register from "./components/Register";
const burgerImage = require("./assets/burger.jpeg");
const friesImage = require("./assets/fries.jpeg");
const cokeImage = require("./assets/coke.jpeg");
const pepsiImage = require("./assets/pepsi.jpeg");

export const userContext = createContext();

export const menuContext = createContext();

export const cartContext = createContext();

export const toogleContext = createContext();

function App() {
  const [clear, setClear] = useState(0);

  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Hamburger",
      price: 200,
      image: burgerImage,
      total: 0,
      cost: 0,
    },
    {
      id: 2,
      name: "Fries",
      price: 100,
      image: friesImage,
      total: 0,
      cost: 0,
    },
    {
      id: 3,
      name: "Coke",
      price: 50,
      image: cokeImage,
      total: 0,
      cost: 0,
    },
    {
      id: 4,
      name: "Pepsi",
      price: 50,
      image: pepsiImage,
      total: 0,
      cost: 0,
    },
  ]);

  const [cart, setCart] = useState(0);
  const [toogle1, setToogle1] = useState(false);
  const [toogle2, setToogle2] = useState(false);

  return (
    <>
      <Router>
        <userContext.Provider value={{ menuItems, setMenuItems }}>
          <cartContext.Provider value={{ cart, setCart }}>
            <toogleContext.Provider
              value={{
                toogle1,
                setToogle1,
                toogle2,
                setToogle2,
                clear,
                setClear,
              }}
            >
              <Header />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/LandingPage" element={<LandingPage />} />
              </Routes>
            </toogleContext.Provider>
          </cartContext.Provider>
        </userContext.Provider>
      </Router>
    </>
  );
}

export default App;
