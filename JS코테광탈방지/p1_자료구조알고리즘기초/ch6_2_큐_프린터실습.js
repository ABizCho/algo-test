const [priorities, location] = [[1, 1, 9, 1, 1, 1], 0];

// sol 1 ) 연결리스트 큐 활용 풀이

/*
  1. queue에 우선순위를 담으면서, 순서를 파악하기 위해서 우선순위의 index도 같이 담습니다.
 
  2. 빠른 탐색을 위해 priorities를 정렬합니다.
 
  3. count를 0으로 초기화합니다.
 
  4. queue에서 값을 하나 뺍니다. 
 
  5. priorities[count]와 queue로 뽑은 중요도 데이터와 비교합니다.
 
  6. priorities[count]가 더 크다면 queue 맨 뒤에 다시 넣습니다.
  
  7. priorities[count]가 더 작다면 count를 하나 더 
  증가시킵니다. 이 때 queue로 뽑은 중요도의 index와 location이 동일하다면 그대로 count를 반환합니다.

  ===ex.

  1. 2와 3을 비교합니다. (priorities은 내림차순 정렬되었기에 priorities[0]은 3입니다)
  
  2. 2가 더 작기에 큐 맨 뒤에 넣습니다.
  
  3. 1과 3을 비교합니다.
  
  4. 1이 더 작기에 큐 맨 뒤에 넣습니다.
  
  5. 3과 3을 비교합니다.
  
  6. 3이 더 작지 않기 때문에 count를 증가시킵니다.
  
  7. 3의 index인 2와 location이 같은지 비교합니다.
  
  8. 같기 때문에 count를 반환합니다.
 */
class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
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
  }

  dequeue() {
    const value = this.front.value;
    this.front = this.front.next;
    return value;
  }

  peek() {
    return this.front.value;
  }
}

function solution(priors, loc) {
  const queue = new Queue();

  for (let i = 0; i < priors.length; i++) {
    queue.enqueue([priors[i], i]); // 우선순위, 인덱스 함께 넣어줌
  }

  // 우선순위 배열 역순정렬
  priors.sort((a, b) => b - a);

  let cnt = 0;
  while (true) {
    // queue의 front 값을 꺼내 임시 저장 to currFront
    const currFront = queue.peek();
    console.log("currFront, priors[cnt], cnt::: ", currFront, cnt, priors[cnt]);

    // queue의 front값이, 내림차순 정렬 된 priors
    if (currFront[0] < priors[cnt]) {
      console.log("!!!priors[cnt] is high\n");
      queue.enqueue(queue.dequeue());
    } else {
      console.log("###currFront[value] is high\n");
      const value = queue.dequeue();
      cnt += 1;

      if (loc === value[1]) {
        return cnt;
      }
    }
  }
  return cnt;
}

console.log(solution(priorities, location));

/*
	문제 설명
	일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다. 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.

	1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
	2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
	3. 그렇지 않으면 J를 인쇄합니다.
	예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.

	내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.

	현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.

	제한사항
	현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
	인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
	location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.
	입출력 예
	priorities	location	return
	[2, 1, 3, 2]	2	1
	[1, 1, 9, 1, 1, 1]	0	5
	입출력 예 설명
	예제 #1

	문제에 나온 예와 같습니다.

	예제 #2

	6개의 문서(A, B, C, D, E, F)가 인쇄 대기목록에 있고 중요도가 1 1 9 1 1 1 이므로 C D E F A B 순으로 인쇄합니다.
*/
