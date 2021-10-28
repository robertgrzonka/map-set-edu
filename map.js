let map = new Map();

map.set("1", "string");
map.set(1, "number");
map.set(NaN, "NaN");

console.log(map.get("1")); // string
console.log(map.get(1)); // number
console.log(map.get(NaN)); // NaN
console.log(map.size); // 3

console.log(map); // Map { '1' => 'string', 1 => 'number', NaN => 'NaN }

map.clear();
console.log(map); // Map { }
