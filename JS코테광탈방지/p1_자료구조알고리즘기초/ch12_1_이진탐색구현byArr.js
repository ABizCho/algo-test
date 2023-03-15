// Array를 이용한 이진탐색 구현
//		=> 코테 시, 일반적으로 사용하는 방법

/*
	# mid = floor(right + left) / 2
	left, right를 targetValue와 mid값의 대소비교에 따라 갱신
*/

const arr = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712];

// 1. 재귀적 구현
function solution(arr, tarVal) {
  let ans;
  function DFS(l, r) {
    const mid = Math.floor((l + r) / 2);

    if (arr[mid] === tarVal) return mid;
    else {
      if (arr[mid] > tarVal) {
        return DFS(l, mid - 1);
      } else {
        return DFS(mid + 1, r);
      }
    }
  }

  ans = DFS(0, arr.length - 1);

  return ans;
}

console.log(solution(arr, 124));

// 2. 반복적 구현
function binarySearch(arr, tarVal) {
  let l = 0;
  let r = arr.length - 1;
  let mid = Math.floor((l + r) / 2);
  while (l <= r) {
    if (arr[mid] === tarVal) {
      return mid;
    }

    if (arr[mid] > tarVal) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
    mid = Math.floor((l + r) / 2);
  }
  return -1;
}

console.log(binarySearch(arr, 400));
