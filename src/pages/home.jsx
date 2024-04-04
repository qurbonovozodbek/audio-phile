import React from "react";
import data from "../json-server/data.json";
import bigheadPhones from "../assets/black-pixso.png";
import headphoneBorder from "../assets/yellow-border.png";
import speakersMini from "../assets/speakers-mini.png";
import earphonesMini from "../assets/earphones-mini.png";
import prev from "../assets/prev.png";
import speakersBig from "../assets/speakers-big.png";
import earphone from "../assets/earphones-big.png"
import people from "../assets/people.png";
import { useNavigate } from "react-router-dom";
let product = data.products;
console.log(product);

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-wrapper">
      <div className="home-headPhones">
        <div className="home-headPhones-left">
          <span>NEW PRODUCT</span>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="new-btn" onClick={() => navigate('/blackHead')}>SEE PRODUCT</button>
        </div>
        <div className="home-headPhones-right">
          <img src={bigheadPhones} alt="" />
        </div>
      </div>
      <div className="home-products">
        <div className="card" onClick={() => navigate('/headPhones')}>
          <div className="card-img">
            <img className="headPhone-img" src={headphoneBorder} alt="" />
          </div>
            <h3>HEADPHONES</h3>
            <div className="shop">
              <span>
                SHOP
              </span>
              <img src={prev} alt="" />
            </div>
        </div>
        <div className="card" onClick={() => navigate('/speakers')}>
          <div className="card-img">
            <img className="speak-img" src={speakersMini} alt="" />
          </div>
            <h3>SPEAKERS</h3>
            <div className="shop">
              <span>
                SHOP
              </span>
              <img src={prev} alt="" />
            </div>
        </div>
        <div className="card" onClick={() => navigate('/earPhones')}>
          <div className="card-img">
            <img className="earPhone-img" src={earphonesMini} alt="" />
          </div>
            <h3>EARPHONES</h3>
            <div className="shop">
              <span>
                SHOP
              </span>
              <img src={prev} alt="" />
            </div>
        </div>
      </div>
      <div className="home-heros">
        <div className="bigSpeaker">
          <div className="left">
            <img src={speakersBig} alt="" />
          </div>
          <div className="right">
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button onClick={() => navigate('/blackSpeaker')}>SEE PRODUCT</button>
          </div>
        </div>
        <div className="smallSpeaker">
          <div className="left">
            <h1>ZX7 SPEAKER</h1>
            <button onClick={() => navigate('/greySpeaker')}>SEE PRODUCT</button>
          </div>
        </div>
        <div className="earphone">
          <div className="left">
            <img src={earphone} alt="" />
          </div>
          <div className="right">
            <h1>XY1 EARPHONE</h1>
            <button onClick={() => navigate('/earPhone')}>SEE PRODUCT</button>
          </div>
        </div>
      </div>
      <div className="people">
        <div className="left">
          <h1>Bringing you the <span>BEST</span> audio gear</h1>
          <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
        <div className="right">
          <img src={people} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
