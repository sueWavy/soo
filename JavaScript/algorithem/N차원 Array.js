let array = [
  [101, 102, 103, 104],
  [201, 202, 203, 204],
  [301, 302, 303, 304],
  [401, 402, 403, 404],
];

for (let i = 0; i < array.length; i++) {
  // array.length == 3, i: 0~2
  for (let j = 0; j < array[i].length; j++) {
    // array[i].length == 3, j: 0~2
    console.log(array[i][j]);
  }
}

let fruits = [
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
];

for (let i = 0; i < fruits.length; i++) {
  console.log(`fruit : ${fruits[i][0]}, amount: ${fruits[i][1]}`);
}
