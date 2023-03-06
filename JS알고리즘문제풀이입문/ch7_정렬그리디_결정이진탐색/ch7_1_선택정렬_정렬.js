const input = "6\n13 5 11 7 23 15";

const [N, nums] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// sol 1 ) 내 풀이: 선택정렬이 맥스를 골라 맨뒤로 보냈던가 라는 생각으로 풀이.
// 찾아보니 거꾸로 풀었음, 최대를 맨 뒤로 보내는 것이 아닌, 최소를 찾아 맨 앞으로 보내는 것
// 사실 아이디어는 거의 같음
// + tmp 변수 사용한 swap 방법 활용
// 선택정렬은 최악의 경우, O(N^2)
function solution(nums) {
  let tmp;
  let max_idx;

  for (let rt = nums.length - 1; rt > 0; rt--) {
    tmp = Number.MIN_SAFE_INTEGER;
    max_idx = undefined;
    for (let i = 0; i <= rt; i++) {
      if (nums[i] > tmp) {
        tmp = nums[i];
        max_idx = i;
      }
    }
    tmp = nums[rt];
    nums[rt] = nums[max_idx];
    nums[max_idx] = tmp;
    console.log(nums);
  }
  return nums;
}

// 옳게 수정한 선택정렬 + js 최신버전의 swap방법 적용(not using tmp)
function solution(nums) {
  let min_idx;
  for (let i = 0; i < nums.length - 1; i++) {
    min_idx = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min_idx]) min_idx = j;
    }
    [nums[i], nums[min_idx]] = [nums[min_idx], nums[i]];
  }
  return nums;
}
console.log(solution(nums));
