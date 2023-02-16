// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin');

const prac_str1 = "5 7\n4 5 1 3 2";

let str = prac_str1.trim().split("\n");
console.log(str); // ['5 7', '4 5 1 3 2'];
// => split은 sep을 기준으로 나눈 배열 반환

str = prac_str1
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((ch) => ch));

const [[N, K], arr] = str;
console.log(str);
