// Stack(): 생성자 함수
function Stack(array) {
  this.array = array ? array : [];
}

// getBuffer(): 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty(): 객체 내 데이터 O/X
Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
};

let stack = new Stack([1, 2, 3]);

console.log(stack);

let data = stack.getBuffer();
console.log(data);
console.log(data === stack.array);

console.log(stack.isEmpty());
console.log(Object.getOwnPropertyDescriptors(Stack.prototype));
