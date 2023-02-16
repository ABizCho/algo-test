function solution(N) {
  let sum = 0;
  while (N) {
    sum += N--;
  }
  return sum;
}

console.log(solution(3));
