const input = "5 5\n1 3 1 2 3";
let [NM, nums] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// sol1 ) 투포인터
function solution(m, nums) {
  let cnt = (sum = lt = 0);

  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];

    while (m < sum) {
      console.log(lt);
      sum -= nums[lt++];
    }

    cnt += rt - lt + 1;
  }
  return cnt;
}

console.log(solution(NM[1], nums));
