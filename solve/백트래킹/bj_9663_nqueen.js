//ref : https://chanhuiseok.github.io/posts/baek-1/

const ft_abs = (n) => {
  if (n < 0) return n * -1;
  return n;
};

const is_promising = (curr_idx) => {
  let i = 0;
  while (i < curr_idx) {
    if (
      board[curr_idx] == board[i] ||
      curr_idx - i == ft_abs(board[curr_idx] - board[i])
    )
      return 0;
    i++;
  }

  return 1;
};

const dfs_nqueen = (curr_row) => {
  if (curr_row == num) {
    cnt++;
    // console.log(board);
    return;
  }

  let col = 0;
  while (col < num) {
    board[curr_row] = col; //curr_row번째 행, col번째 열에 queen을 놓아본다.
    // 현재 행에 둔 queen위치의 유망성을 테스트해본다.
    if (is_promising(curr_row)) {
      // 유망했다면
      dfs_nqueen(curr_row + 1); // 다음 행에도 퀸을 놓아보며 테스트.
    }
    col++;
  }
};

// const input = "5".toString().trim();
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const num = parseInt(input);
const board = Array(num);
let cnt = 0;

dfs_nqueen(0);
console.log(cnt);
