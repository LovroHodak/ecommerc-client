import React, { useEffect, useState } from "react";
import "./com-style/ShoppingCart.css";

export default function ShoppingCart(props) {
  const [total, setTotal] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const calculateTotal = () => {
    setTotal(
      props.basketItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      )
    );
  };

  useEffect(() => {
    calculateTotal();
  });

  const deleteBasketItem = (basketItemId) => {
    let filteredItems = props.basketItems.filter((item) => {
      return item._id !== basketItemId;
    });
    props.setBasketItems(filteredItems);
    console.log("connected");
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {props.basketItems.map((item, i) => {
          return (
            <div key={i} className="shoppingItem">
              <img src={item.image} alt="grinFoto" className="grinFoto" />
              <h1>{item.name}</h1>
              <div>
                <p>
                  Price: <b>{item.price}</b>€
                </p>
              </div>
              <button onClick={() => deleteBasketItem(item._id)}>Delete</button>
            </div>
          );
        })}
      </div>
      {showForm ? (
        <div className='checkout'>
          <form className='checkoutForm'>
            <label>Email:</label>
            <input></input>
            <label>Name:</label>
            <input></input>
            <label>Lastname:</label>
            <input></input>
            <label>Address:</label>
            <input></input>
            <label>City:</label>
            <input></input>
            <button>Order</button>
          </form>
          <h1>Total: {total} €</h1>
        </div>
      ) : (
        <div className="forward">
          <h1>Total: {total} €</h1>
          <button onClick={() => setShowForm(true)}>Proceed to Buy</button>
        </div>
      )}
    </div>
  );
}
