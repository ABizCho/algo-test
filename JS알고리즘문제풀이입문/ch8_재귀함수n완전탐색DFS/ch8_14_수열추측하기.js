const input = "4 16";
const [N, F] = input.split(" ").map((v) => Number(v));

/* 
	파스칼 삼각형 내 모든 level에서
	맨 처음, 맨 끝 의 두 값은 반드시 1이다.
	
					1
				1	2	1
			1	  3	  3		1
		1		4	6	4		1
	파스칼 삼각형 각 레벨은 (level)C(i)의 순차적(by i = [0~level]) 컴비네이션으로 이루어져 있다.

	따라서 컴비네이션 계산에 따라 nC0, nCn의 결과는 1이므로 위의 결과가 도출된다.

	이를 해당 문제에 적용시켜, 
	해당 문제에 주어진 역삼각형의 1레벨에 해당하는 1~n 수열의 요소 각각에 (n-1)C(i=[0~n-1])의 결과를 곱한 모든 값을 더해 해당 파스칼의 결과 F를 곧장 도출할 수 있다. 

	이 아이디어를 응용하여, 먼저 (n-1)C(0 ~ n-1)의 모든 컴비네이션 결과를 메모이제이션 배열에 저장하고, 이를 1~n에 대한 모든 조합의 순열에 곱->sum 하여 F와 비교

	앞으로 아래와 같은 규칙을 발견하면 컴비네이션을 고려해보자.

	[ 1 2 1 ]
	[ 1 3 3 1 ]
	[ 1 4 6 4 1 ]
	[ 1 5 10 10 5 1 ]
	[ 1 6 15 20 15 6 1]

	*/
const factorial = (n) => {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};

const comb = (n, r) => {
  let numer = factorial(n);
  let denumer = factorial(n - r) * factorial(r);

  return numer / denumer;
};

function solution(N, F) {
  let ans;

  const check = Array.from({ length: N }, () => 0);
  const dp = Array.from({ length: N }, (v, i) => comb(N - 1, i));
  const tmp = [];

  let flag = 0;
  function DFS(L, sum) {
    console.log(L, tmp);
    if (flag) return;
    if (L === N && sum === F) {
      ans = tmp.slice().join(" ");
      flag = 1;
      return;
    } else {
      for (let i = 1; i <= N; i++) {
        if (!check[i]) {
          check[i] = 1;
          tmp[L] = i;
          DFS(L + 1, sum + dp[L] * tmp[L]);
          check[i] = 0;
        }
      }
    }
    return ans;
  }

  ans = DFS(0, 0);
  return ans;
}

console.log(solution(N, F));
