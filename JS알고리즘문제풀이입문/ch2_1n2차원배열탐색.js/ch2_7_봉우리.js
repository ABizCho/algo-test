const input = "5\n5 3 7 2 3\n3 7 1 6 1\n7 2 5 3 4\n4 3 6 4 1\n8 7 3 5 2";

let [n, ...board] = input.split("\n");

board = board.map((line) => line.split(" ").map((v) => Number(v)));

const start = new Date().getTime();

// // sol 1 ) 단순 2중루프 조건식
// function solution(board) {
//   const len = board.length;
//   board.unshift(Array.from({ length: len }, () => 0));
//   board.push(Array.from({ length: len }, () => 0));

//   board.map((line) => {
//     line.unshift(0);
//     line.push(0);
//   });

//   let cnt = 0;
//   for (let i = 1; i < board.length - 1; i++) {
//     for (let j = 1; j < board.length - 1; j++) {
//       if (
//         board[i][j] > board[i - 1][j] &&
//         board[i][j] > board[i + 1][j] &&
//         board[i][j] > board[i][j - 1] &&
//         board[i][j] > board[i][j + 1]
//       ) {
//         cnt++;
//       }
//     }
//   }
//   return cnt;
// }

// sol 2 ) board의 가장자리 0을 넣어주지 않는, flag 활용, 2중루프 풀이
function solution(board) {
  let ans = 0;
  let len = board.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0 - 1];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < len &&
          ny >= 0 &&
          ny < len &&
          board[nx][ny] >= board[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) ans++;
    }
  }
  return ans;
}

const end = new Date().getTime();

console.log("Time: ", end - start);
console.log(solution(board));
