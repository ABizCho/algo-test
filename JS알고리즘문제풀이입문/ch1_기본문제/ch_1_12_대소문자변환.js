//sol1
function solution(str) {
  let answer = "";
  for (let x of str) {
    if (x === x.toLowerCase()) {
      answer += x.toUpperCase();
    } else {
      answer += x.toLowerCase();
    }
  }
  return answer;
}

// function solution(str) {}

// function solution(str) {}

console.log(solution("stuDY"));
