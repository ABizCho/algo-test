const input = "5\n1 2 3 1 2\n1 1 2 3 3";
let [n, A, B] = input.split("\n");
A = A.split(" ").map((v) => Number(v));
B = B.split(" ").map((v) => Number(v));

// sol1 ) 산술연산에 의한 규칙과, Boolean을 이용한 플래그 사용 풀이
function solution(A, B) {
  let ans = [];
  A.map((v, i) => {
    let res_calc = v - B[i];
    let res = true;

    if (res_calc < 0) {
      res_calc *= -1;
      res = !res;
    }

    if (res_calc === 0) ans.push("D");
    else if (res_calc === 1) ans.push(res ? "A" : "B");
    else if (res_calc === 2) ans.push(!res ? "A" : "B");
  });
  return ans.join("\n");
}

// // sol2 ) 단순 반복사용: 비김 & A가 이기는 경우의 수 이외 모두 B처리
// function solution(A, B) {
//   let ans = "";
//   let winA = "A\n";

//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === B[i]) ans += "D\n";
//     else if (A[i] === 1 && B[i] === 3) ans += winA;
//     else if (A[i] === 2 && B[i] === 1) ans += winA;
//     else if (A[i] === 3 && B[i] === 2) ans += winA;
//     else ans += "B\n";
//   }
//   return ans;
// }

console.log(solution(A, B));
