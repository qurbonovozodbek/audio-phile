import React, { useState } from "react";
import blackPhone from "../assets/grey-singlee.png";
import img1 from '../assets/ear-1.png'
import img2 from '../assets/ear-2.png'
import img3 from '../assets/ear-3.png'
import like1 from '../assets/like-1.png'
import like2 from '../assets/like-2.png'
import like3 from '../assets/like-3.png'
import headphoneBorder from "../assets/yellow-border.png";
import prev from "../assets/prev.png";
import speakersMini from "../assets/speakers-mini.png";
import earphonesMini from "../assets/earphones-mini.png";
import people from "../assets/people.png";
import { useNavigate } from "react-router-dom";
import { add, remove } from "../redux/counterReducer";
import { useDispatch } from "react-redux";
import product from '../json-server/data.json'

function EarPhone() {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const data = product.products[0]
  const dispatch = useDispatch()

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count === 0) {
      return false;
    } else {
      setCount(count - 1);
    }
    setCount(count - 1);
    return true;
  };

  function handleAddCart(e) {
    e.preventDefault();
    const products = {
      id: data.id,
      name: data.name,
      price: data.price,
      image: data.image.desktop,
      count: count
    }
    dispatch(add(products));
    console.log(43,products);
  }
  return (
    <div className="blackhead">
      <h4 onClick={() => navigate('/earPhones')}>Go back</h4>
      <div className="blackhead-card">
        <div className="left">
          <img src={blackPhone} alt="" />
        </div>
        <div className="right">
          <span>NEW PRODUCT</span>
          <h1>YX1 WIRELESS
EARPHONES</h1>
          <p>
          Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
          </p>
          <h3>$ 599</h3>
          <div className="shopping">
            <div className="amount">
              <button onClick={handleMinus}>-</button>
              {count}
              <button onClick={handlePlus}>+</button>
            </div>
            <button className="new-btn" onClick={handleAddCart}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className="blackhead-info">
        <div className="left">
          <h2>FEATURES</h2>
          <p>
          Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
          </p>
          <p>
          The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.
          </p>
        </div>
        <div className="right">
          <h2>IN THE BOX</h2>
          <div className="vip">
            <p>
              2x <span>Earphone Unit</span>
            </p>
            <p>
              6x <span>Multi-size Earplugs</span>
            </p>
            <p>
              1x <span>User Manual</span>
            </p>
            <p>
              1x <span>USB-C Charging Cable</span>
            </p>
            <p>
              1x <span>Travel Pouch</span>
            </p>
          </div>
        </div>
      </div>
      <div className="blackhead-img">
        <div className="left">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
        <div className="right">
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="blackhead-like">
        <h1>you may also like</h1>
        <div className="others">
          <div className="card">
            <div className="img1">
              <img src={like1} alt="" />
            </div>
            <h2>XX99 MARK I</h2>
            <button onClick={() => navigate('/whiteHead')}>SEE PRODUCT</button>
          </div>
          <div className="card">
            <div className="img2">
              <img src={like2} alt="" />
            </div>
            <h2>XX59</h2>
            <button onClick={() => navigate('/borderHead')}>SEE PRODUCT</button>
          </div>
          <div className="card">
            <div className="img3">
              <img src={like3} alt="" />
            </div>
            <h2>ZX9 SPEAKER</h2>
            <button onClick={() => navigate('/blackSpeaker')}>SEE PRODUCT</button>
          </div>
        </div>
      </div>
      <div className="home-products">
        <div className="card" onClick={() => navigate('/headPhones')}>
          <div className="card-img">
            <img className="headPhone-img" src={headphoneBorder} alt="" />
          </div>
          <h3>HEADPHONES</h3>
          <div className="shop">
            <span>SHOP</span>
            <img src={prev} alt="" />
          </div>
        </div>
        <div className="card" onClick={() => navigate('/speakers')}>
          <div className="card-img">
            <img className="speak-img" src={speakersMini} alt="" />
          </div>
          <h3>SPEAKERS</h3>
          <div className="shop">
            <span>SHOP</span>
            <img src={prev} alt="" />
          </div>
        </div>
        <div className="card" onClick={() => navigate('/earPhones')}>
          <div className="card-img">
            <img className="earPhone-img" src={earphonesMini} alt="" />
          </div>
          <h3>EARPHONES</h3>
          <div className="shop">
            <span>SHOP</span>
            <img src={prev} alt="" />
          </div>
        </div>
      </div>
      <div className="people">
        <div className="left">
          <h1>
            Bringing you the <span>BEST</span> audio gear
          </h1>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="right">
          <img src={people} alt="" />
        </div>
      </div>
    </div>
  );
}

export default EarPhone;
