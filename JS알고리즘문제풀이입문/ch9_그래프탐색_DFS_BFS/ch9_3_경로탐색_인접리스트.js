// 인접 리스트 사용 : O(N + E)
//		모든 정점을 한번씩 다 방문하고, 모든 간선을 한번씩 검사.

/*
	방향 그래프의 인접 리스트는
	인접 행렬과는 다르게, 2차원 배열을 만든 후, 

	a -> b 에 대해

	graph[a] = b 

	으로 넣어줌으로써, `grpah[a][b] = 1` 로 표시했던 인접행렬과 다르게,
	자신 노드에서 특정 노드로 연결된 경우의 노드 정보만을 기록, 유지한다 . NOT 0,1

	-> 따라서, a에 연결된 노드를 확인하기 위해선 G[a].length만큼만을 확인하면 된다.

	이 때, 인접행렬의 경우 G[a].length는 무조건 0,1이 모든 칸수에 채워져 N개로 고정돼있었기에 차이가 발생한다.

	-> 이로 인해, DFS 내 for문을 구성할 때, for의 조건부에 `i < G[a].length` 처럼 구성되므로, for문이 필요한 만큼만 최적으로 돌게 된다.
*/


const input = "5 9\n1 2\n1 3\n1 4\n2 1\n2 3\n2 5\n3 4\n4 2\n4 5";

const [NM, ...VE] = input
  .split("\n")
  .map((v) => v.split(" "))
  .map((v) => v.map((x) => Number(x)));

function solution(N, VE) {
  let ans = 0;
  const visited = Array.from({ length: N + 1 }, () => 0);
  const graph = Array.from({ length: N + 1 }, () => []);
  for (let [a, b] of VE) {
    graph[a].push(b);
  }

  function DFS(V) {
    if (V === N) {
      ans++;
    } else {
      for (let i = 0; i < graph[V].length; i++) {
        if (!visited[graph[V][i]]) {
          visited[graph[V][i]] = 1;
          DFS(graph[V][i]);
          visited[graph[V][i]] = 0;
        }
      }
    }
  }
  visited[1] = 1;
  DFS(1);
  return ans;
}

console.log(solution(NM[0], VE));
