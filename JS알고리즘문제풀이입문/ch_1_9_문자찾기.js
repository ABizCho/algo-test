input = "COMPUTERPROGRAMMING\nR";

[str, target] = input.split("\n");

//sol1
// function solution(target, str) {
//   let i = 0;
//   let cnt = 0;

//   while (str[i]) {
//     str[i] === target ? cnt++ : cnt;
//     i++;
//   }
//   return cnt;
// }

//sol2
function solution(target, str) {
  let answer = str.split(target).length - 1;
  return answer;
}

console.log(solution(target, str));
