// 두 수 사이의 숫자들을 출력하는 함수를 작성하시오.
// 입력은 두 숫자 값이 주어지며, 입력된 숫자를 포함한 두 수 사이의 자연수를 배열로 반환한다.

// 3,7 = [3,4,5,6,7]
// 8,3 = [3,4,5,6,7,8]
// 12,10 = [10,11,12]

function answer(x, y) {
  let result = [];

  if (x > y) {
    for (let i = y; i <= x; i++) {
      result.push(i);
    }
  } else {
    for (let i = x; i <= y; i++) {
      result.push(i);
    }
  }
  console.log(result);
  return result;
}

answer(3, 9);
answer(10, 7);

function answer2(x, y) {
  let result = [];

  // x < y
  if (x > y) {
    let t = x;
    x = y;
    y = t;
  }
  for (let i = x; i <= y; i++) {
    result.push(i);
  }
  console.log(result);
  return result;
}

answer2(9, 2);
answer2(4, 6);

function answer3(x, y) {
  let result = [];

  // x < y
  if (x > y) {
    [x, y] = [y, x];
  }
  for (let i = x; i <= y; i++) {
    result.push(i);
  }
  console.log(result);
  return result;
}

answer3(4, 2);
answer3(10, 6);
