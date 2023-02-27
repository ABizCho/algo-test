const input = "15\nBACBACCACCBDEDE";
const [N, arr] = input.split("\n").map((v) => v.split(""));

// sol 1) array와 아스키 활용한 내 해쉬 풀이 : O(N)
// function solution(arr) {
//   let cons = Array.from({ length: 5 }, (v) => 0);

//   for (let i = 0; i < arr.length; i++) {
//     cons[arr[i].charCodeAt() - 65]++;
//   }
//   return String.fromCharCode(65 + cons.indexOf(Math.max(...cons)));
// }

// sol 2) Map기반 Hash : O(N)
function solution(arr) {
  const sH = new Map(); // hasH로 사용되는 map 클래스의 객체 생성
  let ans;

  for (x of arr) {
    sH.has(x) ? sH.set(x, sH.get(x) + 1) : sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      ans = key;
    }
  }
  return ans;
}
console.log(solution(arr));
