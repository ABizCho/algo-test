const input =
  "0 0 0 0 0 0 0\n0 1 1 1 1 1 0\n0 0 0 1 0 0 0\n1 1 0 1 0 1 1\n1 1 0 0 0 0 1\n1 1 0 1 1 0 0\n1 0 0 0 0 0 0";

const board = input.split("\n").map((v) => v.split(" ").map((x) => Number(x)));

// // SOL 1 ) 터프하게 조건분기
// // 미로= 인접행렬 이용한 DFS : O(N^2),
// //		정점의 개수가 N^2개, 각 정점에 연결된 간선이 4개씩임. 따라서 간선의 총 개수는 4N^2개이다.
// //		엄밀히는 O(4N^2)이지만 상수무시 법칙

// function solution(board) {
//   let ans = 0;
//   const visited = Array.from(Array(board.length), () =>
//     Array(board.length).fill(0)
//   );

//   function DFS(x, y) {
//     console.log(x, y);

//     if (x === 6 && y === 6) {
//       console.log("hit!");
//       ans++;
//     } else {
//       if (x >= 1) {
//         if (!board[x - 1][y] && !visited[x - 1][y]) {
//           console.log("T");
//           visited[x - 1][y] = 1;
//           DFS(x - 1, y);
//           visited[x - 1][y] = 0;
//         }
//       }
//       if (x <= 5) {
//         if (!board[x + 1][y] && !visited[x + 1][y]) {
//           console.log("B");
//           visited[x + 1][y] = 1;
//           DFS(x + 1, y);
//           visited[x + 1][y] = 0;
//         }
//       }
//       if (y >= 1) {
//         if (!board[x][y - 1] && !visited[x][y - 1]) {
//           console.log("L");
//           visited[x][y - 1] = 1;
//           DFS(x, y - 1);
//           visited[x][y - 1] = 0;
//         }
//       }
//       if (y <= 5) {
//         if (!board[x][y + 1] && !visited[x][y + 1]) {
//           console.log("R");
//           visited[x][y + 1] = 1;
//           DFS(x, y + 1);
//           visited[x][y + 1] = 0;
//         }
//       }
//     }
//     console.log("END OF DFS");
//   }
//   visited[0][0] = 1;
//   DFS(0, 0);
//   return ans;
// }

// SOL 2 ) 기본 아이디어는 sol1과 동일, but DX, DY배열로 상하좌우 구하는 연산만들어 반복문
function solution(board) {
  let ans = 0;
  const visited = Array.from(Array(board.length), () =>
    Array(board.length).fill(0)
  );
  // 상 하 좌 우
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function DFS(x, y) {
    console.log(x, y);
    if (x === 6 && y === 6) {
      console.log("hit!");
      ans++;
    } else {
      for (let i = 0; i < 4; i++) {
        let nextX = x + dx[i];
        let nextY = y + dy[i];

        if (nextX < 0 || nextY < 0 || nextX > 6 || nextY > 6) continue;

        if (!visited[nextX][nextY] && !board[nextX][nextY]) {
          visited[nextX][nextY] = 1;
          DFS(nextX, nextY);
          visited[nextX][nextY] = 0;
        }
      }
    }
    console.log("END OF DFS");
  }
  visited[0][0] = 1;
  
  DFS(0, 0);
  return ans;
}

console.log(solution(board));
