/* 
n=17일때 까지 피보나치 수를 써보면 다음과 같다.

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597

n이 주어졌을 때, n번째 피보나치 수를 구하는 프로그램을 작성하시오.

*/
const fs = require("fs");
const n = fs.readFileSync("/dev/stdin");

let fibo = (n) => {
  if (n == 0) return 0;
  else if (n <= 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(n));
