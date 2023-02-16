function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
  let i = 0,
    j = 0;
  while (i < 8) {
    j = i + 1;
    while (j < 9) {
      if (sum - (arr[i] + arr[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
        return answer;
      }
      j++;
    }
    i++;
  }
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
