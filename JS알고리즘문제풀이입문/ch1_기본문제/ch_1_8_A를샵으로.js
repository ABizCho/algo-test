/* sol1 */
// input = "APPLE";

// str = input.toString().trim().split("");

// function solution(str) {
//   let answer;
//   answer = str.map((v) => (v == "A" ? "#" : v));
//   console.log(answer.join(""));
// }

// solution(str);

/* SOL2 */
// function solution(str) {
//   let answer = "";
//   for (let x of str) {
//     if (x === "A") {
//       answer += "#";
//     } else {
//       answer += x;
//     }
//   }
//   return answer;
// }
// console.log(solution("APPLE"));

/* sol3 */

function solution(str) {
  let answer = str;

  answer = str.replace(/A/g, "#");
  return answer;
}
console.log(solution("BANANA"));
