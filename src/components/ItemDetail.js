import React, { useState, useEffect } from "react";
import axios from "axios";
import "./com-style/ItemDetail.css";
/* value={item.nrOfItems} */

export default function ItemDetail(props) {
  const [item, setItem] = useState({});

  useEffect(() => {
    let thatId = props.match.params.itemId;
    axios.get(`http://localhost:5050/api/items/${thatId}`).then((response) => {
      console.log("response.data: ", response.data);
      setItem(response.data);
    });
  }, []);

  const handleNrOfItems = () => {
    console.log("awake");
    const updatedItem = {
      ...item,
      nrOfItems: item.nrOfItems - 1,
    };

    setItem(updatedItem);
  };

  const addToBasket = () => {
    props.setBasketItems([item, ...props.basketItems])
    props.setShowButton(false)
    handleNrOfItems()
    props.addToBasketChangeState(item.id)
  }
    

  return (
    <div className="itemDetailDiv">
      <h1 className="itemTitle">{item.name}</h1>
      <div className="itemCard">
        <div className="singleFotoDiv">
          <img
            src={item.image}
            alt="singleItemFoto"
            className="singleItemFoto"
          />
        </div>
        <div className="itemGeneral">
          <div className="itemDescription">
            <p>
              <b>Description: </b>
              {item.description}
            </p>
          </div>
          <p style={{ fontSize: "40px" }}>
            Price: <b>{item.price} </b>€
          </p>
          <p>Stock: {item.nrOfItems}</p>
          <p>Category: {item.category}</p>
          <button onClick={addToBasket} className="itemButton">ADD TO BASKET</button> 
{/*           {
            props.showButton ? (
              <button onClick={addToBasket} className="itemButton">ADD TO BASKET</button>
            ) : (
              <button className="itemButton">REMOVE FROM BASKET</button>
            )
          }  */}
        </div>
      </div>
    </div>
  );
}
