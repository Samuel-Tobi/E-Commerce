import React from "react";
import Hero from "../components/hero/Hero";
import NewCollections from "../components/newCollections/NewCollections";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
}

export default Shop;
