// a = [10, 11, 12, 13, 14, 15];
// let answer = a.filter(
//   function (v, i) {
//     console.log(this);
//     if (v % 2 == 0) return v;
//   },
//   [1, 2]
// );

// let answer = a.map(
//   function (v, i) {
//     console.log(this);
//     if (v % 2 == 0) return v;
//   },
//   [1, 2]
// );

const arr = [1, 2, 3];
ans = arr.reduce(function (acc, cur) {
  return acc + cur;
}, 5);

console.log(ans);