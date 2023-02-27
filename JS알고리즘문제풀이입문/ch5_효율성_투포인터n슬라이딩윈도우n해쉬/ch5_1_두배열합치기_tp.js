const input = "3\n1 3 5\n5\n2 3 6 7 9";
let [N, arr1, M, arr2] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));
// console.log(arr2);

// sol1 내장 라이브러리 활용
// function solution(arr1, arr2) {
//   let ans = [];
//   ans.push(...arr1, ...arr2);
//   return ans.sort().join(" ");
// }

// sol2) 투포인터
function solution(arr1, arr2) {
  let ans = [];
  let pt1 = 0,
    pt2 = 0;

  for (
    let i = 0;
    i < arr1.length + arr2.length - 1 && arr1[pt1] && arr2[pt2];
    i++
  ) {
    if (arr1[pt1] > arr2[pt2]) ans.push(arr2[pt2++]);
    else ans.push(arr1[pt1++]);
  }
  if (arr1[pt1] || arr2[pt2]) {
    if (arr1[pt1]) {
      while (arr1[pt1]) {
        ans.push(arr1[pt1]);
        pt1++;
      }
    } else {
      while (arr2[pt2]) {
        ans.push(arr2[pt2]);
        pt2++;
      }
    }
  }

  return ans;
}
console.log(solution(arr1, arr2));
