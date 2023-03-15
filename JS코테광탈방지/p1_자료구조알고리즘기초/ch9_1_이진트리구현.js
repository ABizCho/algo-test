/*
트리는 그래프와 마찬가지로
	인접행렬과, 인접리스트로 구현 가능하다.

*/

/*
1.이진트리를 Array로 구현
		1. 0번 인덱스는 편의를 위해 비워둠
		2. LeftChild = idx * 2
		3. RightChild = idx * 2 + 1
		4. Parent = Math.floor(idx / 2)
*/
// const tree = [
//   undefined,
//   //1
//   9,
//   // 1*2, 1*2+1
//   3,
//   8,
//   // 2*2, 2*2+1, 3*2, 3*2+1,
//   2,
//   5,
//   undefined,
//   7,
//   // 4*2, 4*2+1, 5*2, 5*2+1
//   undefined,
//   undefined,
//   undefined,
//   4,
// ];

/* 
	2. 이진트리를 연결리스트로 구현
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    // Level Order
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value);
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);
tree.display();
