const fs = require("fs");

const num = parseInt(fs.readFileSync("/dev/stdin").toString().trim());
let count = 0;
let answer = [];

const hanoi = (n, from, other, to) => {
  if (!n) return;

  hanoi(n - 1, from, to, other);
  answer.push([from, to]);
  count += 1;

  hanoi(n - 1, other, from, to);
};

hanoi(num, 1, 2, 3);
console.log(count);

console.log(answer.map((i) => i.join(" ")).join("\n"));