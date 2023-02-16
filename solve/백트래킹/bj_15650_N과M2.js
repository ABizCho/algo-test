[range, len] = "4 2"
  .toString()
  .trim()
  .split(" ")
  .map((ch) => ch * 1);

// const fs = require("fs");
// input = fs.readFileSync("/dev/stdin");
// [range, len] = input
//   .toString()
//   .trim()
//   .split(" ")
//   .map((ch) => ch * 1);

const visited = new Array(range).fill(false);
const arr = [];

const dfs = (first_idx) => {
  if (arr.length === len) {
    console.log(arr.join(" "));
    return;
  }

  for (first_idx; first_idx < range + 1; first_idx++) {
    if (visited[first_idx - 1] === true) {
      continue;
    } else if (visited[first_idx - 1] === false) {
      visited[first_idx - 1] = true;
      arr.push(first_idx);
      dfs(first_idx);
      arr.pop();
      visited[first_idx - 1] = false;
    }
  }
};

dfs(1, 0);
