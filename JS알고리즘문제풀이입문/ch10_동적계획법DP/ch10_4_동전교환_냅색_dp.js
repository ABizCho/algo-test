const input = "3\n1 2 5\n15";

const [N, coins, M] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// 거스름 교환 문제
//	동전교환 - 냅색 알고리즘 문제
// 종류도 많고, 거스름돈도 큰 경우 DFS로 해결할 수 없다
//		=> 다이나믹(냅색) 시작.

function solution(coins, M) {
  // dp를 큰숫자로 초기화
  // dp 각 요소 저장값의 의미: M을 거슬러줄 때 사용된 최소 동전 개수 => 따라서 마지막엔 dp[M]을 반환하면 정답
  const dp = Array.from({ length: M + 1 }, () => 1000);
  dp[0] = 0;

  for (let c of coins) {
    console.log("coin: ", c);
    for (let i = c; i <= M; i++) {
      dp[i] = Math.min(dp[i], dp[i - c] + 1);
      console.log(dp);
    }
  }
  return dp[M];
}

console.log(solution(coins, Number(M)));
