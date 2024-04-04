import "../App";
import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo-white.png";
import basket from "../assets/basketIcon.png";
import data from "../json-server/data.json";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/counterReducer";
import { BounceLoader } from "react-spinners";

function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [loader, setLoader] = useState(true);
  const cart = useSelector((state) => state.products.value);
  console.log(cart);

  const handlePlus = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].count += 1;
  };

  setTimeout(()=> {
    setLoader(false)
  },2000)

  const handleMinus = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].count > 0) {
      updatedCart[index].count -= 1;
    }
  };
  function handleCheckMark(e) {
    e.preventDefault();
    setOpen(!open);
  }

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  console.log(totalPrice);

  function handleRemove(e) {
    e.preventDefault();
    dispatch(remove());
  }

  function handleCheck(e) {
    e.preventDefault()
    navigate('/checkOut')
  }
  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/headPhones">headphones</NavLink>
            </li>
            <li>
              <NavLink to="/speakers">speakers</NavLink>
            </li>
            <li>
              <NavLink to="/earPhones">earPhones</NavLink>
            </li>
          </ul>
        </nav>
        <div className="basket">
          <img onClick={handleCheckMark} src={basket} alt="basket" />
          {open ? (
            <div className="checkmark">
              <div className="checkHead">
                <h3>CART</h3>
                <span onClick={handleRemove}>Remove all</span>
              </div>
              <div className="checkCard">
                {cart.map((el, index) => {
                  return (
                    <div key={index} className="card">
                      <div className="card-texts">
                        <div className="card-img">
                          <img src={el.image} alt="" />
                        </div>
                        <div className="info">
                          <h2>{el.name}</h2>
                          <span>$ {el.price}</span>
                        </div>
                      </div>
                      <div className="amount">
                        <button onClick={handleMinus}>-</button>
                        {el.count}
                        <button onClick={handlePlus}>+</button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="total">
                <h3>TOTAL</h3>
                <p>$ {totalPrice}</p>
              </div>
              <button className="checkOut" onClick={handleCheck}>CHECKOUT</button>
            </div>
          ) : null}
        </div>
      </header>
      {
        loader ? <BounceLoader className="loader" color="#D87D4A" /> : <main>
        <Outlet />
      </main>
      }
      <footer>
        <div className="footer-left">
          <div className="footer-line"></div>
          <img src={logo} alt="logo" />
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <span>Copyright 2021. All Rights Reserved</span>
        </div>
        <div className="footer-right">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/headPhones">headphones</NavLink>
              </li>
              <li>
                <NavLink to="/speakers">speakers</NavLink>
              </li>
              <li>
                <NavLink to="/earPhones">earPhones</NavLink>
              </li>
            </ul>
          </nav>
          <div className="footer-icons">
            <a href="https://www.facebook.com/audiophile/" target="_blank">
              <IoLogoFacebook className="link-icon" />
            </a>
            <a href="https://twitter.com/audiophile" target="_blank">
              <FaTwitter className="link-icon" />
            </a>
            <a href="https://www.instagram.com/audiophile/" target="_blank">
              <FaInstagram className="link-icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
