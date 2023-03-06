const input = "9 3\n1 2 3 4 5 6 7 8 9";
const input2 = "7 3\n1 2 3 4 5 6 7";
const input3 = "5 2\n1 2 3 4 5";
const input4 = "5 4\n5 3 2 4 8 7";
const [NM, arr] = input4
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// sol 1) 내 풀이 M-1개의 dvd에 대해 i(= 0 ~ n -1)와 i+1의 배열 간 합비교하며 i의 끝노래를 i+1에 옮긴 후 합비교 및 최소갱신 작업을 n까지 수행하는 아이디어.
// 내 코드 O(NM) > 이진탐색 풀이 O(logN)
const arrSum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur);
};
function solution(M, arr) {
  const dvds = Array.from({ length: M }, () => []);

  if (M === 1) return arrSum(arr);
  let i = 0;
  for (i; i < arr.length - M + 1; i++) {
    dvds[0].push(arr[i]);
  }
  for (let resM = 1; resM !== M; resM++) {
    dvds[resM].push(arr[i++]);
  }

  let flag = 0,
    min = Number.MAX_SAFE_INTEGER;
  while (flag !== M - 1) {
    console.log(flag, ...dvds, min);
    if (arrSum(dvds[flag]) < arrSum(dvds[flag + 1])) {
      flag++;
      min = Math.min(arrSum(dvds[flag]), min);
    } else {
      min = Math.min(Math.max(arrSum(dvds[flag + 1]), arrSum(dvds[flag])), min);
      dvds[flag + 1].unshift(dvds[flag].pop());
    }
  }
  return min;
}

// sol 2 ) 이분탐색 활용: 효율적 최적해 탐색 : o(logN)
//		이진탐색을 이용해 가능한 ans 결과를 이분 및 대입시켜보며 ans를 최적화 시켜나가는 풀이
/*
lt, rt를 최소~최대 용량 각각으로 설정
가능한 최소 용량 = 가장 긴 노래 하나는 담겨야 함 = 9
가능한 최대 용량 = 모든 노래 길이의 합

ex ) 
	const input = "9 3\n1 2 3 4 5 6 7 8 9";
	=> lt = 9, rt = 9!(= 45)
	하지만 rt는 훨씬 크게 잡아도 결국 이분탐색으로 걸러지므로, rt를 아예 넉넉하게 잡아도 상관없음
*/
const count = (songs, capacity) => {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else sum += x;
  }
  return cnt;
};

function solution(M, arr) {
  let ans;
  let lt = Math.max(...arr);
  let rt = arr.reduce((acc, v) => acc + v);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (count(arr, mid) <= M) {
      ans = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }
  return ans;
}

console.log(solution(NM[1], arr));
