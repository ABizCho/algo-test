// 동적 계획법 : Dynamic programming
/*
	1. 메모이제이션 : 저장 활용
	2. 탑다운 : 재귀, 메모이제이션
	3. 바텀업 : 재귀X, ex) 피보나치 수열, 0-1배낭문제
	4. 최장공통 부분수열 (LCS)
	5. 최장증가 부분수열 (LIS)
*/

const input = "33 19";
const [n, r] = input.split(" ").map((v) => Number(v));

// sol 1 ) 재귀 사용: 큰 수에 매우 비효율적 : O(2^n)
function solution(n, r) {
  let ans;
  function DFS(n, r) {
    if (r === 0 || n === r) {
      return 1;
    } else {
      return DFS(n - 1, r - 1) + DFS(n - 1, r);
    }
  }
  ans = DFS(n, r);
  return ans;
}

// sol 2 ) 메모이제이션 사용 : O(n^2)
function solution(n, r) {
  let ans;
  let dp = Array.from(Array(35), () => Array(35).fill(0));
  function DFS(n, r) {
    if (dp[n][r]) return dp[n][r];
    if (r === 0 || n === r) {
      return 1;
    } else {
      return (dp[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }
  ans = DFS(n, r);
  return ans;
}

console.log(solution(n, r));
