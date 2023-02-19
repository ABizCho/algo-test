const input = "found7, time: study; Yduts; emit, 7Dnuof";

// // sol 1 )
// function solution(str) {
//   str = str
//     .toLowerCase()
//     .split("")
//     .filter((c) => c >= "a" && c <= "z");
//   let len = str.length;
//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     if (str[i] !== str[len - i - 1]) return "No";
//   }
//   return "Yes";
// }

// sol 2 ) replace 정규식 사용 전처리
function solution(str) {
  let ans = "Yes";
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  if (str.split("").reverse().join("") !== str) return "NO";
  return "YES";
}
console.log(solution(input));
