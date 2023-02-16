const input = "5\ngood\ntime\ngood\ntime\nstudent";
const [N, ...strs] = input.split("\n");

//// sol1) 반복문 사용
// function solution(strs) {
//   let ans = [];
//   for (let i = 0; i < strs.length; i++) {
//     if (strs.indexOf(strs[i]) === i) {
//       ans.push(strs[i]);
//     }
//   }
//   return ans.join("\n");
// }

//// sol2) filter사용
function solution(strs) {
  let ans;
  ans = strs.filter((v, i) => {
    if (strs.indexOf(v) === i) return true;
  });
  return ans.join("\n");
}
console.log(solution(strs));
