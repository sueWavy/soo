let fruits = ["apple", "orange", "banana", "melon"];

console.log("array = " + fruits);

console.log("sort : " + fruits.sort());
console.log("reverse : " + fruits.reverse());

let fruits2 = ["apple", "orange", "Orange", "Banana", "banana", "melon"];

let ascending_order = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x > y) return 1;
  else if (y > x) return -1;
  else return 0;
};

console.log("ascending : " + fruits2.sort(ascending_order));

let number = [3, 6, 1, 2, 4, 10, 200, 20];

console.log("숫자 정렬");
console.log(number.sort((a, b) => a - b));
console.log(number.sort((a, b) => b - a));
