const input = "5 28\n6 6\n2 2\n4 3\n4 5\n10 3";
let [NM, ...arr] = input.split("\n");
const [N, M] = NM.split(" ").map((v) => Number(v));
arr = arr.map((v) => v.split(" ").map((n) => Number(n)));

const start = new Date();

//sol 1 ) 브루트포스

function solution(arr, budget) {
  //1 총 비용 오름차순 정렬
  let temp;
  let ans = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length && arr[j + 1]; j++) {
      temp = [];
      if (arr[j][0] + arr[j][1] > arr[j + 1][0] + arr[j + 1][1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  let cnt = 1;
  for (let i = 0; i < arr.length; i++) {
    let bud = budget - (arr[i][0] + arr[i][1]);
    cnt = 1;
    for (let j = 0; j < arr.length; j++) {
      bud = bud - (arr[j][0] + arr[j][1]);

      if (bud >= 0) cnt++;
      else {
        break;
      }
    }

    if (ans < cnt) ans = cnt;
  }

  return ans;
}

console.log(solution(arr, M));

const end = new Date();
console.log("time : ", end - start);
