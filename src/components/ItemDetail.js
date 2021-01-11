import React, { useState, useEffect } from "react";
import axios from "axios";
import "./com-style/ItemDetail.css";
import { Link } from "react-router-dom";
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

  const itemStock = () => {
    setItem({
      _id: item._id, 
      name: item.name, 
      price: item.price, 
      image: item.image,
      nrOfItems: item.nrOfItems - 1, 
      category: item.category,
      description: item.description
    })
    console.log('hereeeee', item)
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
            <p><b>Description: </b>{item.description}</p>
          </div>
          <p style={{fontSize: '40px'}} >Price: <b>{item.price} </b>€</p>
          <p>Category: {item.category}</p>
          <p>Stock: {item.nrOfItems}</p>
          <button onClick={itemStock} className='itemButton'>ADD TO BASKET</button>
          <button onClick={() => itemStock(props.handleEdit(item))} className='itemButton'>dataBase</button>
          <button onClick={() => props.handleEdit(item)} className='itemButton'>app</button>
        </div>
      </div>
    </div>
  );
}
