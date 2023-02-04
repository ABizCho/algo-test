const fs = require("fs");

// let input	= fs.readFileSync('/dev/stdin').toString().trim().split("\n").map((str) => str.split(" ").map((v) => +v))

const input = "1\n4 3 2 1";

let inputs = input.trim().split("\n");
//   .map((v) => v.split(" ").map((v) => +v));

// let n = input
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.split(" ").map((v) => +v));

// const [[N, K], arr] = inputs;

const [N, ...arr] = input.trim().split("\n");

let i = 0;
while (i < N) {
  console.log(arr[i]);
  i++;
}
