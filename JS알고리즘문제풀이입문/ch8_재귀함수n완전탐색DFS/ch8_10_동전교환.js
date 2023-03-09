const input = "3\n1 2 3 4\n15";
const [N, coins, M] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// sol 1) N-Tree DFS / 내림차순 정렬 후, Level당 N번의 DFS 가지를 뻗어나가는 DFS. 15 만나면 종료. => 가장 적은 동전 수이므로 동전 단위가 큰 경우부터 뻗어나가도록 내림차순 정렬해야 효율적. 오름차순으로 해결할 경우, Math.min()을 이용해 ans에 sum을 비교-갱신하며 DFS를 모두 돌아야함 => 이경우, 최선,최악 O(N^N)

function solution(coins, m) {
  coins.sort((a, b) => b - a);
  let ans = 0;

  function DFS(L, sum) {
    console.log(L, sum);

    if (sum > m) {
      return;
    }
    if (sum === m) {
      ans = L;

      return "end";
    } else {
      for (let i = 0; i < coins.length; i++) {
        if (DFS(L + 1, sum + coins[i]) === "end") return "end";
      }
    }
  }
  DFS(0, 0);
  return ans;
}

function solution(coins, m) {
  let ans = Number.MAX_SAFE_INTEGER;

  function DFS(L, sum) {
    if (sum > m) {
      return;
    }
    if (L >= ans) return; // 이미 직전 탐색한 최소 Level을 넘은 경우 해당가지 종료
    if (sum === m) {
      console.log(L, sum);
      ans = Math.min(ans, L);
    } else {
      for (let i = 0; i < coins.length; i++) {
        DFS(L + 1, sum + coins[i]);
      }
    }
  }
  DFS(0, 0);
  return ans;
}

console.log(solution(coins, ...M));
