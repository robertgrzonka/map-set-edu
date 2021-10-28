const set = new Set();

const john = { name: "John" };
const pete = { name: "Pete" };
const mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);

console.log(set.size); // 3

// No doubled keys
set.add(john);
console.log(set.size); // 3

console.log(set.delete(john));
console.log(set.has(john)); // false
