const input =
  "7\n1 1 0 0 0 1 0\n0 1 1 0 1 1 0\n0 1 0 0 0 0 0\n0 0 0 1 0 1 1\n1 1 0 1 1 0 0\n1 0 0 0 1 0 0\n1 0 1 0 1 0 0";

let [N, ...board] = input
  .split("\n")
  .map((v) => v.split(" ").map((v) => Number(v)));

// sol 1) DFS
// function solution(N, board) {
//   let ans = 0;
//   const sub_ch = Array.from(Array(N), () => Array(N).fill(0));
//   const main_ch = Array.from(Array(N), () => Array(N).fill(0));

//   const dx = [1, 1, 1, 0, 0, -1, -1, -1];
//   const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
//   function DFS(x, y) {
//     for (let i = 0; i < 8; i++) {
//       let nextX = x + dx[i];
//       let nextY = y + dy[i];
//       console.log("nx, ny: ", nextX, nextY);

//       if (nextX < 0 || nextY < 0 || nextX > 6 || nextY > 6) continue;

//       if (!sub_ch[nextX][nextY] && board[nextX][nextY]) {
//         console.log("dfs In---: ", nextX, nextY);
//         main_ch[nextX][nextY] = 1;
//         sub_ch[nextX][nextY] = 1;
//         DFS(nextX, nextY);
//         sub_ch[nextX][nextY] = 0;
//       }
//     }
//   }

//   for (let x = 0; x < N; x++) {
//     for (let y = 0; y < N; y++) {
//       if (!main_ch[x][y] && board[x][y]) {
//         console.log("main in=============", x, y);
//         ans++;
//         main_ch[x][y] = 1;
//         sub_ch[x][y] = 1;
//         DFS(x, y);
//       }
//     }
//   }

//   return ans;
// }

// sol 2 ) sol1의 main,sub visited 체크 배열 사용 대신, 방문한 board의 x,y공간을 0으로 바꿔 개선

function solution(N, board) {
  let ans = 0;
  const dx = [1, 1, 1, 0, 0, -1, -1, -1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  function DFS(x, y) {
    board[x][y] = 0;
    for (let i = 0; i < 8; i++) {
      let nextX = x + dx[i];
      let nextY = y + dy[i];

      if (nextX < 0 || nextY < 0 || nextX > 6 || nextY > 6) continue;

      if (board[nextX][nextY]) {
        console.log("dfs In---: ", nextX, nextY);
        DFS(nextX, nextY);
      }
    }
  }

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (board[x][y]) {
        console.log("main", x, y);
        ans++;
        DFS(x, y);
      }
    }
  }

  return ans;
}

console.log(solution(Number(N), board));
