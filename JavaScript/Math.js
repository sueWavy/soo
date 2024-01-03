// 최대값 Math.max() 최소값 Math.min() 절대값 Math.abs()
// 배열을 인수로 받아 최대 / 최소를 산출하려면 apply 함수 혹은 스프레드 문법 사용 필수

/* 1. MAX/MIN */
console.log(Math.max(1, -1));
console.log(Math.min(1, -1));

console.log(Math.max(1, 2, 3, 4, 6, -1, 20, -199));
console.log(Math.min(1, 2, 3, 4, 6, -1, 20, -199));

let nums = [1, -1, 5, 23, 18, -4];

// use apply
console.log(`Max: ${Math.max.apply(null, nums)}`);
console.log(`Min: ${Math.min.apply(null, nums)}`);

// use spread
console.log(`Max: ${Math.max(...nums)}`);
console.log(`Min: ${Math.min(...nums)}`);

/* 2. ABS */
console.log(Math.abs(1));
console.log(Math.abs(-1));
console.log(Math.abs(-Infinity));

console.log("----------------------------");

/* 속성 및 랜덤 */
console.log(Math.E);
console.log(Math.PI);

/* Random */
for (let i = 0; i < 3; i++) {
  console.log(Math.random());
}

for (let i = 0; i < 3; i++) {
  console.log(Number.parseInt(Math.random() * 10));
}

console.log("----------------------------");

// 제곱 / 제곱근 / 소수점 처리
/* 제곱 : Math.pow(x,y), 제곱근 : Math/sqrt(x) 
    소수점 이하의 반올림 정수 : Math.round(x)
    소수점 이하 올림 : Math.ceil(x), 소수점 이하 내림 : Math.floor(x)
*/

// 1. pow
console.log(Math.pow(2, 3));
console.log(2 ** 3);

// 2. sqrt
console.log(Math.sqrt(4));
console.log(Math.sqrt(2));

// 3. round, ceil, floor
console.log(Math.round(3.5));
console.log(Math.round(-2.3));
console.log(Math.round(-2.7));

console.log(Math.ceil(3.5));
console.log(Math.ceil(-2.3));
console.log(Math.ceil(-2.7));

console.log(Math.floor(3.7));
console.log(Math.floor(-2.3));
console.log(Math.floor(-2.7));
