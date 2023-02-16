// 병합정렬 ref : https://jun-choi-4928.medium.com/javascript%EB%A1%9C-merge-sort-%EB%B3%91%ED%95%A9%EC%A0%95%EB%A0%AC-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-c13c3eee6570

// const fs = require("fs");

//test용
const str = "5 7\n4 5 1 3 2"
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((ch) => ch));

console.log(str[1]);

///////
const merge = (larr, rarr) => {
  const res_arr = [];

  while (larr.length !== 0 && rarr.length !== 0)
    larr[0] <= rarr[0]
      ? res_arr.push(larr.shift())
      : res_arr.push(rarr.shift());

  return [...res_arr, ...larr, ...rarr];
};

const merge_sort = (arr) => {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const arr_left = arr.slice(0, mid);
  const arr_right = arr.slice(mid);

  return merge(merge_sort(arr_left), merge_sort(arr_right));
};

console.log(merge_sort(str[1]));
