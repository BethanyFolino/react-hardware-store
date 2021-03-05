import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductDetail(props) {
  const [product, setProduct] = useState({});
  // When this component loads, get the Product ID from the url parameter.
  // Then find the matching product from the productList prop, and assign it to product

  useEffect(() => {
    let myObject =
      props.productList.find(
        (item) => item.id === props.match.params.productId
      ) || {};
    setProduct(myObject);
    // eslint-disable-next-line
  }, []);

  function outOfStock(props) {
    if (product.quantity === 0) {
      product.price = "Out of Stock";
    }
    return product.price;
  }

  function gardenFilter(props) {
    props.productList.filter((items) =>
      items.department.includes("garden").return(items)
    );
  }

  function hardwareFilter(props) {
    props.productList.filter((items) =>
      items.department.includes("hardware").return(items)
    );
  }

  function toolFilter(props) {
    props.productList.filter((items) =>
      items.department.includes("tool").return(items)
    );
  }

  return (
    <div>
      <h3>{product.name}</h3>
      <div>Price: ${product.price}</div>
      <p>{product.description}</p>
      <Link to="/products">Go Back</Link>
    </div>
  );
}

export default ProductDetail;
