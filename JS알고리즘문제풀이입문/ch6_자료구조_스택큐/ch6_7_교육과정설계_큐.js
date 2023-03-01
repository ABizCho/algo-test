const input = "CBA\nCBADGE";
const [seq, plan] = input.split("\n").map((str) => str.split(""));

// SOL 1 ) 내 풀이, 큐 사용
function solution(seq, plan) {
  while (plan.length) {
    if (plan[0] === seq[0]) {
      seq.shift();
    }
    plan.shift();
    console.log(seq, plan);
  }

  if (seq.length) return "NO";
  return "YES";
}

// SOL 2 ) 큐 사용, 처리 다르게
function solution(seq, plan) {
  let ans = "YES";

  for (x of plan) {
    if (seq.includes(x)) {
      if (seq.shift() !== x) return "NO";
    }
  }
  if (seq.length) return "NO";
  return ans;
}

console.log(solution(seq, plan));
