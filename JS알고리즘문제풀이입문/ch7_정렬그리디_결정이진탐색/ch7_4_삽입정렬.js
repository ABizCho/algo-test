const input = "6\n11 7 5 6 10 9";
const [N, arr] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// sol 1 ) 첫번째 구현한 삽입정렬, O(N^2)
function solution(arr) {
  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        arr.splice(j, 0, Number(arr.splice(i, 1)));
      }
    }
    console.log(arr);
  }
  return arr;
}

// sol 2 ) splice를 tmp 활용 대체, j를 역순으로 대체
// splice는 보통 성능저하를 유발, 이 함수에서처럼 직접 배열을 조작하는 편이 성능이 나음
function solution(arr) {
  let tmp;
  let j;
  for (let i = 1; i < arr.length; i++) {
    tmp = arr[i];
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
      } else break;
    }
    arr[j + 1] = tmp;
  }
  return arr;
}
console.log(solution(arr));
