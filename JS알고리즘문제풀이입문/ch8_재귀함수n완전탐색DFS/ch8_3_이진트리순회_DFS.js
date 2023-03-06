// 전,중,후 순회는 자신 노드(P)가 찍히는 순서로 결정.

// 전위순회, (P L R)
function solution() {
  let ans = "";

  const DFS = (v) => {
    if (v > 7) return;

    ans += ` ${v}`;
    DFS(v * 2);
    DFS(v * 2 + 1);
  };

  DFS(1);
  return ans;
}

console.log(solution());
// 중위순회, (L P R)
function solution() {
  let ans = "";

  const DFS = (n) => {
    if (n > 7) return;

    DFS(n * 2);
    ans += ` ${n}`;
    DFS(n * 2 + 1);
  };

  DFS(1);
  return ans;
}

console.log(solution());
// 후위순회, (L R P)
function solution() {
  let ans = "";

  const DFS = (n) => {
    if (n > 7) return;

    DFS(n * 2);
    DFS(n * 2 + 1);
    ans += ` ${n}`;
  };

  DFS(1);
  return ans;
}

console.log(solution());

//
