const input = "5\n1 4\n2 3\n3 5\n4 6\n5 7";
const input2 = "3\n3 3\n1 3\n2 3";

const [N, ...times] = input2
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// sol 1 ) 좌표정렬, 그리디
function solution(times) {
  times.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  let endTime = 0,
    cnt = 0;
  times.forEach((v) => {
    if (v[0] >= endTime) {
      endTime = v[1];
      cnt++;
    }
  });
  return cnt;
}

console.log(solution(times));
