const input = "5\n1 3 9 5 2\n5\n3 2 5 7 8";
let [N, arr1, M, arr2] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// 투포인터 활용
function solution(arr1, arr2) {
  let ans = [];
  let pt1 = (pt2 = 0);

  arr1 = arr1.sort();
  arr2 = arr2.sort();

  while (arr1[pt1] && arr2[pt2]) {
    if (arr1[pt1] === arr2[pt2]) {
      ans.push(arr1[pt1++]);
      pt2++;
    } else if (arr1[pt1] < arr2[pt2]) pt1++;
    else pt2++;
  }
  return ans;
}

console.log(solution(arr1, arr2));
