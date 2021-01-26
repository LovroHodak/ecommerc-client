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
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/items", { withCredentials: true })
      .then((response) => {
        setItems(response.data);
      });
  }, []);

  const addToBasketChangeState = (id) => {
    const newList = items.map((item) => {
      if(item.id === id){
        const updatedItem = {
          ...item,
          nrOfItems: item.nrOfItems - 1
        }
        return updatedItem
      }
      return item
    })
    setItems(newList)
  }

  return (
    <div className="App">
      <NavBarBar basketItems={basketItems} />

      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home items={items} />;
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
                showButton={showButton}
                setShowButton={setShowButton}
                setBasketItems={setBasketItems}
                addToBasketChangeState={addToBasketChangeState}
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
            return (
              <ShoppingCart
                basketItems={basketItems}
                setBasketItems={setBasketItems}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
