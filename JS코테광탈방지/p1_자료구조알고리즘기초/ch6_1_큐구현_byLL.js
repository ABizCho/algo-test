class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.front === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.front.value;
    this.front = this.front.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.front.value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());

queue.enqueue(8);
console.log(queue.size);
console.log(queue.peek());
console.log(queue.front);
