const input = "10\n1 1 1 1 1 0 0 1 1 0";
let [n, nums] = input.split("\n");
nums = nums.split(" ").map((v) => Number(v));

function solution(nums) {
  let ans = 0;

  nums.reduce((acc, v, i) => {
    if (v === 1) {
      acc++;
      ans += acc;
    } else acc = 0;
    return acc;
  }, 0);
  return ans;
}

console.log(solution(nums));
