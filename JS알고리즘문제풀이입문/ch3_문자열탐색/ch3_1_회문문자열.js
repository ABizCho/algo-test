const input = "Gasag";

// // sol 1) 단순 반복형 스택활용 O(n)
// function solution(str) {
//   let ans = true;
//   let arr = [];
//   let len = str.length;

//   for (let i = 0; i < Math.floor(len / 2); i++) arr.push(str[i]);

//   let i = len % 2 ? Math.ceil(len / 2) : len / 2;
//   for (i; i < len; i++) {
//     if (arr.pop().toLowerCase() !== str[i].toLowerCase()) {
//       ans = !ans;
//       break;
//     }
//   }
//   return ans;
// }

// // sol 2) 더욱 간결화된 O(n/2)
// function solution(str) {
//   let len = str.length;
//   str = str.toLowerCase();
//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     if (str[i] !== str[len - i - 1]) return "No";
//   }
//   return "Yes";
// }

// sol3 ) 배열화를 이용한 간단풀이
function solution(str) {
  str = str.toLowerCase();
  const rev = str.split("").reverse().join("").toLowerCase();
  if (rev !== str) return "NO";
  return "Yes";
}

console.log(solution(input));
