const input = "6\n13 5 11 7 23 15";
const [N, arr] = input
  .split("\n")
  .map((str) => str.split(" ").map((v) => Number(v)));

// sol 1 ) 기억을 더듬으며 버블소트 구현
// 버블소트는 최선,최악 모두 O(n^2)으로 교환이 다른 정렬보다 많이 발생함, 선택정렬 삽입정렬의 최선인 O(N)보다 안 좋음
// 입력배열이 이미 정렬돼있다 가정했을 때는 삽입정렬이 나머지 두 정렬(선,버)보다 나은 성능.
function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(i);

    for (let j = i; j < arr.length - i - 1; j++) {
      console.log("j: ", j);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(solution(arr));
