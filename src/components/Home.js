import React from "react";
import "./com-style/Home.css";
import { Link } from "react-router-dom";

export default function Home({ items, setItems }) {
  return (
    <div className="homeDiv">
      {items.map((item) => {
        return (
          <Link style={{ textDecoration: 'none' }}>
            <div className="homeCard" key={item._id}>
              <img
                src={item.image}
                alt="grinder-foto"
                className="grinder-foto"
              />
              <h2>{item.name}</h2>
              <p style={{ fontSize: '20px', color: 'black' }}>
                Price: <b>{item.price}</b>€
              </p>
              <p>Stock: {item.nrOfItems}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
