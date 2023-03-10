// BFS : 상태 트리 탐색
const input = "8 3";
const [N, E] = input.split(" ").map((v) => Number(v));

// SOL 1 )	dist배열 기반 ans
function solution(S, E) {
  let ans = 0;
  let check = Array.from({ length: 10001 }, () => 0);
  let dist = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(S);
  check[S] = 1;
  dist[S] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === E) return dist[x] + 1;
      if (nx > 0 && nx <= 10000 && check[nx] === 0) {
        check[nx] = 1;
        queue.push(nx);
        dist[nx] = dist[x] + 1;
      }
    }
  }

  return ans;
}

// SOL 2 ) LEVEL 기반 ans

function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  let L = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
  return answer;
}

console.log(solution(5, 14));

console.log(solution(N, E));
