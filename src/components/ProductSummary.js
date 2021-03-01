import React from "react";

function ProductSummary(props) {
  return (
    <div className="productSummary">
      {props.product.name} - ${props.product.price}{" "}
      <span className="productArrow">&gt;</span>
    </div>
  );
}

export default ProductSummary;
