/*
트라이 자료구조
	: 비선형 자료구조, 검색엔진의 자동완성에 사용

	<문자열>을 저장하고, 효율적으로 탐색하기 위한 트리 형태 자료구조

	Edge는 이전 Node로부터 새롭게 추가되는 문자 정보를 가지고 있음
	
	#특징
		1. 자동완성, 사전 찾기 에 응용
		2. 보통 문자열 탐색 시, O(strs.length * all of str.length)
		트라이 이용 시 => O(targetStr.length)
			but, 각 정점이 자식에 대한 정보를 가지고 있어야 하기에
			공간복잡도가 더 소요됨

	# 트라이 구현법
	
		1. 루트노드는 공백
		2. 각 Edge는 추가될 문자를 키로 가진다.
		3. 각 Node는 <이전 정점의 값 + Edge의 키> 를 값으로 가진다
		4. 해시테이블(Edge)과 연결 리스트를 이용해 구현한다.
*/

class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(str) {
    let currNode = this.root;

    for (const c of str) {
      if (!currNode.children.has(c)) {
        currNode.children.set(c, new Node(currNode.value + c));
      }
      currNode = currNode.children.get(c);
    }
  }

  has(str) {
    let currNode = this.root;

    for (const c of str) {
      if (!currNode.children.has(c)) {
        return false;
      }
      currNode = currNode.children.get(c);
    }
    return true;
  }
}

const myTrie = new Trie();
myTrie.insert("cat");
myTrie.insert("cap");

console.log(myTrie.has("cat"));
console.log(myTrie.has("cap"));
console.log(myTrie.has("can"));
