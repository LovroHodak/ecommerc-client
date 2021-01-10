import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Home from "./components/Home";
import { Switch, Route, withRouter} from "react-router-dom";
import NavBarBar from './components/NavBarBar'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/items", { withCredentials: true })
      .then((response) => {
        setItems(response.data);
      });
  }, []);

  return (
    <div className="App">
      <NavBarBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home 
              items={items}
              setItems={setItems}
            />;
          }}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
