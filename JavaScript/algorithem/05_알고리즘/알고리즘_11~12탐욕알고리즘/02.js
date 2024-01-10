function dfs(numbers, target, sums, index, total) {
  if (index === numbers.length) {
    return target === total ? 1 : 0;
  }
  if (
    (target > total && target > total + sums[index]) ||
    (target < total && target < total - sums[index])
  )
    return 0;

  let count = 0;
  count += dfs(numbers, target, sums, index + 1, total + numbers[index]);
  count += dfs(numbers, target, sums, index + 1, total - numbers[index]);
  return count;
}

function solution(numbers, target) {
  let sums = new Array(numbers.length);
  let sum = 0;

  for (let i = numbers.length - 1; i >= 0; i--) {
    sum += numbers[i];
    sums[i] = sum;
  }

  return dfs(numbers, target, sums, 0, 0);
}
