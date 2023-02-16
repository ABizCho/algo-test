//best ref: https://miiingo.tistory.com/365

// 기본 누산기
/*
const arr = [1, 2, 3, 4];

const initVal = 0;
const sum = arr.reduce((acc, currVal) => acc + currVal, initVal);

console.log(sum);
*/

// 응용: 각 요소에 대해 콜백 수행 (익명 화살표 함수 응용)
//acc: 콜백의 반환값을 누적. 콜백의 이전 반환값 또는, initValue를 제공한 경우 initValue의 값

//1
const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur, idx) => {
  return (acc += cur);
}, 0); //init value: 0

console.log(result);

//2
const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce((acc, cur, idx) => {
  return (acc *= cur);
}, 5); // init value : 5
console.log(result2);

//3. init value에 arr을 넣는 케이스
// 양수와 음수 개수 카운트
const nums = [2, -1, -3, 15, -10];
const res = nums.reduce(
  (acc, cur, idx) => {
    if (cur < 0) {
      acc[1]++;
    } else if (cur > 0) {
      acc[0]++;
    }
    return acc;
  },
  [0, 0]
); // initial arr: [양수, 음수]
console.log(res);


