input = "KoreaTimeGood";

//SOL1
// function solution(str) {
//   let i = 0;
//   let cnt = 0;
//   while (str[i]) {
//     if (str[i] >= "A" && str[i] <= "Z") cnt++;
//     i++;
//   }
//   return cnt;
// }

// //SOL2
// function solution(str) {
//   let cnt = 0;
//   for (let c of str) {
//     c === c.toUpperCase() ? cnt++ : cnt;
//   }
//   return cnt;
// }

//SOL3
function solution(str) {
  let i = 0;
  let cnt = 0;
  while (str[i]) {
    if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) cnt++;
    i++;
  }
  return cnt;
}
console.log(solution(input));
