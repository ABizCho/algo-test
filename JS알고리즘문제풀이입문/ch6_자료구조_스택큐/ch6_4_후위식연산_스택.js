const input = "352+*9-";

// sol 1 ) 내 풀이 : 정답과 동일
// 정답은 isNaN을 사용, 난 아스키 사용
// isNaN이 간결하기에 수정함
function solution(str) {
  const nums = [];

  let a = (b = 0);
  for (c of str) {
    if (!isNaN(c)) nums.push(Number(c));
    else {
      b = nums.pop();
      a = nums.pop();
      if (c === "+") nums.push(a + b);
      else if (c === "-") nums.push(a - b);
      else if (c === "*") nums.push(a * b);
      else if (c === "/") nums.push(a / b);

      a = b = 0;
    }
  }
  return Number(nums);
}

console.log(solution(input));
