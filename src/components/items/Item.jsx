import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
import Product from "../../pages/Product";

function Item(props) {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="itemPrices">
        <div className="itemPrice-New">${props.newPrice}</div>
        <div className="itemPrice-Old">${props.oldPrice}</div>
      </div>
    </div>
  );
}

export default Item;
