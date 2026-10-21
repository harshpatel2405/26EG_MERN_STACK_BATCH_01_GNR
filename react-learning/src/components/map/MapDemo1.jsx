import React from "react";

const MapDemo1 = () => {
  const names = ["Harsh", "Anshul", "Divya", "Bansari", "Dhruv"];

  return (
    <div>
      <h1>Names Printing Using map</h1>
      <ol>
        {names.map((name) => {
          return <li>{name}</li>;
        })}
      </ol>
    </div>
  );
};

export default MapDemo1;
