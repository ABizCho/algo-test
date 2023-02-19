const input =
  "teachermodeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee e";
let [str, ch] = input.split(" ");

let start = new Date();

// // sol1 ) 최악 O(n^2) : target으로만 구성된 str인경우
// function solution(str, ch) {
//   let ans = Array.from({ length: str.length }, () => Number.MAX_SAFE_INTEGER);

//   let targetIdxs = [];
//   let i = 0;
//   while (i < str.length) {
//     i = str.indexOf(ch, i);
//     targetIdxs.push(i);
//     i++;
//   }
//   console.log(targetIdxs);
//   for (x of targetIdxs) {
//     for (let i = 0; i < str.length; i++) {
//       if (ans[i] > Math.abs(i - x)) {
//         ans[i] = Math.abs(i - x);
//       }
//     }
//   }
//   return ans.join(" ");
// }

// sol2 ) O(2n) : 정순, 역순 총 두번의 n loop
function solution(str, ch) {
  let p = 1000;
  const ans = [];
  for (x of str) {
    if (x === ch) p = 0;
    else p++;
    ans.push(p);
  }

  p = 1000;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ch) p = 0;
    else p++;
    ans[i] = Math.min(ans[i], p);
  }
  return ans;
}

console.log(solution(str, ch));

let end = new Date();
console.log(end - start);
