const input =
  "5\n10 13 10 12 15\n12 39 30 23 11\n11 25 50 53 15\n19 27 29 37 27\n19 13 30 13 19";

let [n, ...board] = input.split("\n");
[...board] = board.map((line) => line.split(" ").map((v) => Number(v)));

/* 아래의 두개 풀이에서 주요하게 다른점은, 대각선 처리 */

const start = new Date().getTime();

// // sol 1) 2중 for문 내에서, 인덱스 규칙 기반 모든 합 계산 O(N^2)
// function solution(board) {
//   let n = board.length;
//   let ans = [
//     Array.from({ length: n }, () => 0),
//     Array.from({ length: n }, () => 0),
//     [0, 0],
//   ];
//   for (let i = 0; i < board.length; i++) {
//     for (j = 0; j < board.length; j++) {
//       ans[0][i] += board[i][j];

//       ans[1][j] += board[i][j];

//       if (i === j) {
//         ans[2][0] += board[i][j];
//       }
//       if (i + j === 4) ans[2][1] += board[i][j];
//     }
//   }
//   return Math.max(...ans[0], ...ans[1], ...ans[2]);
// }

// sol 2 ) O(n^2 + n)
function solution(board) {
  let ans = Number.MIN_SAFE_INTEGER;
  let n = board.length;
  let sum1, sum2;
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += board[i][j];
      sum2 += board[j][i];
    }
    ans = Math.max(ans, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += board[i][i];
    sum2 += board[i][n - i - 1];
  }
  ans = Math.max(ans, sum1, sum2);
  return ans;
}

const end = new Date().getTime();
console.log(start < end);

console.log(solution(board));
