const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

// sol 1 내 풀이: O(moves * n) : 정답과 일치
let cnt = 0;
const popPairs = (stack) => {
  if (stack[stack.length - 1] === stack[stack.length - 2]) {
    cnt += 2;
    stack.pop();
    stack.pop();
  }
  return stack;
};

function solution(board, moves) {
  let stack = [];
  for (i of moves) {
    for (let j = 0; j < board.length; j++)
      if (board[j][i - 1]) {
        console.log(board[j][i - 1]);

        stack.push(board[j][i - 1]);
        board[j][i - 1] = 0;
        stack = popPairs(stack);
        break;
      }
    console.log(stack);
  }
  return cnt;
}

console.log(solution(board, moves));
