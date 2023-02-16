const input = "7\n128 460 603 40 521 137 1235 123";

// sol 1) reduce를 이용한 O(n x m) 풀이 => m은 10,000,000을 넘지 않음 즉, 최대 O(8n)의 풀이 => O(n)의 풀이 == 상수 무시 법칙

let [N, nums] = input.split("\n");
nums = nums.split(" ");

function solution(nums) {
  let ans = 0;

  ans = nums.reduce(
    (max, v, i) => {
      cur_max = v.split("").reduce((acc, v) => acc + Number(v), 0);

      if (max[0] < cur_max) {
        return [cur_max, i];
      } else if (max[0] === cur_max) {
        return v > max[1] ? [cur_max, i] : max;
      } else return max;
    },
    [Number.MIN_SAFE_INTEGER, -1]
  );
  return nums[ans[1]];
}

// sol 2)

console.log(solution(nums));
