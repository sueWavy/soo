/* 백신 접종 */

/* user code */
function Element(key, value) {
  this.key = key;
  this.value = value;
}

function HashTable(size) {
  this.size = size;
  this.table = new Array(this.size);
  this.length = 0;
}

HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.size;
};

HashTable.prototype.put = function (key) {
  let index = this.hashCode(key);
  // 코드 구현 시작 영역

  // …

  // 코드 구현 종료 영역
};

HashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  // 코드 구현 시작 영역

  // …

  // 코드 구현 종료 영역
};

/* user code */
function answer(name) {
  let result = [];

  let ht = new HashTable(name.length);
  // 코드 구현 시작 영역

  // 1. for loop: push

  // 2. for loop: get

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  ["Mana", "Naomi", "Lelia", "Morris", "Madonna"],

  // TC: 2
  ["Oliver", "Mabel", "Nero", "Rei", "Kara", "Jordan", "Nami"],

  // TC: 3
  [
    "Ruby",
    "Robin",
    "Jordan",
    "Kori",
    "Rei",
    "Madonna",
    "Justin",
    "Maya",
    "Lakia",
    "Kali",
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
