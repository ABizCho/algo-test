const fs = require("fs");
input = fs.readFileSync("/dev/stdin");
[range, len] = input
  .toString()
  .trim()
  .split(" ")
  .map((ch) => ch * 1);

let arr = [];

const dfs = (arr) => {
  let i = 1;
  if (arr.length == len) {
    console.log(arr.join(" "));
    return;
  }
  while (i < range + 1) {
    if (!arr.includes(i)) {
      arr.push(i);
      dfs(arr);
      arr.pop();
    }
    i++;
  }
};

dfs(arr);
