import React from "react";

const ComponentDemo3 = () => {
  let x = 1000;
  let data;

  const function1 = () => {
    if (x > 100) {
      data = "Price too high";
    } else {
      data = " I will come";
    }
    console.log("Function 1 called..");
  };

  return (
    <div>
      {function1()}
      <p>data : {data}</p>
    </div>
  );
};

export default ComponentDemo3;
