let map = new Map();

map.set("name", "john");
map.set(123, 456);
map.set(true, "bool_type");
console.log(map);

console.log(map.get(123));
console.log(map.get("name"));
console.log(map.get(true));
console.log(map.size);

map.delete(123);
console.log(map);
map.clear();
console.log(map);

map.set(123, 789).set(false, "bool_type").set("fruit", "banana");
console.log(map);

// -----------------------------------------------------------------

let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);

for (let item of recipe_juice.keys()) console.log("item : ", item);

for (let amount of recipe_juice.values()) console.log("amount : ", amount);

for (let entity of recipe_juice) console.log("entity : ", entity);

console.log("recipe_juice : ", recipe_juice);
console.log("recipe_juice.entries : ", recipe_juice.entries());
