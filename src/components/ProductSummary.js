import React from "react";
import { Link } from "react-router-dom";

function ProductSummary(props) {
  return (
    <div className="productSummary">
      {props.product.name} - ${props.product.price}{" "}
      <span className="productArrow">&gt;</span>
      <Link to={"/products/detail/" + props.product.id}>Product Detail</Link>
    </div>
  );
}

export default ProductSummary;
