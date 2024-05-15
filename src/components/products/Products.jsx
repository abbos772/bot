import React, { useRef, useState } from "react";
import "./Products.css";

// Trust but Verify
const Products = ({ data, title }) => {
  let productItems = data?.slice(0, 8).map((el) => (
    <div>
      <div key={el.id} className="card">
        <img src={el.images[0]} width={200} alt="" />
      </div>
      <h3 className="title">{el.title} - Transparent</h3>
      <h4 className="title">LKR {el.price}</h4>
    </div>
  ));
  return (
    <div>
      <h2>{title}</h2>
      <div className="wrapper">{productItems}</div>
    </div>
  );
};

export default Products;
