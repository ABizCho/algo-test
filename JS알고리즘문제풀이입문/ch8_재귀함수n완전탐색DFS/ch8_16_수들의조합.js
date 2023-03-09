const input = "5 3\n2 4 5 8 12\n6";
const [NK, nums, M] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// SOL 1) DFS : O(N^k)의 시간복잡도
function solution(k, nums, m) {
  const isMulti = (n, m) => {
    if (!(n % m)) return 1;
    return 0;
  };

  let ans = 0;

  function DFS(L, sp, sum) {
    if (L === k) {
      console.log(L, tmp, sp, sum);
      if (isMulti(sum, m)) ans++;
    } else {
      for (let i = sp; i < nums.length; i++) {
        DFS(L + 1, i + 1, sum + nums[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return ans;
}
console.log(solution(NK[1], nums, M));
