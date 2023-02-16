//ref: https://snupi.tistory.com/200

const fs = require("fs");
[...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((v) => v * 1));
arr.pop();

const dp = [];
for (let i = 0; i < 21; i++) {
  dp[i] = [];
  for (let j = 0; j < 21; j++) {
    dp[i][j] = [];
    for (let k = 0; k < 21; k++) {
      dp[i][j][k] = 0;
    }
  }
}
const w = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) return 1;

  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

  if (dp[a][b][c]) return dp[a][b][c];

  if (a < b && b < c) {
    dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    return dp[a][b][c];
  }

  dp[a][b][c] =
    w(a - 1, b, c) +
    w(a - 1, b - 1, c) +
    w(a - 1, b, c - 1) -
    w(a - 1, b - 1, c - 1);
  return dp[a][b][c];
};

arr.map((line) =>
  console.log(
    `w(${line[0]}, ${line[1]}, ${line[2]}) = ${w(line[0], line[1], line[2])}`
  )
);
