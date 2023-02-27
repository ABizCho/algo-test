/* 
ps. sH1 === sH2
처럼 맵 클래스 객체간 비교는, 객체 사이의 비교이기 때문에 객체의 주소값을 비교하게 된다.
즉, 값간의 일치를 확인할 수 없다.

동일한 키-값 쌍 비교를 위해선, 두 Map 객체를 순회하며 비교해야 한다.
*/

const input = "AbaAeCe\nbaeeACA";
let [str1, str2] = input.split("\n").map((v) => v.split(""));

// // sol 1 ) 해쉬맵: Map 두개 생성 및 비교 : O(N)
// function solution(str1, str2) {
//   const sH1 = new Map();
//   const sH2 = new Map();
//   str1.map((v) => sH1.set(v, 0));
//   str1.map((v) => sH2.set(v, 0));

//   for (x of str1) {
//     sH1.set(x, sH1.get(x) + 1);
//   }
//   for (x of str2) {
//     sH2.set(x, sH2.get(x) + 1);
//   }
//   for (let [key, val] of sH1) {
//     if (sH2.has(key) && val === sH2.get(key));
//     else return false;
//   }
//   return true;
// }

// sol 2 ) 해쉬맵: Map 하나로 감소연산하며 비교 : O(N)
function solution(str1, str2) {
  const sH = new Map();
  for (x of str1) {
    sH.has(x) ? sH.set(x, sH.get(x) + 1) : sH.set(x, 1);
  }

  for (x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return false;
    sH.set(x, sH.get(x) - 1);
  }
  return true;
}

console.log(solution(str1, str2));
