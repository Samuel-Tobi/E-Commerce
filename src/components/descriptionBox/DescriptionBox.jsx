import React from "react";
import "./descriptionBox.css";

function DescriptionBox() {
  return (
    <div className="descriptionBox">
      <div className="descriptionBoxNavigator">
        <div className="descriptionBoxNavBox">Description</div>
        <div className="descriptionBoxNavBox fade"> Reviews (122)</div>
      </div>
      <div className="descriptionBoxDescription">
        <p>
          An e-commerce website is an online platform where businesses sell
          products or services to customers over the internet, facilitating
          transactions, order processing, and delivery of goods or services. It
          enables users to browse, select, and purchase items conveniently from
          the comfort of their own homes.
        </p>
        <p>
          E-commerce websites typically facilitate online transactions by
          providing a platform for businesses to showcase and sell their
          products or services to customers.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
