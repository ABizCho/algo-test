const input = "10 3\n12 15 11 20 25 10 20 19 13 15";
let [NK, nums] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

//   // sol1 ) 2중 for문 = O(N * K) = O(N^2)
// function solution(K, nums) {
//   let max = Number.MIN_SAFE_INTEGER,
//     sum;
//   for (let lt = 0; nums[lt + K - 1]; lt++) {
//     sum = 0;
//     for (let k = 0; k < K; k++) {
//       sum += nums[lt + k];
//     }
//     max = Math.max(sum, max);
//   }
//   return max;
// }

// sol 2 ) 슬라이딩 윈도우 O(N) => 앞선 window의 결과를 활용
function solution(K, nums) {
  let max = Number.MIN_SAFE_INTEGER,
    sum = 0;
  for (let i = 0; i < K; i++) sum += nums[i];
  max = Math.max(sum, max);

  for (let rt = K; nums[rt]; rt++) {
    sum += nums[rt];
    sum -= nums[rt - K];
    max = Math.max(sum, max);
  }
  return max;
}
console.log(solution(NK[1], nums));
