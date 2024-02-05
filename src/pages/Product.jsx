import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import "./CSS/product.css";
import Breadcrum from "../components/breadcrum/Breadcrum";

function Product() {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((e) => e.id === Number(productId));

  return (
    <div className="product">
      <Breadcrum product={product} />
    </div>
  );
}

export default Product;
