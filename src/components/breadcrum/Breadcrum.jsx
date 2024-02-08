import React from "react";
import "./breadcrum.css";
import arrowIcon from "../assets/breadcrum_arrow.png";

function Breadcrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrowIcon} /> Shop <img src={arrowIcon} alt="" />
      {product.category} <img src={arrowIcon} alt="" /> {product.name}
    </div>
  );
}

export default Breadcrum;
