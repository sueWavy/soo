/*
업무 성과를 보상해주기 위해, 가장 핸드폰을 많이 판매한 종업원에게 인센티브를 부여하고자 한다.
핸드폰 판매 수량을 입력 받아서, 가장 많이 판매한 종업원 번호를 반환해주는 함수를 구하시오.
입력은 배열 형태로 종업원 별 판매 수량 값이 주어지며, 가장 많이 판매한 번호를 반환한다.
가장 첫 번째 번호는 1번이다.
*/

// [3,7,9,6,1] = 3
// [2,7,1,4,3,0,5] = 2
// [7,5,0,1,2,12,6] = 6

function answer(employee) {
  let employee_id;
  let max = 0;

  for (let i = 0; i < employee.length; i++) {
    if (employee[i] > max) {
      max = employee[i];
      employee_id = i + 1;
    }
  }
  console.log(employee_id);
  return employee_id;
}

answer([3, 7, 9, 6, 1]);
