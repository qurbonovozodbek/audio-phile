import React from "react";
import blackSpeaker from "../assets/black-speaker.png";
import greySpeaker from "../assets/grey-speaker.png";
import people from "../assets/people.png";
import headphoneBorder from "../assets/yellow-border.png";
import prev from "../assets/prev.png";
import speakersMini from "../assets/speakers-mini.png";
import earphonesMini from "../assets/earphones-mini.png";
import { useNavigate } from "react-router-dom";


function Speakers() {
  const navigate = useNavigate();
  return (
    <div className="speakers">
      <div className="head">
        <h1>SPEAKERS</h1>
      </div>
      <div className="head-hero">
        <div className="black-speaker">
          <div className="left">
            <img src={blackSpeaker} alt="" />
          </div>
          <div className="right">
            <span>NEW PRODUCT</span>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <button className="new-btn" onClick={() => navigate('/blackSpeaker')}>SEE PRODUCT</button>
          </div>
        </div>
        <div className="grey-speaker">
          <div className="left">
            <h1>ZX7 SPEAKER</h1>
            <p>
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </p>
            <button className="new-btn" onClick={() => navigate('/greySpeaker')}>SEE PRODUCT</button>
          </div>
          <div className="right">
            <img src={greySpeaker} alt="" />
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
        <div className="card">
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

export default Speakers;
