// sol 1 ) 재귀
function solution(n) {
	function rec(n){
		if (n === 1) return 1;
		else return n * rec(n-1);
	}
	ans = rec(n);
	return ans;
}

// sol 2 ) 반복
function solution(n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= i;
  }
  return ans;
}
console.log(solution(5));
