// From array with key/value pairs
let map = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// From object
let obj = {
  name: "John",
  age: 30,
};

let objMap = new Map(Object.entries(obj));

// Reverse — create object from Map
const obj2 = Object.fromEntries(objMap);
