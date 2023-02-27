const input = "8 6\n1 2 1 3 1 1 1 2";

let [NM, nums] = input
  .split("\n")
  .map((v) => v.split(" ").map((v) => Number(v)));

// // sol1 ) 포인터 1 O(N^2)
// function solution(M, nums) {
//   let cnt = 0;
//   let pt = 0;
//   let sum;
//   while (nums[pt]) {
//     sum = 0;
//     for (let i = pt + 1; i < nums.length; i++) {
//       sum += nums[i];
//       if (sum === M) {
//         cnt++;
//         break;
//       } else if (sum > M) {
//         break;
//       }
//     }
//     pt++;
//   }
//   return cnt;
// }

// sol2 ) 투포인터2, O(N)
function solution(m, arr) {
  let cnt = 0,
    sum = 0;
  let lt = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) {
      cnt++;
    }
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) cnt++;
    }
  }
  return cnt;
}
console.log(solution(NM[1], nums));
