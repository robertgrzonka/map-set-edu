let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}

// iterate over values

for (let vegetable of recipeMap.values()) {
  console.log(vegetable);
}

// iterate over [key, value] entries

for (let vegetable of recipeMap.entries()) {
  console.log(vegetable);
}

// built-in forEach

recipeMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
