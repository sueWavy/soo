/* 괄호 짝 찾기 */

/* user code */
function answer(str) {
  let result = [];

  // 코드 구현 시작 영역

  // …

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  "(a+b)",

  // TC: 2
  "(a*(b+c)+d)",

  // TC: 3
  "(a*(b+c)+d+(e)",

  // TC: 4
  "(a*(b+c)+d)+e)",

  // TC: 5
  "(a*(b+c)+d)+(e*(f+g))",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
