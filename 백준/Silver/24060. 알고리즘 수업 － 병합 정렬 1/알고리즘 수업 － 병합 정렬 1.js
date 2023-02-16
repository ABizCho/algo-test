const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((ch) => +ch));

const K = input[0][1];
const arr = input[1];

const merge = (larr, rarr) => {
  let res_arr = [];
  let l_idx = 0;
  let r_idx = 0;

  while (l_idx < larr.length && r_idx < rarr.length) {
    if (larr[l_idx] < rarr[r_idx]) {
      res_arr.push(larr[l_idx]);
      l_idx++;
    } else {
      res_arr.push(rarr[r_idx]);
      r_idx++;
    }
    count++;
    if (count === K) target = res_arr[res_arr.length - 1];
  }

  while (l_idx < larr.length) {
    res_arr.push(larr[l_idx]);
    l_idx++;
    count++;
    if (count === K) target = res_arr[res_arr.length - 1];
  }

  while (r_idx < rarr.length) {
    res_arr.push(rarr[r_idx]);
    r_idx++;
    count++;
    if (count === K) target = res_arr[res_arr.length - 1];
  }
  return res_arr;
};

let count = 0;
let target;
const merge_sort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.ceil(arr.length / 2);
  let larr = arr.slice(0, mid);
  let rarr = arr.slice(mid);
  return merge(merge_sort(larr), merge_sort(rarr));
};

merge_sort(arr);
if (!target) target = -1;
console.log(target);
