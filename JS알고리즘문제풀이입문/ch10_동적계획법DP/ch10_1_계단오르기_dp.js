const input = "7";

const n = Number(input);

// sol 2 ) 동적계획법 : 메모이제이션
/*
	최소단위 문제의 답을 구하고,
	한 단위씩 해결범위를 키우면서, 최소단위 문제의 답으로부터 새로운 해결범위의 답을 도출 및 저장을 반복하는 점화식 접근 풀이

	1. dy 배열을 활용
	2. dy의 최소단위에 해당하는 영역은, 초기화시켜줘야 함.
	3. 해당 문제의 경우 최대 2칸 움직이므로, L계단에 도착하기 위한 하위 단위는 L-1, L-2 두가지의 부분문제로 구성
	
*/
function solution(n) {
  const dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  let i = 3;
  while (i <= n) {
    dy[i] = dy[i - 1] + dy[i - 2];
    i++;
    console.log(dy);
  }
  return dy[i - 1];
}

// // sol 1 ) DFS
// function solution(n) {
//   const visited = Array.from({ length: n + 1 }, () => 0);
//   let ans = 0;
//   function DFS(L) {
//     console.log("L", L);
//     if (L > n) {
//       return;
//     }
//     if (L === n) {
//       ans++;
//       console.log("hit!!!!!!!!");
//       return;
//     } else {
//       for (let x of [L + 1, L + 2]) {
//         console.log(x);
//         if (!visited[x]) {
//           visited[x] = 1;
//           DFS(x);
//           visited[x] = 0;
//         }
//       }
//     }
//   }

//   DFS(0);

//   return ans;
// }

console.log(solution(n));
