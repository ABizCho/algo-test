/* sol1 */
// function solution(n, ...arr_car) {
//   console.log(arr_car);
//   let cnt = 0;
//   arr_car.map((v) => (Number(v.toString()[1]) == n ? cnt++ : cnt));
//   return cnt;
// }

// console.log(solution(0, 12, 20, 54, 30, 87, 91, 30));

/* sol2 */
function solution(day, arr) {
  let cnt = 0;
  for (x of arr) {
    if (x % 10 == day) cnt++;
  }
  return cnt;
}
console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
