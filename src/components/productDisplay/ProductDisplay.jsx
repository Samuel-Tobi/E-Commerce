import React, { useContext } from "react";
import "./productDisplay.css";
import starIcon from "../assets/star_icon.png";
import starDullIcon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productDisplay">
      <div className="productDisplayLeft">
        <div className="productDisplayImgList">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplayImg">
          <img className="productDisplayMainImg" src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplayRight">
        <h1>{product.name}</h1>
        <div className="productDisplayRightStars">
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starDullIcon} alt="" />
          <p>(132)</p>
        </div>
        <div className="productDisplayRightPrices">
          <div className="productDisplayRightPriceOld">
            ${product.old_price}
          </div>
          <div className="productDisplayRightPriceNew">
            ${product.new_price}
          </div>
        </div>
        <div className="productDisplayRightDesc">
          A lightweight, usually knitted, pullover shirt, close fitting
        </div>
        <div className="productDisplayRightSize">
          <h1>Select Size</h1>
          <div className="productDisplayRightSizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="ProductDisplayRightCategory">
          <span>Category : </span>Women, T-Shirt, Crop Top
        </p>
        <p className="ProductDisplayRightCategory">
          <span>Tags : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
