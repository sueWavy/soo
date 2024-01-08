// 자연수를 입력 받아 해당 수만큼 별을 찍는 문자열 반환 함수를 작성하시오.

// 5 = *****
// 7 = *******

function answer(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += "*";
  }
  console.log(result);
  return result;
}

answer(7);
