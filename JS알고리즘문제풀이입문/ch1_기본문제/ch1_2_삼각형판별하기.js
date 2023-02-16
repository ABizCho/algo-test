// const ft_max = (a, b, c) => {
//   let arr;
//   if (a > b) arr = [a, b, c];
//   else arr = [b, a, c];
//   if (c > arr[0]) arr = [c, a, b];
//   return arr;
// };
// function solution(a, b, c) {
//   let answer;
//   let arr;

//   arr = ft_max(a, b, c);
//   if (arr[0] > arr[1] + arr[2]) {
//     answer = "NO";
//   } else answer = "YES";

//   return answer;
// }

// console.log(solution(7, 2, 5));

/* solve2 */
function solution(a, b, c) {
  let sum = a + b + c;
  let max;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  sum -= max;

  if (sum < max) return "NO";
  else return "YES";
}

console.log(solution(7, 2, 5));
