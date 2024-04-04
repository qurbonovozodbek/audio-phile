import React, { useState } from "react";
import blackPhone from "../assets/black-headP.png";
import img1 from '../assets/black-head-img1.png'
import img2 from '../assets/black-head-img2.png'
import img3 from '../assets/black-head-img3.png'
import like1 from '../assets/like-1.png'
import like2 from '../assets/like-2.png'
import like3 from '../assets/like-3.png'
import headphoneBorder from "../assets/yellow-border.png";
import prev from "../assets/prev.png";
import speakersMini from "../assets/speakers-mini.png";
import earphonesMini from "../assets/earphones-mini.png";
import people from "../assets/people.png";
import { useNavigate } from "react-router-dom";
import product from '../json-server/data.json'
import { add, remove } from '../redux/counterReducer.js'
import { useDispatch } from "react-redux";

function BlackHead() {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const data = product.products[3]
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
      <h4 onClick={() => navigate('/headPhones')}>Go back</h4>
      <div className="blackhead-card">
        <div className="left">
          <img src={blackPhone} alt="" />
        </div>
        <div className="right">
          <span>NEW PRODUCT</span>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <h3>$ 2.999</h3>
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
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </p>
          <p>
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>
        <div className="right">
          <h2>IN THE BOX</h2>
          <div className="vip">
            <p>
              1x <span>Headphone Unit</span>
            </p>
            <p>
              2x <span>Replacement Earcups</span>
            </p>
            <p>
              1x <span>User Manual</span>
            </p>
            <p>
              1x <span>3.5mm 5m Audio Cable</span>
            </p>
            <p>
              1x <span>Travel Bag</span>
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

export default BlackHead;
