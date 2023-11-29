/**
 * Scope - 변수 유효 범위
 * 내부에서 외부로는 접근 가능
 * 외부에서 내부로는 접근 불가능
 *
 * 처음부터 있던 var -> 함수 단위 유효 범위
 * ES2015+ -> let, const -> 블럭 단위
 */

var varVal = "함수-단위";
const constVal = "블럭-단위";

function test() {
  const num = 123;
  return "test";
}

console.log(num); // 함수 내부 변수는 외부에서 꺼내쓸 수 없다.

var globalVal = "전역 변수";
// 파일 최상단에 어디서나 접근해서 사용가능한 변수

function outerFunc() {
  console.log(globalVal);

  function innerFunc() {
    var innerVal = "함수 내부 지역 변수";
    console.log(index);
  }
  innerFunc();
}

outerFunc();

console.log(globalVal);
console.log(innerVal);

for (var index = 0; index < [0, 1, 2].length; index++) {}

if (true) {
  let a = "a";
  var b = "b";
}

console.log(a); // a is not defined
console.log(b); // b

// 유효 범위를 생각하며 코드를 작성하자 -> 전역 변수를 많이 만드는 것은 위험하다.
