import React, { useState } from "react";
import blackPhone from "../assets/black-headP.png";
import img1 from "../assets/speaker-1.png";
import img2 from "../assets/speaker-2.png";
import img3 from "../assets/speaker-3.png";
import like1 from "../assets/like-1.png";
import like2 from "../assets/like-2.png";
import like3 from "../assets/like-5.png";
import headphoneBorder from "../assets/yellow-border.png";
import prev from "../assets/prev.png";
import speakersMini from "../assets/speakers-mini.png";
import earphonesMini from "../assets/earphones-mini.png";
import people from "../assets/people.png";
import { useNavigate } from "react-router-dom";
import speaker from "../assets/speaker-single.png";
import product from '../json-server/data.json'
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/counterReducer";

function BlackSpeaker() {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const data = product.products[5]
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
      <h4 onClick={() => navigate("/speakers")}>Go back</h4>
      <div className="blackhead-card">
        <div className="left">
          <img src={speaker} alt="" />
        </div>
        <div className="right">
          <span>NEW PRODUCT</span>
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <h3>$4.500</h3>
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
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m).
          </p>
          <p>
            Discover clear, more natural sounding highs than the competition
            with ZX9’s signature planar diaphragm tweeter. Equally important is
            its powerful room-shaking bass courtesy of a 6.5” aluminum alloy
            bass unit. You’ll be able to enjoy equal sound quality whether in a
            large room or small den. Furthermore, you will experience new
            sensations from old songs since it can respond to even the subtle
            waveforms.
          </p>
        </div>
        <div className="right">
          <h2>IN THE BOX</h2>
          <div className="vip">
            <p>
              2x <span>Speaker Unit</span>
            </p>
            <p>
              2x <span>Speaker Cloth Panel</span>
            </p>
            <p>
              1x <span>User Manual</span>
            </p>
            <p>
              1x <span>3.5mm 5m Audio Cable</span>
            </p>
            <p>
              1x <span>10m Optical Cable</span>
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
            <div className="img5">
              <img src={like3} alt="" />
            </div>
            <h2>ZX9 SPEAKER</h2>
            <button onClick={() => navigate('/greySpeaker')}>SEE PRODUCT</button>
          </div>
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
        </div>
      </div>
      <div className="home-products">
        <div className="card" onClick={() => navigate("/headPhones")}>
          <div className="card-img">
            <img className="headPhone-img" src={headphoneBorder} alt="" />
          </div>
          <h3>HEADPHONES</h3>
          <div className="shop">
            <span>SHOP</span>
            <img src={prev} alt="" />
          </div>
        </div>
        <div className="card" onClick={() => navigate("/speakers")}>
          <div className="card-img">
            <img className="speak-img" src={speakersMini} alt="" />
          </div>
          <h3>SPEAKERS</h3>
          <div className="shop">
            <span>SHOP</span>
            <img src={prev} alt="" />
          </div>
        </div>
        <div className="card" onClick={() => navigate("/earPhones")}>
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

export default BlackSpeaker;
