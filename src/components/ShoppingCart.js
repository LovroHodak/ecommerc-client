import React, { useEffect, useState } from "react";
import "./com-style/ShoppingCart.css";

export default function ShoppingCart(props) {
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    setTotal(props.basketItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    ));
    console.log("done");
  };

  useEffect(() => {
    console.log("effecttt", props.basketItems);
    calculateTotal()
  });

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
              <button>Delete</button>
            </div>
          );
        })}
      </div>
      <div className='forward'>
        <h1>Total: {total} €</h1>
        <button>Proceed to Buy</button>
      </div>

    </div>
  );
}
