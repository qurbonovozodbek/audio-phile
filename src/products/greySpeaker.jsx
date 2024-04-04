import React, { useState } from "react";
import blackPhone from "../assets/grey-single.png";
import img1 from "../assets/grey-1.png";
import img2 from "../assets/grey-2.png";
import img3 from "../assets/grey-3.png";
import like1 from "../assets/like-1.png";
import like2 from "../assets/like-2.png";
import like3 from "../assets/like-3.png";
import headphoneBorder from "../assets/yellow-border.png";
import prev from "../assets/prev.png";
import speakersMini from "../assets/speakers-mini.png";
import earphonesMini from "../assets/earphones-mini.png";
import people from "../assets/people.png";
import { useNavigate } from "react-router-dom";
import { add, remove } from "../redux/counterReducer";
import { useDispatch } from "react-redux";
import product from "../json-server/data.json";

function GreySpeaker() {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const data = product.products[4];
  const dispatch = useDispatch();

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
      count: count,
    };
    dispatch(add(products));
    console.log(43, products);
  }

  return (
    <div className="blackhead">
      <h4 onClick={() => navigate("/speakers")}>Go back</h4>
      <div className="blackhead-card">
        <div className="left">
          <img src={blackPhone} alt="" />
        </div>
        <div className="right">
          <span>NEW PRODUCT</span>
          <h1>ZX7 Speaker</h1>
          <p>
            Stream high quality sound wirelessly with minimal to no loss. The
            ZX7 speaker uses high-end audiophile components that represents the
            top of the line powered speakers for home or studio use.
          </p>
          <h3>$ 3.500</h3>
          <div className="shopping">
            <div className="amount">
              <button onClick={handleMinus}>-</button>
              {count}
              <button onClick={handlePlus}>+</button>
            </div>
            <button className="new-btn" onClick={handleAddCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="blackhead-info">
        <div className="left">
          <h2>FEATURES</h2>
          <p>
            Reap the advantages of a flat diaphragm tweeter cone. This provides
            a fast response rate and excellent high frequencies that lower
            tiered bookshelf speakers cannot provide. The woofers are made from
            aluminum that produces a unique and clear sound. XLR inputs allow
            you to connect to a mixer for more advanced usage.
          </p>
          <p>
            The ZX7 speaker is the perfect blend of stylish design and high
            performance. It houses an encased MDF wooden enclosure which
            minimises acoustic resonance. Dual connectivity allows pairing
            through bluetooth or traditional optical and RCA input. Switch input
            sources and control volume at your finger tips with the included
            wireless remote. This versatile speaker is equipped to deliver an
            authentic listening experience.
          </p>
        </div>
        <div className="right">
          <h2>IN THE BOX</h2>
          <div className="vip">
            <p>
              1x <span>Speaker Unit</span>
            </p>
            <p>
              2x <span>Speaker Cloth Panel</span>
            </p>
            <p>
              1x <span>User Manual</span>
            </p>
            <p>
              1x <span>3.5mm 7.5m Audio Cable</span>
            </p>
            <p>
              1x <span>7.5m Optical Cable</span>
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
            <div className="img3">
              <img src={like3} alt="" />
            </div>
            <h2>ZX9 SPEAKER</h2>
            <button onClick={() => navigate("/blackSpeaker")}>
              SEE PRODUCT
            </button>
          </div>
          <div className="card">
            <div className="img1">
              <img src={like1} alt="" />
            </div>
            <h2>XX99 MARK I</h2>
            <button onClick={() => navigate("/whiteHead")}>SEE PRODUCT</button>
          </div>
          <div className="card">
            <div className="img2">
              <img src={like2} alt="" />
            </div>
            <h2>XX59</h2>
            <button onClick={() => navigate("/borderHead")}>SEE PRODUCT</button>
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

export default GreySpeaker;
