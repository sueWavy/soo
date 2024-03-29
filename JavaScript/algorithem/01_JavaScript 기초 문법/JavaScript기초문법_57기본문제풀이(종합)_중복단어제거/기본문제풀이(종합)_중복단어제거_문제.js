/* 5. 중복 단어 제거 */

/* user code */
function answer(arr) {
  let new_arr = [];

  // 코드 구현 시작 영역
  new_arr = Array.from(new Set(arr));
  // 코드 구현 종료 영역

  return new_arr;
}

/* main code */
let input = [
  // TC: 1
  ["john", "alice", "alice"],
  // TC: 2
  ["Hello", "hello", "HELLO", "hello"],
  // TC: 3
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
