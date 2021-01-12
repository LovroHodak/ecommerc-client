import React from "react";
import "./com-style/Home.css";
import { Link } from "react-router-dom";

export default function Home({ items }) {
  return (
    <div className="homeDiv">
      {items.map((item) => {
        return (
          <Link
            to={`/items/${item._id}`}
            key={item._id}
            style={{ textDecoration: "none" }}
          >
            <div className="homeCard">
              <img
                src={item.image}
                alt="grinder-foto"
                className="grinder-foto"
              />
              <h2>{item.name}</h2>
              <p style={{ fontSize: "20px", color: "black" }}>
                Price: <b>{item.price}</b> €
              </p>
              <p>Type: {item.category}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
