const input = "KKHSSSSSSSE";

// function solution(str) {
//   let cnt = 0;
//   let arr_ch = [];
//   let ans_str = "";

//   arr_ch.push(str[0]);
//   for (let i = 1; i < str.length; i++) {
//     if (str[i] && str[i] != str[i - 1]) {
//       arr_ch.push(str[i]);
//     }
//   }
//   arr_n = Array.from({ length: arr_ch.length }, () => 0);
//   console.log(arr_ch);
//   for (let i = 0; i < arr_ch.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (arr_ch[i] === str[j]) {
//         arr_n[i] += 1;
//       }
//     }
//   }

//   for (let i = 0; i < arr_ch.length; i++) {
//     if (arr_n[i] !== 1) {
//       ans_str += arr_ch[i];
//       ans_str += arr_n[i];
//     } else {
//       ans_str += arr_ch[i];
//     }
//   }
//   return ans_str;
// }

function solution(str) {
  let ans = "";
  let cnt = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      cnt++;
    } else {
      ans += str[i];
      if (cnt > 1) {
        ans += cnt;
      }
      cnt = 1;
    }
  }
  return ans;
}

console.log(solution(input));
