const input = "(((()(()()))(())()))(()())";

/*
solution 

str을 for로 돌며,
 ( 를 만났을 때는 무조건 push,
 ) 를 만났을 땐 (i-1), 즉 직전 인덱스를 확인하여
  1. 직전인덱스가 (일 경우, 레이저
  2. 직전인덱스가 (가 아닐경우, 막대의 끝 으로 여김

    1- 레이저인 경우, 현재 닫는괄호를 pop하며, 스택에 쌓여있는 즉, 앞선 여는괄호 갯수(막대 수) 만큼 cnt += n
    2- 막대의 끝인 경우, 스택에서 여는괄호 하나를 pop.


교훈: 처음에 그럴싸해 보이는 대전제 아이디어를 버리고, 처음부터 다시 생각해볼 줄 알아야 함.
*/
function solution(str) {
  const stack = [];
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else {
      stack.pop();
      if (str[i - 1] === "(") cnt += stack.length;
      else cnt++;
    }
  }
  return cnt;
}

console.log(solution(input));
