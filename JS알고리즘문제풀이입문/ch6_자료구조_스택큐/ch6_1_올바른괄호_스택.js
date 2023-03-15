const input = "(()())";

// sol1 내 풀이
function solution(str) {
  const ans = "YES";
  const stack = [];

  for (let x of str) {
    if (stack[stack.length - 1] === "(" && x === ")") stack.pop();
    else stack.push(x);
  }
  return !stack.length ? ans : "NO";
}

// sol2
function solution(str) {
  const ans = "YES";
  stack = [];
  for (let x of str) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return ans;
}
console.log(solution(input));
