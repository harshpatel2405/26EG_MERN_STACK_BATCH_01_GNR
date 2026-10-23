import React from "react";

/*
* Build a React component that displays products with their prices and quantity.
* const cart = [
*   { id: 1, name: "Laptop", price: 50000, quantity: 1 },
*   { id: 2, name: "Mouse", price: 500, quantity: 2 },
*   { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
* ];


^ Your component should:
^ 1. Display each product in a card.
^ 2. Calculate each product's subtotal (price × quantity).
^ 3. Display the grand total.
^ 4. Use map() to render the products.
^ 5. Use reduce() to calculate the grand total.

*/
import "./MapDemo4.css";

const MapDemo4 = () => {

//   console.log(finalTotal)
  return (
    <div class="container">
      <header>
        <span class="logo">
          <img src="images/logo.png" alt="" />
          <h5>Master Card</h5>
        </span>
        <img src="images/chip.png" alt="" class="chip" />
      </header>
      <div class="card-details">
        <div class="name-number">
          <h6>Card Number</h6>
          <h5 class="number">8050 5040 2030 3020</h5>
          <h5 class="name">Prem Kumar Shahi</h5>
        </div>
        <div class="valid-date">
          <h6>Valid Thru</h6>
          <h5>05/28</h5>
        </div>
      </div>
    </div>
  );
};

export default MapDemo4;


/*
import "./MapDemo4.css";

const MapDemo4 = () => {
  const cart = [
    { id: 1, name: "Laptop", price: 50000, quantity: 1 },
    { id: 2, name: "Mouse", price: 500, quantity: 2 },
    { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
  ];

  const finalTotal = cart.reduce((acc ,curr)=>acc+(curr.price*curr.quantity), 0)
  console.log(finalTotal)
  return (
    <div>
      <div class="parent">
        {cart.map((c) => {
          return (
            <div class="child">
              <p>ID : {c.id}</p>
              <p>Name : {c.name}</p>
              <p>Quantity : {c.quantity}</p>
              <p>Price : {c.price}</p>
              <p>Total : {c.price * c.quantity}</p>
            </div>
          );
        })}
      </div>
      <div class="final">Grand Total : {finalTotal}</div>
    </div>
  );
};

export default MapDemo4;

*/