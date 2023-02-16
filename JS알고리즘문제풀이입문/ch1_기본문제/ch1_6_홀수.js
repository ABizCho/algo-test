/* sol1 : Math min 함수 사용 */
// const ft_is_odd = (n) => {
//   return n % 2 ? 1 : 0;
// };

// function solution(...argv) {
//   let sum = 0;
//   let min = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < argv.length; i++) {
//     if (ft_is_odd(argv[i])) {
//       sum += argv[i];
//       if (argv[i] < min) min = argv[i];
//     }
//   }
//   return [sum, min];
// }

// const [sum, min] = solution(1, 2, 3, 4, 5);
// console.log(sum);
// console.log(min);

/* sol2 */
function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    if (x % 2) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

ans = solution([1, 2, 3, 4, 5, 6, 7]);
ans.map((v) => console.log(v));
