import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Home from "./components/Home";
import { Switch, Route, withRouter } from "react-router-dom";
import NavBarBar from "./components/NavBarBar";
import ItemDetail from "./components/ItemDetail";
import Info from "./components/Info";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [items, setItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  /* const [total, setTotal] = useState(0) */

/*   basketItems.reduce(function (accumulator, currentValue){
    return accumulator + currentValue.price
  });
 */

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/items", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        console.log(response.data[0].name);
        setItems(response.data);
      });
  }, []);

  return (
    <div className="App">
      <NavBarBar basketItems={basketItems} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home items={items} setItems={setItems} />;
          }}
        />
        <Route
          exact
          path="/items/:itemId"
          render={(routeProps) => {
            return (
              <ItemDetail
                {...routeProps}
                basketItems={basketItems}
                setBasketItems={setBasketItems}
              />
            );
          }}
        />
        <Route
          exact
          path="/info"
          render={() => {
            return <Info />;
          }}
        />
        <Route
          exact
          path="/shoppingCart"
          render={() => {
            return <ShoppingCart basketItems={basketItems}/>;
          }}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
