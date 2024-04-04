import React from "react";
import blackPhone from "../assets/black-headP.png";
import whitePhone from "../assets/white-headP.png";
import blackBorder from "../assets/black-border.png";
import people from "../assets/people.png";
import headphoneBorder from "../assets/yellow-border.png";
import prev from "../assets/prev.png";
import speakersMini from "../assets/speakers-mini.png";
import earphonesMini from "../assets/earphones-mini.png";
import { useNavigate } from "react-router-dom";


function HeadPhones() {
  const navigate = useNavigate();
  return (
    <div className="headphone">
      <div className="head">
        <h1>HEADPHONES</h1>
      </div>
      <div className="head-hero">
        <div className="black-phone">
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
            <button className="new-btn" onClick={() => navigate('/blackHead')}>SEE PRODUCT</button>
          </div>
        </div>
        <div className="black-border">
          <div className="left">
            <h1>XX99 MARK I HEADPHONES</h1>
            <p>
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <button className="new-btn" onClick={() => navigate('/whiteHead')}>SEE PRODUCT</button>
          </div>
          <div className="right">
            <img src={blackBorder} alt="" />
          </div>
        </div>
        <div className="white-phone">
          <div className="left">
            <img src={whitePhone} alt="" />
          </div>
          <div className="right">
            <span>NEW PRODUCT</span>
            <h1>XX59 HEADPHONES</h1>
            <p>
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <button className="new-btn" onClick={() => navigate('/borderHead')}>SEE PRODUCT</button>
          </div>
        </div>
      </div>
      <div className="home-products">
        <div className="card">
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

export default HeadPhones;
