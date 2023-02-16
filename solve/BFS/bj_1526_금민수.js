// const fs = require("fs").readFileSync("/dev/stdin");
const input = "3737";

const n = input.toString().trim();

const arr = new Array(n.length);

let len = n.length - 1;

while (len) {
  if (n[len] < 4) {
    len++;
    while (len < n.length) {
      arr[len++] = 7;
    }
    break;
  }
  len--;
}

console.log(arr.join(""));
