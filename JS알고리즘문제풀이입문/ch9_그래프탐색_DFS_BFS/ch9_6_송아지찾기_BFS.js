// BFS : 상태 트리 탐색
const input = "8 3";
const [N, E] = input.split(" ").map((v) => Number(v));

// // SOL 1 )	dist배열 기반 ans
function solution(s, e) {
  const queue = [s];
  const visited = Array.from({ length: 10001 }, () => 0);
  const dist = Array.from({ length: 10001 }, () => 0);
  visited[s] = 1;
  dist[s] = 0;
  while (queue.length) {
    let curX = queue.shift();

    for (let nx of [curX - 1, curX + 1, curX + 5]) {
      if (nx === e) {
        return dist[curX] + 1;
      }
      if (!visited[nx] && nx < 10001 && nx > 0) {
        visited[nx] = 1;
        queue.push(nx);
        dist[nx] = dist[curX] + 1;
      }
    }
  }
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

console.log(solution(N, E));
