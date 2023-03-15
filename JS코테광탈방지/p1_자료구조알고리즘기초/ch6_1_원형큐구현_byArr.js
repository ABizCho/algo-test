// 원형 큐는 rear 다음 front로 돌아오는 구조,
// Circular queue는 Linked List로 구현했을 때 이점이 없다.

// 따라서 필요하다면 아래와 같이 Array를 이용하는 것이 좋음.

// 하지만 코테에서 원형 큐를 요구하는 경우 많지 않음

class CircularQueue {
  constructor(maxSize) {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.maxSize = maxSize;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log("queue is full!");
      return;
    }
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize;
    this.size += 1;
  }

  dequeue() {
    const value = this.queue[this.front];

    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.size -= 1;
    return value;
  }

  isFull() {
    if (this.maxSize === this.size) return true;
    return false;
  }

  peek() {
    return this.queue[this.front];
  }
}

const queue = new CircularQueue(4);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
queue.enqueue(16);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size);
console.log(queue.peek());
queue.enqueue(16);
queue.enqueue(32);
console.log(queue.isFull());
