const input = "259 5\n81\n58\n42\n33\n61";
let [CN, ...dogs] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

dogs = dogs.map((v) => Number(v));

// sol 1 ) 부분집합 - BT 재귀적 DFS : O(2^N);
function solution(C, dogs) {
  let max = Number.MIN_SAFE_INTEGER;

  function DFS(L, sum) {
    if (sum > C) return;
    if (L === dogs.length) {
      console.log("DFS: ", L, sum, max);
      max = Math.max(max, sum);
    } else {
      DFS(L + 1, sum + dogs[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return max;
}

console.log(solution(CN[0], dogs));
