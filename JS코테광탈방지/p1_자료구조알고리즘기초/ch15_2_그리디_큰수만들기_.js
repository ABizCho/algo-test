// sol 1)
// function solution(number, k) {
//   let ans = Number.MIN_SAFE_INTEGER;
//   const arr = number.split("").map((v) => Number(v));
//   const N = arr.length - k;

//   const tmp = [];
//   const visited = Array.from({ length: arr.length }, () => 0);

//   function DFS(L, I) {
//     if (tmp.length === N) {
//       console.log(tmp.join(""));
//       ans = Math.max(ans, Number(tmp.join("")));
//     }

// 	else {
//       for (let i = I; i < arr.length; i++) {
//         if (!visited[i]) {
//           visited[i] = 1;
//           tmp.push(arr[i]);
//           DFS(L + 1, I + 1);
//           tmp.pop();
// 		  DFS
//           visited[i] = 0;
//         }
//       }
//     }

//   }

//   DFS(1, 0);
//   return ans;
// }

// 그리디
// number: 문자열 형식의 숫자
// k: 제거할 수의 개수
function solution(number, k) {
	// answer: 가장 큰 숫자를 저장할 배열
	let answer = [];
  
	// 반복문으로 number의 각 자리수를 탐색
	for (let i = 0; i < number.length; i++) {
	  // 현재 자리수를 num에 저장
	  let num = number[i];
  
	  // answer 배열이 비어있지 않고 k가 0보다 크고 answer 배열의 마지막 원소보다 num이 더 크면 반복문 실행
	  while (answer.length > 0 && k > 0 && answer[answer.length - 1] < num) {
		// answer 배열의 마지막 원소를 제거하고 k 값을 감소시킴
		answer.pop();
		k--;
	  }
  
	  // answer 배열에 num을 추가함
	  answer.push(num);
	}
  
	// k가 남아있으면 answer 배열에서 뒤에서부터 k개만큼 제거함
	if (k > 0) {
	  answer.splice(-k);
	}
  
	// 가장 큰 숫자를 문자열 형태로 반환함
	return answer.join("");
  }