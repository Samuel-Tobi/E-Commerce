import React, { useContext } from "react";
import dropdownIcon from "../components/assets/dropdown_icon.png";
import Item from "../components/items/Item";
import { ShopContext } from "../context/ShopContext";
import "./CSS/shopCategory.css";

function ShopCategory(props) {
  const { allProducts } = useContext(ShopContext);
  return (
    <div className="shopCategory">
      <img className="shopCategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdownIcon} alt="" />
        </div>
      </div>
      <div className="shopCategory-Products">
        {allProducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                newPrice={item.new_price}
                oldPrice={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadmore">Explore More</div>
    </div>
  );
}

export default ShopCategory;
