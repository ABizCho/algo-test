const input = "6\n120 130 150 150 130 160";
const input2 = "9\n120 125 152 130 135 135 143 127 160";
const input3 = "0\n170 130 130 140 140 150 150 160 160 120";

const [N, arr] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// // sol 1 ) 내 풀이 : 오답
// // input 2 정상출력
// // input 1 비정상출력, 150이 연속으로 존재하여, 현수 다음친구를 현수로 판단하는 오류.
// // ==> 이에 pos 변수를 flag이자, 중복 시 중복수열 중 가장 첫번째 요소를 저장해놓기 위한 역할로 사용 + 이에 따른 조건분기 추가 : input3 오답
// function solution(arr) {
//   let tar = [-1, -1];
//   let bin = 0;
//   let pos = -1;
//   for (let i = 1; i <= arr.length; i++) {
//     if (!bin && pos === -1 && arr[i] === arr[i - 1]) {
//       pos = i;
//       continue;
//     }
//     if (!bin ? arr[i] < arr[i - 1] : arr[i] > arr[i - 1]) {
//       console.log(arr[i], arr[i - 1]);
//       if (!bin && pos !== -1) tar[bin] = pos;
//       else tar[bin] = i;
//       bin = 1;
//     }
//     console.log(tar);
//   }
//   return tar;
// }

// sol 2 ) 정렬 이용 풀이 = 정렬이라는 아이디어로 매우 간단한 풀이
function solution(arr) {
  let ans = [];
  let notSorted = arr.slice(); // 깊은복사
  arr.sort((a, b) => a - b); // 오름차순
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== notSorted[i]) ans.push(i + 1);
  }
  return ans;
}

console.log(solution(arr));
