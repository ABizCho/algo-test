//중복순열
//	재귀 vs 다중 for문

const input = "3 2";
const [N, M] = input.split(" ").map((v) => Number(v));

// sol 1) N-Tree DFS 재귀 풀이
function solution(n, m) {
  let ans = 0;
  const arr = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      console.log(arr.join(" "));
      ans++;
    } else {
      for (let x = 1; x <= n; x++) {
        arr[L] = x;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return ans;
}

console.log(solution(N, M));

// 위 문제 다중for문 이용해 풀려하면, m이 추가됨에 따라 for를 하나 추가시켜야 함 => 코드 자체를 변경해야 함. => 비효율, but 재귀는 레벨에 따라 동적으로 해결
