// function solution(N) {
//   if (!N) return 0;
//   else if (N % 12) return parseInt(N / 12 + 1);
//   else return parseInt(N / 12);
// }

// console.log(solution(25));

/* sol2 */
function solution(N) {
  let answer;
  answer = Math.ceil(N / 12);
  return answer;
}

console.log(solution(25));
