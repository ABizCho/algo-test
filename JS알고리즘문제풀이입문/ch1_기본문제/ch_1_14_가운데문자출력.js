// // sol1
// function solution(str) {
//   let len = str.length;
//   return len % 2
//     ? str[parseInt(len / 2)]
//     : [str[parseInt(len / 2) - 1], str[parseInt(len / 2)]].join("");
// }

// sol2
function solution(str) {
  let answer;
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 == 1) {
    answer = str.substring(mid, mid + 1);
  } else answer = str.substring(mid - 1, mid + 1);
  return answer;
}

input = "studys";
console.log(solution(input));
