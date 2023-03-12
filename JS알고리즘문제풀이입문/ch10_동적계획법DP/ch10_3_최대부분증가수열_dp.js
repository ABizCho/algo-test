const input = "8\n5 3 7 8 6 2 9 4";
let [N, arr] = input.split("\n").map((v) => v.split(" ").map((x) => Number(x)));

// LIS Longest Increasing SubSequence
// 최대부분증가수열 문제 :DP의 대표적 문제

// sol 1 ) dp : O(n^2)
function solution(arr) {
  const dp = Array.from({ length: arr.length }, () => 0);
  let ans = 0;

  for (let i = 1; i < arr.length + 1; i++) {
    let max = 0;

    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] > max) {
        max = dp[j];
      }
      console.log(dp);
    }
    dp[i] = max + 1;
    ans = Math.max(ans, dp[i]);
  }

  return ans;
}

console.log(solution(arr));
