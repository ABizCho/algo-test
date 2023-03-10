/* 
	그래프와 트리 둘 다, DFS를 수행할 수 있다.
	
	그래프와 트리의 차이점은,
	그래프는 "순환"(CYCLE)할 수 있다는 것이 주요하다.

	이런 차인에 기인해, 
	그래프의 DFS는 "순환 탐지(CYCLE DETECTION)"을 할 수 있는
	추가적 기능을 구현해야 한다.

	<방향 그래프 순환 탐지>
	DFS에서는 Back Edge가 있으면, 순환이 있다고 본다.
	
	"Back Edge"는 자기 자신을 가리키거나(self-loop),
	자신의 이전 정점(조상 정점)을 가리키는 Edge를 의미한다.

	Back Edge 탐지 구현 알고리즘은 아래와 같다.

	1. 재귀 DFS에, 
		"각 정점의 index", 
		"방문 여부 배열(visited)"
		"재귀 Stack"

		을 전달한다.
	
	2. 현재 정점을 visited = true로 하고 정점을 재귀 stack에 넣는다.

	3. 인접한 모든 미방문 상태의 정점을 찾고, 재귀적으로 함수를 수행한다. (재귀함수가 true 반환시 return)

	4. 현재 방문 정점이 재귀 stack에 있다면 순환 발생. true 반환

	5. 이 전체 구현을 위한 wrapper 클래스 구현하여, 순환 발생 시 true 리턴

*/

// 인접행렬 DFS = 노드의 개수가 적을 때

// t1. DFS 진행 시, 현재 정점을 visited 배열에 check하여, 다음 방문 노드가 인접행렬로 인지하지 못하게 처리해줘야 함.





const input = "5 9\n1 2\n1 3\n1 4\n2 1\n2 3\n2 5\n3 4\n4 2\n4 5";

const [NM, ...VE] = input
  .split("\n")
  .map((v) => v.split(" "))
  .map((v) => v.map((x) => Number(x)));


// sol ) 인접행렬 방향 그래프의 DFS: O(n^2)
//	DFS 하나당 N번의 LOOP, 근데 N개의 정점(DFS)를 모두 방문하므로 O(N^2)

//	이는 EDGE, 즉 한 노드에 연결된 노드의 갯수가 몇 개 없는 상황에서도, 10000개의 노드가 주어졌다면 10000번을 모두 돌아야 하는 비효율이 존재.

// 즉, 정점의 개수가 많은 경우 -> 인접리스트 사용
// 정점의 개수 적은 경우 -> 인접 행렬 사용
function solution(N, VE) {
  const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
  for (let [i, j] of VE) {
    graph[i][j] = 1;
  }

  let ans = 0;
  const visited = Array.from({ length: N + 1 }, () => 0);
  const path = [];
  function DFS(V) {
    if (V === N) {
      path.push(V);
      console.log(path);
      path.pop();

      ans++;
    } else {
      for (let i = 1; i <= N; i++) {
        if (!visited[i] && graph[V][i]) {
          path.push(V);

          visited[i] = 1;
          DFS(i);
          visited[i] = 0;

          path.pop();
        }
      }
    }
  }
  visited[1] = 1; // 시작노드는 무조건 방문처리=>사이클방지
  DFS(1);
  return ans;
}

console.log(solution(NM[0], VE));
