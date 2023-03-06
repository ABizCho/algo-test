const input = "5 3\n1 2 8 4 9";

const [NC, arr] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// sol 1 ) 이분탐색 : O(logN)

const assignHorse = (C, arr, minDist) => {
  let cnt = 1,
    ep = arr[0];

  for (x of arr) {
    if (x - ep >= minDist) {
      ep = x;
      cnt++;
    }
  }

  if (cnt >= C) return 1;
  else return 0;
};
function solution(C, arr) {
  let ans;
  arr.sort((a, b) => a - b);
  let rt = arr[arr.length - 1];
  let lt = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 1; i++) {
    lt = Math.min(lt, Math.abs(arr[i] - arr[i + 1]));
  }

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (assignHorse(C, arr, mid)) {
      ans = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return ans;
}

console.log(solution(NC[1], arr));
