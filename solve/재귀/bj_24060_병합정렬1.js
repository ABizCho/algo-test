// 병합정렬 ref : https://jun-choi-4928.medium.com/javascript%EB%A1%9C-merge-sort-%EB%B3%91%ED%95%A9%EC%A0%95%EB%A0%AC-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-c13c3eee6570

// let input = "5 7\n4 5 1 3 2"
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.split(" ").map((v) => +v));

const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((ch) => +ch));

const K = input[0][1];
const arr = input[1];

// N = arr.length
// K -> 배열 merge과정에서 K번째 저장되는 수를 구해야 함.

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
