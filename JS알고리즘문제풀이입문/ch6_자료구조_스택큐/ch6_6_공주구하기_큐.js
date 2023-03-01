const input = "8 3";
const [N, K] = input.split(" ").map((v) => Number(v));

// sol 1 ) 내 풀이, 큐 사용
function solution(N, K) {
  const queue = Array.from({ length: N }, (v, i) => i + 1);

  let i = 0;
  while (queue.length !== 1) {
    if ((i + 1) % K === 0) {
      queue.shift();
      i = 0;
      continue;
    }
    queue.push(queue.shift());
    i++;
  }
  return Number(queue);
}

console.log(solution(N, K));
