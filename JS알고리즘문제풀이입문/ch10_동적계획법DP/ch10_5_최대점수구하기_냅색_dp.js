const input = "5 20\n10 5\n25 12\n15 8\n6 3\n7 4";

const [NM, ...probs] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

  // sol 1) DP-냅색: 중복 회피 케이스: dp에 대한 for를 거꾸로 돌면 가능
function solution(M, probs) {
  const dp = Array.from({ length: M + 1 }, () => 0);

  for (let p of probs) {
    console.log("prob :", p);
    for (let i = M; i >= p[1]; i--) {
      dp[i] = Math.max(dp[i], dp[i - p[1]] + p[0]);
      console.log(dp);
    }
  }
  return Math.max(...dp);
}

console.log(solution(NM[1], probs));
