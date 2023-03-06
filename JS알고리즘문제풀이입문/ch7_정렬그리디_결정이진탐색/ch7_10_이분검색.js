const input = "8 32\n23 87 65 12 57 32 99 81";

const [NM, arr] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// 이진탐색 없이, 내장함수만을 이용한 결과출력, O(N)
function solution(M, arr) {
  arr.sort((a, b) => a - b);

  return arr.indexOf(M) + 1;
}

// 순차탐색 풀이 O(N)
function solution(M, arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === M) return i + 1;
  }
  return -1;
}

// 이진 탐색 구현 1
// 이진탐색이란 탐색할 배열의 중앙을 기준으로 이분하여, 중앙값보다 크면, 후배열에 아니라면 전배열에 대해 앞선 작업을 반복하는 알고리즘, O(logN)

function binSearch(M, arr, lt, rt) {
  let mid = Math.floor((rt + lt) / 2);

  if (arr[mid] === M) return mid + 1;
  else if (M > arr[mid]) return binSearch(M, arr, mid + 1, rt);
  else return binSearch(M, arr, lt, mid);
}
function solution(M, arr) {
  arr.sort((a, b) => a - b);

  return binSearch(M, arr, 0, arr.length - 1);
}

// 이진탐색 구현 2
function solution(tar, arr) {
  let ans;
  arr.sort((a, b) => a - b);
  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === tar) {
      ans = mid + 1;
      break;
    } else if (arr[mid] > tar) rt = mid - 1;
    else lt = mid + 1;
  }
  return ans;
}
console.log(solution(NM[1], arr));
