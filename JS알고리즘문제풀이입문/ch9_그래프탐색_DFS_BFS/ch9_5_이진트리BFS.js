// 이진트리(BT)의 BFS

/*
	이진트리의 DFS는 보통 재귀적으로 구현할 수 있으며, 대표적으로 그렇게 사용해왔다.
	하지만, 이진트리의 BFS의 경우, 재귀적으로 구현되지 않는다.

	BFS는 큐(Queue) 자료구조를 이용해 구현된다.
	먼저 탐색할 노드를 큐에 추가하고, 이 노드와 연결된 노드를 큐에 순차적으로 추가해 탐색을 수행하는 방식으로 동작한다.

	따라서, BFS는 큐를 이용한 "반복적인"알고리즘이며, 재귀적 방법으론 구현하기 어렵다. 된다 하더라도 일반적인 BFS보다 복잡하며 비효율적이다.
*/

/*
	이진트리 BFS 시간복잡도는 O(N): 
		이진트리의 노드 수가 N일 때, 모든노드(N) 를 방문하면서 처리함.
	
	
	이진트리의 BFS는 레벨(순)으로 노드를 방문하기 때문에, 
		1. 최단거리 탐색에 유용함.
		2. 이진트리의 모든 노드를 탐색하고자 할 때 유용함.

	반면, DFS는 루트 노드에서 시작해, 왼쪽 자식노드, 오른쪽 자식노드 순으로 순환하며 탐색 수행
	따라서 구현이 간단하고, 스택을 이용하므로 메모리 사용량이 적음. 따라서,
		1. 모든 경로 탐색 문제, 미로 탐색(모든경로) 문제

*/

/*

BT의 BFS를 상태 트리 라고 부른다.

	최단거리 탐색 = BFS = `상태트리` 를 `LEVEL탐색` 한다.

	BFS는 가장 가까운 LEVEL부터 모두 탐색하고 다음 LEVEL로 들어감
		=> 가장 가까운 LEVEL 내 모든 노드 중, TARGET이 있는 지 확인할 수 있으므로 최단거리 탐색에 적합

*/
const tree = [[2, 3], [4, 5], [6, 7], [], [], [], []];

function solution(tree) {
  const queue = [];
  function BFS(tree) {
    queue.push(1);

    while (queue.length) {
      for (let x of tree[queue[0] - 1]) {
        queue.push(x);
      }
      console.log(queue.shift());
    }
  }
  BFS(tree);
}

console.log(solution(tree));
