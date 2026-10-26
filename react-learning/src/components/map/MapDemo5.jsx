import React from "react";
import './MapDemo5.css'

const MapDemo5 = () => {
  const data = [
    {
      id: 1,
      name: "Harsh",
      age: 22,
    },
    {
      id: 2,
      name: "Divya",
      age: 18,
    },
    {
      id: 3,
      name: "bansari",
      age: 23,
    },
  ];

  return (
    <div>
       {data.map((d) => {
        return (
          <div className="box" key={d.id}>
            <p>Id : {d.id}</p>
            <p>Name : {d.name}</p>
            <p>Age : {d.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MapDemo5;
