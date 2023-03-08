function solution(n) {
  let ans = [];
  let check = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    if (v === n + 1) {
      let tmp = [];
      for (let i = 1; i <= n; i++) {
        if (check[i]) tmp.push(i);
      }
      if (tmp.length >= 1) {
        ans.push(tmp.join(" "));
      }
    } else {
      check[v] = 1;
      DFS(v + 1);

      check[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return ans.join("\n");
}

console.log(solution(4));
