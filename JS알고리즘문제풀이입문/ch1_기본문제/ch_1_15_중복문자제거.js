/** sol1 */

// function solution(str) {
//   let ans = str;
//   let set = Array.from(new Set(ans.split("")));
//   let reg;
//   for (let x of set) {
//     reg = new RegExp(`[${x}]`, "g");
//     ans =
//       ans.slice(0, ans.indexOf(x) + 1) +
//       ans.slice(ans.indexOf(x) + 1).replace(reg, "");
//   }
//   return ans;
// }

/* sol2 */

function solution(str) {
  let ans = "";
  // let pos = str.indexOf('')
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) ans += str[i];
  }
  return ans;
}

console.log(solution("banasa"));

// 번외) indexOf활용한 특정 문자 개수 찾기
function ft_findK(str) {
  let ans = 0;
  let pos = str.indexOf("k");
  while (pos !== -1) {
    ans++;
    pos = str.indexOf("k", pos + 1);
  }
  return ans;
}
console.log(ft_findK("ksetksek"));
