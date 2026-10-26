import React from "react";
import './MapDemo5.css'


const MapDemo6 = () => {
  const users = [
    {
      id: 1,
      name: "Harsh",
      age: 22,
      address: {
        city: "ahm",
        pincode: 380052,
      },
      phone: [123, 456, 789],
    },
    {
      id: 2,
      name: "Divya",
      age: 18,
      address: {
        city: "GNR",
        pincode: 382421,
      },
      phone: [321, 654, 987],
    },
    {
      id: 3,
      name: "Bansari",
      age: 23,
      address: {
        city: "MDS",
        pincode: 383315,
      },
      phone: [222, 555, 777],
    },
  ];

  return (
    <div className="main">
      {users.map((user) => {
        return (
          <div className="box">
            <p>ID : {user.id}</p>
            <p>Name : {user.name}</p>
            <p>Age : {user.age}</p>
            <p>City : {user.address.city}</p>
            <p>Pincode : {user.address.pincode}</p>
            <span>Number : </span>
            {
                user.phone.map((pn)=>{
                    return (
                        <span>{pn}, </span>
                    )
                })
            }
          </div>
        );
      })}
    </div>
  );
};

export default MapDemo6;
