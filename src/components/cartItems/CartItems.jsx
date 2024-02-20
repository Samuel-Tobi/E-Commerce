import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import removeIcon from "../assets/cart_cross_icon.png";
import "./cartItems.css";

function CartItems() {
  const { getTotalCartAmount, allProducts, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItemsFormatMain">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        <hr />
        {allProducts.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartItemsFormat cartItemsFormatMain">
                  <img src={e.image} alt="" className="cartIconProductIcon" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cartItemsQuantity">
                    {cartItems[e.id]}
                  </button>
                  <p>${e.new_price * cartItems[e.id]}</p>
                  <img
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    src={removeIcon}
                    alt=""
                    className="cartItemRemoveIcon"
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="cartItemsDown">
          <div className="cartItemsTotal">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartItemsTotalItems">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartItemsTotalItems">
                <p>Shipping Fee</p>
                <p>Free </p>
              </div>
              <hr />
              <div className="cartItemsTotalItems">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECHOUT</button>
          </div>
          <div className="cartItemsPromoCode">
            <p>If you have a promo code, Enter here</p>
            <div className="cartItemsPromoBox">
              <input type="text" placeholder="promo code" name="" id="" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
