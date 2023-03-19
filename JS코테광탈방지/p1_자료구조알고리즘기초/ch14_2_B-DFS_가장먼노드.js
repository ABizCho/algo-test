// // sol 1 ) my solve
// function solution(n, edge) {
//   let ans = 0;

//   //인접 리스트 방식
//   const graph = Array.from({ length: n + 1 }, () => []);

//   for (const [a, b] of edge) {
//     graph[a].push(b);
//     graph[b].push(a);
//   }

//   const queue = [1];
//   const visited = Array.from({ length: n + 1 }, () => 0);
//   visited[1] = 1;

//   let i = 1;

//   while (queue.length) {
//     console.log("L: ", i);
//     console.log(queue);

//     ans = queue.length;
//     for (let j = 0; j < ans; j++) {
//       for (const x of graph[queue.shift()]) {
//         if (visited[x] === 0) {
//           visited[x] = 1;
//           queue.push(x);
//         }
//       }
//     }

//     i++;
//   }
//   return ans;
// }

// // sol 2 )
// // 핵심 키워드는 "노드", "간선", "최단경로"
// // 최단경로가 제일 큰 경우의 집합을 구하는 문제

// function solution(n, edge) {
//   // 무방향 그래프를 인접리스트로 표현
//   const graph = Array.from(Array(n + 1), () => []);
//   for (const [a, b] of edge) {
//     graph[a].push(b);
//     graph[b].push(a);
//   }

//   const Level = Array(n + 1).fill(0);
//   Level[1] = 1;

//   // BFS : 너비우선탐색: 최단경로 탐색용 by level search
//   const queue = [1];
//   while (queue.length > 0) {
//     const src = queue.shift(); // shift는 O(N)이지만, 요소가 적을 경우 JS엔진에서 최적화 수행
//     for (const dest of graph[src]) {
//       if (Level[dest] === 0) {
//         queue.push(dest);
//         Level[dest] = Level[src] + 1;
//       }
//     }
//   }
//   console.log(Level);

//   const max = Math.max(...Level);
//   return Level.filter((item) => item === max).length;
// }

// sol 3 ) queue를 배열이 아닌 직접 클래스 구현으로 풀이

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const rmVal = this.queue[this.front];
    delete this.queue[this.front++];
    return rmVal;
  }

  isEmpty() {
    return this.rear === this.front;
  }
}
function solution(n, edge) {
  // 무방향 그래프를 인접리스트로 표현
  const graph = Array.from(Array(n + 1), () => []);
  for (const [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const Level = Array(n + 1).fill(0);
  Level[1] = 1; // 0,N 여부로 visited 검사 수행 && N값을 통해 Level 판별

  // BFS : 너비우선탐색: 최단경로 탐색용 by level search
  const queue = new Queue();
  queue.enqueue(1);

  while (!queue.isEmpty()) {
    const currNode = queue.dequeue(); // shift는 O(N)이지만, 요소가 적을 경우 JS엔진에서 최적화 수행
    for (const nearNode of graph[currNode]) {
      if (Level[nearNode] === 0) {
        queue.enqueue(nearNode); // 큐 대기열에 인접노드 추가
        Level[nearNode] = Level[currNode] + 1; // 현재 노드의 레벨에 1을 더한 값이 인접노드의 레벨, 이를 Level의 인접노드 값 인덱스에 추가
      }
    }
  }
  console.log(Level);

  const max = Math.max(...Level);
  return Level.filter((item) => item === max).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3], 
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
