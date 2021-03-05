import React from "react";
import { Link, Route, Switch } from "react-router-dom";
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
  const { productList } = props;
  return (
    <div className="productList">
      <h2>Our Products</h2>
      <Link to={"/products/garden"}>
        <button>Garden</button>
      </Link>
      <Link to={"/products/hardware"}>
        <button>Hardware</button>
      </Link>
      <Link to={"/products/tool"}>
        <button>Tool</button>
      </Link>
      <Switch>
        <Route
          path="/products/detail/:productId"
          render={(props) => (
            <ProductDetail {...props} productList={productList} />
          )}
        ></Route>
        <Route path="/products/garden">
          <ul>
            {props.productList &&
              props.productList
                .filter((items) => items.department === "garden")
                .map((product) => (
                  <ProductSummary key={product.id} product={product} />
                ))}
          </ul>
        </Route>
        <Route path="/products/hardware">
          <ul>
            {props.productList &&
              props.productList
                .filter((items) => items.department === "hardware")
                .map((product) => (
                  <ProductSummary key={product.id} product={product} />
                ))}
          </ul>
        </Route>
        <Route path="/products/tool">
          <ul>
            {props.productList &&
              props.productList
                .filter((items) => items.department === "tool")
                .map((product) => (
                  <ProductSummary key={product.id} product={product} />
                ))}
          </ul>
        </Route>
        <Route path="/products">
          <ul>
            {props.productList &&
              props.productList.map((product) => (
                <ProductSummary key={product.id} product={product} />
              ))}
          </ul>
        </Route>
      </Switch>
    </div>
  );
}

export default ProductList;
