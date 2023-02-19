const input = "g0en2T0s8eSoft";

// // sol1
// function solution(str) {
//   str = parseInt(str.replace(/[^0-9]/g, ""));

//   return str;
// }

// sol2
function solution(str) {
  let ans = 0;
  for (x of str) {
    if (!isNaN(x)) {
      ans *= 10;
      ans += Number(x);
    }
  }
  return ans;
}
console.log(solution(input));
