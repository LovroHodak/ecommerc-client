import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Home from "./components/Home";
import { Switch, Route, withRouter } from "react-router-dom";
import NavBarBar from "./components/NavBarBar";
import ItemDetail from "./components/ItemDetail";
import Info from "./components/Info";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/items", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        console.log(response.data[0].name);
        setItems(response.data);
      });
  }, []);

  const handleEdit = (item) => {
    axios.patch(`http://localhost:5050/api/items/${item._id}`,{
      nrOfItems: item.nrOfItems
    })
    .then(() => {
      let updatedItems = items.map((myItem) => {
        if(myItem._id == item._id){
          myItem = item
        }
        return myItem
      })
      setItems(updatedItems)
      console.log('clicked', updatedItems)
    })
  }


  return (
    <div className="App">
      <NavBarBar />
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
            return <ItemDetail handleEdit={handleEdit} {...routeProps} />;
          }}
        />
        <Route
          exact
          path="/info"
          render={() => {
            return <Info />;
          }}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
