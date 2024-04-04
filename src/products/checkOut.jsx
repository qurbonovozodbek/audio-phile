import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import oval from "../assets/oval.png";
import { useNavigate } from "react-router-dom";


function CheckOut() {
  const [imageSrc, setImageSrc] = useState(null); 
  const [single, setSingle] = useState(false)
  const navigate = useNavigate();
  const cart = useSelector((state) => state.products.value);
  console.log(cart);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  useEffect(() => {
    const importComponent = async () => {
      if (cart.length > 0) {
        const imageSrc = `../.${cart[0].img}`; // Assuming image source is stored in 'img' property of cart item
        const module = await import(imageSrc);
        setImageSrc(module.default);
      }
    };

    importComponent();
  }, [cart]);

  function handleOpen(e) {
    e.preventDefault();
    setSingle(!single);
  }
  return (
    <div className="CheckOut">
      {single ? (
        <div className="order">
          <img src={oval} alt="" />
          <h2>THANK YOU FOR YOUR ORDER</h2>
          <p className="infoo">
            You will receive an email confirmation shortly.
          </p>
          <div className="items">
            <div className="left">
              {imageSrc && ( // Check if image source is available
                <div className="card">
                  <div className="card-img">
                    <img src={imageSrc} alt="" /> {/* Use dynamic image source */}
                  </div>
                  <p>
                    <h5>{cart[0].name}</h5>
                    <h5>$ {cart[0].price}</h5>
                  </p>
                  <div className="amount">x{cart[0].count}</div>
                </div>
              )}
              <span>and other item(s)</span>
            </div>
            <div className="right">
              <span>GRANT TOTAL</span>
              <h4>${totalPrice}</h4>
            </div>
          </div>
          <button onClick={() => navigate("/")}>BACK TO HOME</button>
        </div>
      ) : null}
      <h4 className="goBack" onClick={() => navigate("/")}>
        Go back
      </h4>
      <div className="checkOut-wrapper">
        <div className="checkOut-left">
          <h1>CHECKOUT</h1>
          <h4>BILLING DETAILS</h4>
          <div className="billing">
            <div className="input">
              <span>Name</span>
              <input type="text" placeholder="Alexei Ward" />
            </div>
            <div className="input">
              <span>Email Address</span>
              <input type="text" placeholder="alexei@mail.com" />
            </div>
            <div className="input">
              <span>Phone Number</span>
              <input type="number" placeholder="+1 202-555-0136" />
            </div>
          </div>
          <h4>SHIPPING INFO</h4>
          <div className="billing">
            <div className="address">
              <span>Address</span>
              <input type="email" placeholder="1137 Williams Avenue" />
            </div>
            <div className="input">
              <span>ZIP Code</span>
              <input type="number" placeholder="10001" />
            </div>
            <div className="input">
              <span>City</span>
              <input type="number" placeholder="New York" />
            </div>
            <div className="input">
              <span>Country</span>
              <input type="number" placeholder="United States" />
            </div>
          </div>
          <h4>PAYMENT DETAILS</h4>
          <div className="payment">
            <div className="left">
              <div className="method">
                <h3>Payment Method</h3>
              </div>
              <div className="input">
                <span>e-Money Number</span>
                <input type="number" placeholder="238521993" />
              </div>
            </div>
            <div className="right">
              <div className="eMoney">
                <div className="dior">
                  <div className="doir"></div>
                </div>
                <span>e-Money</span>
              </div>
              <div className="Money">
                <div className="dior"></div>
                <span>Cash on Delivery</span>
              </div>
              <div className="input">
                <span>e-Money PIN</span>
                <input type="number" placeholder="6891" />
              </div>
            </div>
          </div>
        </div>
        <div className="checkOut-right">
          <h3>SUMMARY</h3>
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
                  <div className="amount">x{el.count}</div>
                </div>
              );
            })}
          </div>
          <div className="total">
            <h5>TOTAL</h5>
            <p>$ {totalPrice}</p>
          </div>
          <div className="total">
            <h5>SHIPPING</h5>
            <p>$ 50</p>
          </div>
          <div className="total">
            <h5>VAT (INCLUDED)</h5>
            <p>$ 1,079</p>
          </div>
          <div className="totall">
            <h5>GRAND TOTAL</h5>
            <p>${totalPrice}</p>
          </div>
          <button onClick={handleOpen} className="continue">CONTINUE & PAY</button>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
