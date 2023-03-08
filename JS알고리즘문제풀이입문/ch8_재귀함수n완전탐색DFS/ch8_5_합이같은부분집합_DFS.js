const input = "4\n1 2 5 6";
const input2 = "6\n1 3 5 6 7 10";
const [N, arr] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// sol 1 ) 내 풀이 ) 재귀적 BT DFS를 이용한 : O(2^N)
function solution(arr) {
  arr.sort((a, b) => a - b);

  let ans = "NO";
  const M = arr.length - 1;
  let check = Array.from({ length: arr.length - 1 }, () => 0);

  function DFS(i) {
    console.log("DFS I: ", i);
    if (i > M) {
      let arrA = [0];
      let arrB = [0];
      for (let x = 0; x <= i - 1; x++) {
        if (check[x]) {
          arrA.push(arr[x]);
        } else {
          arrB.push(arr[x]);
        }
        console.log(check[x], arr[x], arrA, arrB);
      }
      console.log(arrA, arrB);
      if (
        arrA.reduce((sum, v) => sum + v) === arrB.reduce((sum, v) => sum + v)
      ) {
        ans = "YES";
        return ans;
      }
    } else {
      check[i] = 1;
      let isEnd = DFS(i + 1);
      if (isEnd === "YES") return "YES";

      check[i] = 0;
      isEnd = DFS(i + 1);
      if (isEnd === "YES") return "YES";
    }
  }

  DFS(0);
  return ans;
}

// sol 2 ) 원소를 순차적으로 포함여부에 따라 BT를 가지쳐가며 SUM에 합해주며, 원소를 모두 돌았을 때 sum이 totalSum - sum (즉, set2 부분집합의 합) 과 같을 경우 yes.

// O(2^N * N) => O(2^N) =?=> DFS 함수가 한 번 호출될 때, 두개의 하위 콜백호출이 생기기 때문에, 배열의 모든 요소를 탐색하는 동안 최대 2^N번의 호출 생성 => 지수증가는 n이 클 경우 치명적으로 성능하락. 해당 문제는 n을 10개로 제한했으므로 충분히 효율적

// flag를 이용해 DFS탐색이 성공한 경우, 나머지 모든 탐색경우에 대해 곧장 return하여 불필요한 반복 제거.
/*
	DFS(level, sum) 이용
	totalSum === totalSum - sum; 
		-> ans = yes.
*/

function solution(arr) {
  let ans = "NO",
    flag = 0;
  const totSum = parseInt(arr.reduce((acc, v) => acc + v, 0));

  function DFS(L, sum) {
    if (flag) return;
    if (L === arr.length) {
      console.log("MAX: ", L, sum, totSum - sum);
      if (sum === totSum - sum) {
        ans = "YES";
        flag = 1;
        return ans;
      }
    } else {
      DFS(L + 1, arr[L] + sum);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return ans;
}

console.log(solution(arr));
