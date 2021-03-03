import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductSummary from "../components/ProductSummary";
import ProductDetail from "../components/ProductDetail";

/*
Step 1
1. Create new Switch element in Product List
2. Make a Route element with path="/products" inside Switch
3. Put JSX for ProductList inside it

Step 2
1. Create another Route before "/products" path with the path "/products/detail/:productId"
2. Add a ProductDetail component inside the Route (Step 2, not Step 1)
3. Will need to pass in the productList array as a prop
*/

function ProductList(props) {
  return (
    <Switch>
      <Route path="/products/detail/:productId">
        <ProductDetail />
      </Route>
      <Route path="/products">
        <div className="productList">
          <h2>Our Products</h2>
          <ul>
            {props.productList.map((product) => (
              <ProductSummary key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </Route>
    </Switch>
  );
}

export default ProductList;
