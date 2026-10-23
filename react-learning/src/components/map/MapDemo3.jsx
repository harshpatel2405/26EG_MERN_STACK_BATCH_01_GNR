import React from "react";

// Display only products costing more than ₹1,000.

const MapDemo3 = () => {
  let toShow = 0;
  const products = [
    { id: 1, name: "Pen", price: 20 },
    { id: 2, name: "Headphones", price: 2000 },
    { id: 3, name: "Laptop", price: 50000 },
    { id: 4, name: "Notebook", price: 100 },
  ];

  let data = products.filter((product) => product.price > 1000);
  console.log(data);
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {toShow &&
          data.map((d) => {
            return (
              <tr>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.price}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default MapDemo3;
