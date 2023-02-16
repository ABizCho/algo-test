/* sol1 : 재귀 사용 */
// function solution(...argv) {
//   if (argv.length == 1) return argv[0];
//   if (argv[0] > argv[1]) argv.splice(0, 1);
//   else argv.splice(1, 1);
//   return solution(...argv);
// }

// console.log(solution(5, 2, 3, 7, 1));

/* sol2 반복사용 */
function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  answer = min;
  return answer;
}
console.log(solution([2, 0, 3]));
