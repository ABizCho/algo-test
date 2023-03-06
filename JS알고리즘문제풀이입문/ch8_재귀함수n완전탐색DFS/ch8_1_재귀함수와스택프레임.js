// sol1 내 풀이
function solution(num) {
  if (num === 1) {
    console.log(1);
    return 1;
  }

  solution(num - 1);
  console.log(num);
}

// sol 2)
/*
재귀는 스택으로 작동
스택 프레임: 각 재귀호출마다 할당되는 스택방식 공간(프레임)
	스택 프레임 구성요소
		- 매개변수
		- 지역변수 
		- 복귀주소 : 해당 콜백이 끝나면, 호출되었던 곳으로 복귀하기 위해 저장
*/
function solution(n) {
  function DFS(L) {
    if (L === 0) return;
    DFS(L - 1);
    console.log(L);
  }

  DFS(n);
}
solution(5);
