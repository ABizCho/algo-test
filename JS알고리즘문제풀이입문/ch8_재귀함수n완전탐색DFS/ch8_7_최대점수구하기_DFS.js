const input = "5 20\n10 5\n25 12\n15 8\n6 3\n7 4";

const [NM, ...probs] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// sol 1 ) 부분집합 -> BT DFS = O(2^N);
function solution(M, probs) {
  let max = Number.MIN_SAFE_INTEGER;
  function DFS(L, tSum, sum) {
    if (tSum > M) return;
    if (L === probs.length) max = Math.max(max, sum);
    else {
      DFS(L + 1, tSum + probs[L][1], sum + probs[L][0]);

      DFS(L + 1, tSum, sum);
    }
  }
  DFS(0, 0, 0);
  return max;
}

console.log(solution(NM[1], probs));
