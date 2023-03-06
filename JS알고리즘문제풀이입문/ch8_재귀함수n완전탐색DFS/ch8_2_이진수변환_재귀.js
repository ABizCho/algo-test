function solution(num) {
  let res = [];
  function DFS(n) {
    if (n === 0) return;
    DFS(parseInt(n / 2));
    res.push(n % 2);
  }
  DFS(num);
  console.log(res);
  return res.join("");
}

console.log(solution(11));
