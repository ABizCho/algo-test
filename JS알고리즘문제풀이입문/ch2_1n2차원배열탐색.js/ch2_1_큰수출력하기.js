const input = "6\n7 3 9 5 6 12";
let [n, nums] = input.split("\n");
nums = nums.split(" ").map((v) => Number(v));
// sol1

function solution(nums) {
  let ans = [nums[0]];
  let i = 1;
  while (nums[i]) {
    nums[i - 1] < nums[i] ? ans.push(nums[i]) : nums[i];
    i++;
  }
  return ans.join(" ");
}

console.log(solution(nums));
