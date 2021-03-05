import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ProductList from "./views/ProductList";
import Homepage from "./views/Homepage";
import Navigation from "./components/Navigation";

function App(props) {
  const [state, setState] = useState({});
  const [filter, setFilter] = useState();
  useEffect(() => {
    setState({
      productList: [
        {
          id: 1,
          name: "Wrench",
          price: "11.50",
          description: "Standard 3/16 Wrench.  Stainless Steel.",
          quantity: 5,
          department: "tool",
        },
        {
          id: 2,
          name: "Phillips Screwdriver",
          price: "3.25",
          description:
            "4-inch long stainless steel Screwdriver for Phillips Screws",
          quantity: 1,
          department: "tool",
        },
        {
          id: 3,
          name: "Power Drill",
          price: "85.99",
          description: "10 Amp Corded Power Drill",
          quantity: 1,
          department: "tool",
        },
        {
          id: 4,
          name: "Hacksaw",
          price: "15.50",
          description: "10-inch Stainless Steel Hacksaw",
          quantity: 1,
          department: "tool",
        },
        {
          id: 5,
          name: "25' Garden Hose",
          price: "9.50",
          quantity: 1,
          department: "garden",
        },
        {
          id: 6,
          name: "Bag of Garden Soil",
          price: "5.00",
          description: "Bag of high quality dirt",
          quantity: 1,
          department: "garden",
        },
        {
          id: 7,
          name: "Shovel",
          price: "12.00",
          description: "Round Point forged shovel with a wooden handle",
          quantity: 1,
          department: "garden",
        },
        {
          id: 8,
          name: "Flathead Screwdriver",
          price: "4.50",
          description:
            "4-inch long stainless steel Screwdriver for Flathead Screws",
          quantity: 0,
          department: "tool",
        },
        {
          id: 9,
          name: "Corded Drill",
          price: "124.50",
          description: "2.0 Amp 5600RPM Corded Drill",
          quantity: 1,
          department: "tool",
        },
        {
          id: 10,
          name: "Pack of 50 Screws",
          price: "8.50",
          description: "2 inch long Phillips Head construction screws",
          quantity: 2,
          department: "hardware",
        },
        {
          id: 11,
          name: '1/8" washers',
          price: "4.50",
          description: "Stainless Steel washers, set of 50",
          quantity: 1,
          department: "hardware",
        },
      ],
    });
  }, []);

  // function outOfStock(props) {
  //   if (product.quantity === 0) {
  //     product.price = "Out of Stock";
  //   }
  //   return product.price;
  // }

  // function gardenFilter(props) {
  //   props.productList.filter((items) => items.department === "garden");
  // }

  // function hardwareFilter(props) {
  //   props.productList.filter((items) => items.department === "hardware");
  // }

  // function toolFilter(props) {
  //   props.productList.filter((items) => items.department === "tool");
  // }
  return (
    <div className="App">
      <div>
        <h1>Welcome to Kenzie Hardware!</h1>
        <Navigation />
        <button onClick={() => setFilter("garden")}>Garden</button>
        <button onClick={() => setFilter("hardware")}>Hardware</button>
        <button onClick={() => setFilter("tool")}>Tools</button>
      </div>
      <Switch>
        <Route
          path="/products"
          render={(props) => (
            <ProductList {...props} productList={state.productList} />
          )}
        />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
