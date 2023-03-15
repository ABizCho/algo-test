// 키워드 : 문자열, 자동완성 : Trie

// sol 1 ) 내 풀이: 실제로 Trie 자료구조(Class)를 변형해 만들어 풀이.
class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.size = 0;
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
      currNode.children.get(c).size += 1;
      currNode = currNode.children.get(c);
    }
  }

  hasCnt(str) {
    let currNode = this.root;
    let cnt = 0;

    for (const c of str) {
      cnt++;
      if (!currNode.children.has(c)) {
        return false;
      }
      console.log("currNode.size", c, currNode.children.get(c).size);
      if (currNode.children.get(c).size === 1) return cnt;
      currNode = currNode.children.get(c);
    }
    return cnt;
  }
}

function solution(strs) {
  const trie = new Trie();
  strs.forEach((str) => trie.insert(str));

  return strs.reduce((acc, str) => acc + trie.hasCnt(str), 0);
}

///////
// sol 2) class를 만들지 않고, 개념적으로 Trie와 동일한 개념의 다차원 객체를 만드는 함수를 만들어 풀이

function makeTrie(words) {
  const root = {};
  for (const word of words) {
    let currNode = root;
    for (const c of word) {
      if (!currNode[c]) currNode[c] = [0, {}];
      currNode[c][0] = currNode[c][0] + 1;
      currNode = currNode[c][1];
    }
  }
  return root;
}

function solution(words) {
  let cnt = 0;
  const trie = makeTrie(words);

  for (const word of words) {
    let currNode = trie;
    for (const c of word) {
      cnt++;
      if (!currNode[c]) return false;
      if (currNode[c][0] === 1) {
        break;
      }
      currNode = currNode[c][1];
    }
  }

  return cnt;
}
//
console.log(solution(["go", "gone", "guild"]));

console.log(solution(["abc", "def", "ghi", "jklm"]));

console.log(solution(["word", "war", "warrior", "world"]));
