// 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
// 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

// 입력으로 키가 주어지면
// 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

const a = 150;
const b = 120;

function key(value) {
  if (value >= 150) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

key(a);
key(b);

// 정답
const height = prompt("키를 입력하세요.");

if (height >= 150) {
  console.log("YES");
} else {
  console.log("NO");
}
