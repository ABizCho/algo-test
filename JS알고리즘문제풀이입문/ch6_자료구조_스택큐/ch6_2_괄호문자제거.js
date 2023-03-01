const input = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

// sol 1) 내 풀이 : stack의 괄호 유무에 따라 ans 구성
function solution(str) {
  let ans = "";
  const stack = [];

  for (c of str) {
    if (c === "(" || c === ")") {
      if (stack[stack.length - 1] === "(" && c === ")") stack.pop();
      else stack.push(c);
    } else {
      ans += stack.length === 0 ? c : "";
    }
  }
  return ans;
}

// sol 2 ) 내 풀이 2 : stack 자체로 괄호처리 & 알파벳 구성
function solution(str) {
  const stack = [];

  for (c of str) {
    if (c === ")") {
      stack.splice(
        stack.lastIndexOf("("),
        stack.length - stack.lastIndexOf("(")
      );
    } else stack.push(c);
  }
  return stack.join("");
}

// sol 3)  2와 접근법 동일하지만 구현이 다른 풀이
function solution(str) {
  const stack = [];

  for (let x of str) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  return stack.join("");
}
console.log(solution(input));
