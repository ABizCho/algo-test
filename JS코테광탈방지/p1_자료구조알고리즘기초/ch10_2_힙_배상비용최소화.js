// /*
// 이 문제의 핵심은 <배상비용 계산>이다.

// 배상비용은 각 요소를 <제곱>하므로,

// 제곱할 각 요소를 최대한 고르게 만드는 것이 배상비용을 최소화 할 수 있는 방법이다.

// 문제의 요구사항 중 하나는, 각 작업량을 <줄일 수 있다>이므로,

// 제곱 대상을 고르게 만들기 위해 가장 큰 요소를 찾아가며(loop) 순차적으로 줄여나가는 것이 가장 바람직한 접근이다.

// <process>
// 1. 매 루프마다 Math.max : O(n)
// 2. 매 루프마다 정렬		: O(n log n)
// 					but, 힙 사용 시 O(logN)

// 이처럼, <매번(loop) 큰 값, 작은 값>을 알아야 한다면
// 무조건 <HEAP>을 사용하는 것이 좋다.
// */

//sol 1)

//		1. 힙 구현 by 배열-트리
class MaxHeap {
  constructor() {
    this.heap = [null]; // level과 index 일치를 위해 0은 비워준다.
  }

  // 힙 요소 추가는, 맨 끝부터 올리는 식으로 수행 O(logN)
  push(value) {
    this.heap.push(value);

    let currIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currIdx / 2);

    while (parentIdx !== 0 && this.heap[parentIdx] < value) {
      this.heap[currIdx] = this.heap[parentIdx];
      this.heap[parentIdx] = value;

      currIdx = parentIdx;
      parentIdx = Math.floor(currIdx / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();

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
      if (this.heap[leftIdx] < this.heap[rightIdx]) {
        this.heap[currIdx] = this.heap[rightIdx];
        this.heap[rightIdx] = temp;
        currIdx = rightIdx;
      } else {
        this.heap[currIdx] = this.heap[leftIdx];
        this.heap[leftIdx] = temp;
        currIdx = leftIdx;
      }
      leftIdx = currIdx * 2;
      rightIdx = currIdx * 2 + 1;
    }
    return rmVal;
  }
}

// 풀이 시작
function solution(N, works) {
  if (works.reduce((a, b) => a + b) <= N) {
    return 0;
  }

  const maxHeap = new MaxHeap();

  works.forEach((work) => maxHeap.push(work));

  for (let i = 0; i < N; i++) {
    maxHeap.push(maxHeap.pop() - 1);
    console.log(maxHeap.heap);
  }

  return maxHeap.heap.reduce((acc, v) => {
    console.log(acc, v * v);
    return acc + v * v;
  });
}

console.log(solution(4, [4, 3, 3]));
