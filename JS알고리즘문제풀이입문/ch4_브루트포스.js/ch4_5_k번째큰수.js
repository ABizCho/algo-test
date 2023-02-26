const input = "10 3\n13 15 34 23 45 65 33 11 26 42";
let [NM, nums] = input.split("\n");

let [N, M] = NM.split(" ");
nums = nums.split(" ").map((v) => Number(v));

function solution(nums) {
  let set = new Set();
  nums = nums.sort((a, b) => b - a);

  for (let i = 2; i < nums.length; i++) {
    set.add(nums[0] + nums[1] + nums[i]);
  }
  set = Array.from(set);
  return set[2];
}

console.log(solution(nums));
