const input = "4 3\n3 4 1 2\n4 3 2 1\n3 1 4 2";

let [NM, ...nums] = input.split("\n");
let [N, M] = NM.split(" ").map((v) => Number(v));

// console.log(N);
nums = nums.map((v) => v.split(" ").map((v) => Number(v)));
const start = new Date();

// // sol 1) 브루트포스
// const arr_rmel = (arr, n) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// };

// function solution(N, M, nums) {
//   let arr_okCase = new Array(N);
//   for (let i = 0; i < N; i++) {
//     arr_okCase[i] = Array.from({ length: N }, (v, idx) => idx + 1).filter(
//       (v) => v !== i + 1
//     );
//   }
//   for (aTest of nums) {
//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j < i; j++) {
//         arr_okCase[aTest[i] - 1] = arr_rmel(arr_okCase[aTest[i] - 1], aTest[j]);
//       }
//     }
//   }
//   console.log(arr_okCase);
//   return arr_okCase.reduce((acc, arr) => acc + arr.length, 0);
// }
// console.log(solution(N, M, nums));

//sol 2 브루트 포스지만, 두배가까이 빠름
function solution(n, m, arr) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) pi = s;
          if (arr[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

console.log(
  solution(4, 3, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
); // 3

const end = new Date();
console.log(end - start);
