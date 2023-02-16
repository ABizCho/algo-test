// const input = "5\n87 89 100 92 100 76 50 50";
const input = "5\n92 92 92 100 76";
let [N, nums] = input.split("\n");

nums = nums.split(" ").map((v) => Number(v));

// // sol 1 ) 재귀와 리듀스를 주로 사용
// 해당 풀이는 공동순위 뒤에 곧장 다음순위로 책정
// const ft_findMaxIdx = (nums) => {
//   let indices = [];
//   let idx = nums.indexOf(Math.max(...nums));
//   while (idx != -1) {
//     indices.push(idx);
//     idx = nums.indexOf(Math.max(...nums), idx + 1);
//   }
//   console.log("indices", indices);
//   return indices;
// };

// let ans = Array.from({ length: nums.length }, () => 1);
// function solution(nums, rank) {
//   if (nums.length * -1 === nums.reduce((acc, v) => acc + v)) return ans;

//   let maxIdx = ft_findMaxIdx(nums);
//   for (x of maxIdx) {
//     ans[x] = rank;
//     nums[x] = -1;
//   }
//   return solution(nums, rank + 1);
// }

// sol2 ) 2중루프
// 해당 풀이는 공동순위까지 모두 카운트하여 다음순위 책정
function solution(arr) {
  let n = arr.length;
  let ans = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) ans[i]++;
    }
  }
  return ans;
}

console.log(solution(nums, 1).join(" "));
