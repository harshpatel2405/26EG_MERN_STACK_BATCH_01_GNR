// import React from 'react'

const ComponentDemo2 = () => {
  let a = 90;
  let name = "Harsh";

  let num = [10, 20, 30, 40, 50];

  return (
    <div>
      <p>A : {a}</p>
      <p>Name : {name}</p>
      <p>num[0] : {num[0]}</p>
      <p>num[1] : {num[1]}</p>
      <p>num[2] : {num[2]}</p>
      <p>num[3] : {num[3]}</p>
      <p>num[4] : {num[4]}</p>

      {num.forEach((n) => {
        console.log(n);
      })}
    </div>
  );
};

export default ComponentDemo2;
