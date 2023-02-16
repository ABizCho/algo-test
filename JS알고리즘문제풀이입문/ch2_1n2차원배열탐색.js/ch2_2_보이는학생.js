const input = "8\n130 135 148 140 145 150 150 153  157";
let [n, nums] = input.split("\n");
nums = nums.split(" ").map((v) => Number(v));

// sol1)
// 참고: 리듀스는 O(n) 시간복잡도, n은 배열 길이
function solution(nums) {
  let cnt = 0;

  nums.reduce((max, v) => {
    if (max < v) {
      max = v;
      cnt++;
    }
    return max;
  }, Number.MIN_SAFE_INTEGER);
  return cnt;
}

console.log(solution(nums));
