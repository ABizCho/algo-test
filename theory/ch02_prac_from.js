// Array.from() 메서드는 유사 배열 객체나, 반복 가능한 객체를 얕게 복사해 새로운 Arr객체를 만든다.

//1. String -> arr
const arr_str = Array.from("감자탕");
console.log(arr_str);

//2. Set -> arr

const set = new Set(["김치찌개", "감자탕"]);
const arr_set = Array.from(set);

console.log(arr_set);

//3. Map (keys : vals) -> arr

const m = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
const arr_map = Array.from(m);
console.log(arr_map);

const arr_map_keys = Array.from(m.keys());
console.log(arr_map_keys);

const arr_map_vals = Array.from(m.values());
console.log(arr_map_vals);

//4.1 Array.from, 화살표 함수 응용
// 각 배열 자릿값을 기반으로 결과를 다시 해당 배열자리에 반환
const arr = Array.from([1, 2, 3], (cur) => cur + cur);

console.log(arr);

//4.2.1 Array.from, 화살표 함수 응용
// 각 배열 자리의 idx, 혹은 val을 기반으로 한 일련의 동작 수행 이후 결과를 다시 해당 배열자리에 반환
const arr2 = Array.from({ length: 5 }, (val, idx) => idx);

console.log(arr2);

//4.2.2
const arr3 = Array.from([5, 10, 15], (val, idx) => val + 1);
console.log(arr3);
