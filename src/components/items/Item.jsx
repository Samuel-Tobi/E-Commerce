import React from "react";
import "./item.css";

function Item(props) {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="itemPrices">
        <div className="itemPrice-New">${props.newPrice}</div>
        <div className="itemPrice-Old">${props.oldPrice}</div>
      </div>
    </div>
  );
}

export default Item;
