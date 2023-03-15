// 우선순위 큐는, 우선순위가 가장 높은 자료가 먼저 나가는 개념

// 우선순위 큐는 개념이다. 실제로는 보통 힙을 사용해 구현함
//		물론 배열도 요소의, 삽입 삭제 시마다 우선순위를 정렬하면 우선순위 큐
//		하지만, 이는 효율이 떨어지고 힙을 사용하는 것이 효율적임

/* 
	일반적으로 힙은 배열로 구현한다.

	배열의 인덱스에 기반하여 이진트리를 만들 수 있는 속성에 기반해,
	heap을 구현할 수 있고, 일반적으로 그렇게 한다.
*/
/*
	힙의 특징
		1. 루트에 우선순위가 높은 요소를 배치하고, 
		루트가 먼저 나가는 특징을 가진다.
		
		2. 루트가 가장 큰 값이 되는 최대 힙(Max Heap)
		
		3. 루트가 가장 작은 값이 되는 최소 힙(Min Heap) 이 있다.
		
		4. 자바스크립트에선 힙을 직접 구현해 사용해야 함.



		<1> 힙 요소 추가 로직
		요소가 추가될 때는, 
		
			1. 일단 트리의 가장 마지막 정점에 위치
			2. 추가 후, 부모 정점보다 우선순위가 높다면 부모와 swap
			3. 이 과정을 반복하면, 결국 가장 우선순위 높은 정점이 루트가 됨
			
			
			+ 힙의 요소 추가 시, 요소는 항상 이진트리의 마지막에 추가되기 때문에, 힙은 항상 완전이진트리이먀, 완전이진트리의 높이는 logN으로 힙의 요소 추가 알고리즘은 최악의 경우에도 O(logN) 이라는 작은 시간복잡도를 가진다.

		<2> 힙 요소 제거 로직
			
			요소 제거는 루트만 가능하다
			=> 따라서, 
			
			1. 우선 제거된 루트 자리를 가장 마지막 정점(Tar)이 대체하고
			2. 루트 정점의 두 자식 중 더 우선순위가 높은 정점과 바꾸기를 반복
			3. 두 자식정점이 Tar보다 우선순위가 낮을 경우 swap을 종료한다.

			+ 마찬가지로 완전이진트리의 높이는 logN이므로, 힙의 요소 제거 알고리즘 또한 최악에도 O(logN)의 시간복잡도를 갖는다.

		*/

// 배열을 이용한, 최대 힙 구현
class MaxHeap {
  constructor() {
    this.heap = [null]; // 0번인덱스는 비워둠
  }
  // 1. 힙 요소 추가 구현(최대 힙 예시)
  push(value) {
    this.heap.push(value);

    let currIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currIdx / 2);

    while (parentIdx && this.heap[parentIdx] < value) {
      this.heap[currIdx] = this.heap[parentIdx];
      this.heap[parentIdx] = value;

      currIdx = parentIdx;
      parentIdx = Math.floor(currIdx / 2);
    }
  }

  // 2. 힙 요소 삭제 구현(최대 힙 예시)
  pop() {
    const rmVal = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currIdx = 1;
    let leftIdx = 2;
    let rightIdx = 3;

    while (
      this.heap[currIdx] < this.heap[leftIdx] ||
      this.heap[currIdx] < this.heap[rightIdx]
    ) {
      const temp = this.heap[currIdx];
      if (this.heap[leftIdx] > this.heap[rightIdx]) {
        this.heap[currIdx] = this.heap[leftIdx];
        this.heap[leftIdx] = temp;
        currIdx = leftIdx;
      } else {
        this.heap[currIdx] = this.heap[rightIdx];
        this.heap[rightIdx] = temp;
        currIdx = rightIdx;
      }
      leftIdx = currIdx * 2;
      rightIdx = currIdx * 2 + 1;
    }
    return rmVal;
  }
}

// 힙 요소 추가
const heap = new MaxHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap);

console.log(heap.pop());
console.log(heap.heap);
console.log(heap.pop());
console.log(heap.heap);
