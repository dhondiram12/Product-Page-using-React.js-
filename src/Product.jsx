import React from "react";
import "./Product.css";
import Button from "./Button";

const Product = ({ name, price }) => {
    let isDesc =price > 1000;
    let styles = {backgroundColor: price > 1000  ? "yellow" : "pink"};
    return (
    <div className="product" style={styles}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{isDesc && <p>Discount: 10% </p> }</p>
      
    </div>
  );
};
export default Product;
