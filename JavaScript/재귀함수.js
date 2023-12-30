function factorial(num) {
  if (num == 0) return 1; // Exit 코드 (탈출) 중요.
  return num * factorial(num - 1);
}

console.log(factorial(4));
