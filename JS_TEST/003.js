//  문제3 : 변수의 타입

// 다음 출력 값으로 올바른 것은?

var arr = [100, 200, 300];
console.log(typeof arr);

// 1)  undefined
// 2)  string
// 3)  number
// 4)  object

// 내 풀이 : 3) number - 배열이니 Array 라고 생각했지만 보기사항에 없었기에 요소가 number 타입들이 모여있어 number 라고 생각.

// 정답 : 4) object
// 정답은 '4번'입니다. undefined, string, number 는 모두 기본 자료형(primitive type) 입니다.

// 이해안되서 찾아본 해설 :
// "object"가 됩니다. 이 결과가 "object"로 나오는 이유는 JavaScript에서 배열 또한 객체의 일종으로 취급하기 때문입니다.
// 배열은 객체와 달리 순서가 있는 데이터 컬렉션이며, 각 요소에 인덱스를 사용하여 접근할 수 있습니다. 그러나 JavaScript에서 배열은 내부적으로 객체로 구현되어 있으며, 따라서 typeof 연산자를 사용할 때 "object"가 반환됩니다.
// 정리하면, JavaScript에서 배열은 객체의 일종이며, typeof 연산자를 사용하여 데이터 유형을 확인하면 배열이라는 특정 데이터 유형이 아닌 "object"가 반환됩니다. 이것은 JavaScript의 설계상 특성이며, 배열과 객체는 다르게 다루어집니다.
