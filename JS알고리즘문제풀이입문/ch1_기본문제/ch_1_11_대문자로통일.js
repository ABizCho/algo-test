input = "ItIsTimeToStudy";

// //sol1
// function solution(str) {
//   let answer = "";
//   for (let x of str) {
//     answer += x.toUpperCase();
//   }
//   return answer;
// }

// sol2
// function solution(str) {
//   let answer = "";
//   for (x of str) {
//     answer += x === x.toLowerCase() ? x.toUpperCase() : x;
//   }
//   return answer;
// }

//sol3
function solution(str) {
  let answer = "";
  for (x of str) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) {
      answer += String.fromCharCode(num - 32);
    } else answer += x;
  }
  return answer;
}

console.log(solution(input));
