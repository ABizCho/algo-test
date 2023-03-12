const input =
  "7\n1 1 0 0 0 1 0\n0 1 1 0 1 1 0\n0 1 0 0 0 0 0\n0 0 0 1 0 1 1\n1 1 0 1 1 0 0\n1 0 0 0 1 0 0\n1 0 1 0 1 0 0";

let [N, ...board] = input
  .split("\n")
  .map((v) => v.split(" ").map((v) => Number(v)));


// sol 1 ) BFS
function solution(N, board) {
  let ans = 0;
  const queue = [];
  const dx = [1, 1, 1, 0, 0, -1, -1, -1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (board[x][y]) {
        ans++;
        board[x][y] = 0; // 나갈때가 아닌, 들어갈 때 0만들기
        queue.push([x, y]);
        while (queue.length) {
          let [cx, cy] = queue.shift();
          console.log(cx, cy);
          board[cx][cy] = 0;
          for (let i = 0; i < 8; i++) {
            let nx = cx + dx[i];
            let ny = cy + dy[i];
            if (!(nx < 0 || ny < 0 || nx > 6 || ny > 6) && board[nx][ny]) {
              // 나갈때가 아닌, 들어갈 때 0만들기
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
        console.log("BFS END");
      }
    }
  }
  return ans;
}

console.log(solution(Number(N), board));
