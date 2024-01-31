import React from "react";
import "./offers.css";
import exclusiveImg from "../assets/exclusive_image.png";

function Offers() {
  return (
    <div className="offers">
      <div className="offersLeft">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offersRight">
        <img src={exclusiveImg} alt="" />
      </div>
    </div>
  );
}

export default Offers;
