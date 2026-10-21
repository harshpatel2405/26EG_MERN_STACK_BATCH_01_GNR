const num = [10, 20, 30, 40, 50];

const newArray = num.map((n) => {
  return n * 2;
});

console.log(num);
console.log(newArray);

const data = [
  {
    name: "harsh",
    age: 22,
    address: "ahm",
  },
  {
    name: "shyam",
    age: 21,
    address: "mathura",
  },
  {
    name: "shiva",
    age: 20,
    address: "kailash",
  },
];

const printData = data.map((user) => {
  return user.name + user.age + user.address;
});

console.log(data);
console.log(printData);
