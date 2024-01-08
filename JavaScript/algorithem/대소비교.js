// 두 정수를 입력 받아 문자열 형태의 대소비교 부등호를 반환하는 함수를 작성하시오.
// 첫 번째 수가 두 번째 수보다 크면 >
// 첫 번째 수가 두 번째 수보다 작으면 <
// 첫 번째 수가 두 번째 수가 같으면 =

// 3,5 = "<"
// 7,4 = ">"
// 2,2 = "="

function answer(a, b) {
  let txt = "";
  if (a > b) {
    txt = ">";
  } else if (a < b) {
    txt = "<";
  } else if (a == b) {
    txt = "=";
  }
  console.log(txt);
  return txt;
}

answer(3, 5);
answer(7, 4);
answer(2, 2);
