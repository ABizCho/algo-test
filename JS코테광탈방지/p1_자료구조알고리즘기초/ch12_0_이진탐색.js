/*
이진탐색
	: 정렬로 저장된 요소에 대해, 탐색 대상을 중앙값을 기준으로 절반씩 줄여나가며 탐색
	
	- 시간복잡도: 한번의 탐색 STEP마다 N이 절반씩 줄어나가므로, O(logN) 시간복잡도. 정렬된 이상 거의 가장 빠름
	
	- 구현방법 : 배열, BST(이진탐색트리) 로 구현 가능.

	
	특징 : 
		1. 반드시 사전에 정렬된 상태에서 탐색해야 함.
			=> 정렬이 안된 배열에 대해서는, 정렬을 먼저 수행한 후 탐색하므로 선형탐색보다 느려질 수 있음.
		2. 이에 따라, 탐색보다 삽입 삭제가 빈번한 경우 그마다 O(n)을 소요하기에 비효율

	
	BST 단점 :
		일반적으로 BST는 O(logN)의 시간복잡도를 가지지만,

		BST의 삽입 원리에 따라, BST에 요소가 정렬된 값의 순서로 삽입되는 최악의 경우
			=> 편향트리가 만들어진다.
				=> 이에 따라, 최악 N의 높이를 가지며
					=> 탐색에도 O(N)을 소요하게 된다.

		대안 : AVL트리, 레드블랙트리	
*/