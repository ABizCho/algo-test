const fs = require("fs");
const num = fs.readFileSync("/dev/stdin").toString().trim() * 1;

let cnt_rec = 0;
let cnt_dp = 0;

const rec_fibo = (n) => {
  if (n <= 2) {
    cnt_rec++;
    return 1;
  }
  return rec_fibo(n - 1) + rec_fibo(n - 2);
};

const dp = new Array(num + 1);
const dp_fibo = (n) => {
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  let i = 3;
  while (i <= n) {
    {
      cnt_dp++;
      dp[i] = dp[i - 1] + dp[i - 2];
      i++;
    }
  }
  return dp[n];
};

rec_fibo(num);
dp_fibo(num);
console.log(cnt_rec, cnt_dp);
