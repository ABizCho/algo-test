/*

정렬
	1. 크게 비교식, 분산식 정렬로 나눌 수 있음
	2. 정렬은 대부분의 언어가 빌트인으로 제공
	3. 삽입, 선택, 버블, 머지, 힙, 퀵 등 있음


정렬의 상황별 속도 비교
	www.toptal.com/developers/sorting-algorithms


	비교식 정렬
		1. 버블 정렬 : O(n^2)
			인접 요소 검사,
			인접 요소간 비교를 통해 맨 끝으로 보내는
			하나의 STEP을 N - 1번 반복한다.

			각 STEP은 n-i번의 비교-교환을 수행한다.

		2. 선택정렬 : O(n^2)
			선택 요소와 나머지 요소 중 가장 우선순위가 높은 요소를 교환 선택 요소는 i(0~n)순서로  진행
			
		3. 삽입정렬 : O(n^2)
			어느정도 대상 배열이 정렬돼 있다는 가정하에,
			퀵 정렬보다 빠른 성능을 보여주는 정렬법.

			STEP이 진행됨에 따라, 
			맨 앞에 정렬된 block을 키워나가는 방식으로

			(1~i)의 순서로 요소를 선택하여, 정렬된 블록에 적절한 자리에 선택된 요소를 삽입해줌
			
			=> 이 때, block의 맨 뒷자리 요소와의 비교를 가능한 자리까지 수행, 
			삽입할 요소를 맨 처음 temp에
			저장해두고, block 내에서 해당 요소보다 우선순위가 낮은 요소들을 차례로 뒷자리로 한칸씩 밀어 저장하다가,
			temp가 위치할 자리를 찾으면 그곳에 바로 삽입
*/

//삽입정렬(비교식 정렬:O(n^2)) 나의 구현
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i;
    while (temp < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }

  return arr;
}

console.log(insertSort(insertSort([7, 4, 5, 1, 3])));
