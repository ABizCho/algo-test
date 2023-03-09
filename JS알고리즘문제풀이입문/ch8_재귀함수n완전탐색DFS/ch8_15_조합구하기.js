const input = "4 2";
const [N, M] = input.split(" ").map((v) => Number(v));

function solution(n, m) {
  let ans = 0;
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, sp) {
    if (L === m) {
      ans++;
      console.log(tmp.join(" "));
    } else {
      for (let i = sp; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return ans;
}

console.log(solution(N, M));
