// use for loop
let num = [1, 2, 3];
for (let i = 0; i < num.length; i++) {
  console.log("for : ", num[i]);
}

// use forEach
num.forEach((i) => {
  console.log("forEach : ", i);
});

// use for loop
let num2 = [1, 2, 3, 4, 5];
let use_for_loop = [];
for (let i = 0; i < num2.length; i++) {
  use_for_loop.push(num2[i] * 2);
}
console.log("for : ", use_for_loop);

// use map
let use_map = num2.map((it) => it * 2);
console.log("map : ", use_map);

// find()
let users = [
  {
    name: "bob",
    age: 17,
    job: false,
  },
  {
    name: "alice",
    age: 20,
    job: false,
  },
  {
    name: "john",
    age: 27,
    job: true,
  },
];

let find_job = users.find((it) => {
  return it.job == false;
});

console.log("find job : ", find_job);

let find_age = users.find((it) => {
  return it.age > 19;
});

console.log("find age : ", find_age);

// filter()
let filter_job = users.filter((it) => {
  return it.job == false;
});

console.log("filter job : ", filter_job);

let filter_age = users.filter((it) => {
  return it.age > 19;
});

console.log("filter age : ", filter_age);

// reduce()
let num3 = [1, 2, 3, 4, 5];
let call_count = 0;

console.log("result\tvalue\tindex");
let sum = num3.reduce(function (acc, item, index, array) {
  console.log(acc, "\t\t", item, "\t\t", index);
  call_count++;
  return acc + item;
}, 0);

console.log("call : ", call_count);
console.log("sum : ", sum);
