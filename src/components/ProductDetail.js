import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductDetail(props) {
  const [product, setProduct] = useState({});
  // When this component loads, get the Product ID from the url parameter.
  // Then find the matching product from the productList prop, and assign it to product

  return (
    <div>
      <h3>{product.name}</h3>
      <div>Price: ${product.price}</div>
      <p>{product.description}</p>
      <Link to="/products">
        Go Back
      </Link>
    </div>
  );
}

export default ProductDetail;
