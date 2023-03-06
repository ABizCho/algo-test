const input = "5\n14 18\n12 15\n15 20\n20 30\n5 14";

const [N, ...arr] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// sol 1 ) 내 풀이: x,y순 정렬 -> endTime과 startTime 비교:좌표정렬, 그리디
function solution(arr) {
  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  let cnt = 1;
  let maxCnt = Number.MIN_SAFE_INTEGER;
  let endTime = 0;

  arr.forEach((v) => {
    if (v[0] >= endTime) {
      endTime = v[1];
      maxCnt = Math.max(maxCnt, cnt);
      cnt = 1;
    } else {
      cnt++;
    }
  });
  return maxCnt;
}

// sol 2 ) 한 사람의 startTime, endTime을 분리 및 한 코드에 정렬한 후 그리디
function solution(arr) {
  let curCnt = 0;
  let maxCnt = Number.MIN_SAFE_INTEGER;
  let timeLine = [];

  for (x of arr) {
    timeLine.push([x[0], "s"]);
    timeLine.push([x[1], "e"]);
  }

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt() - b[1].charCodeAt();
    }
    return a[0] - b[0];
  });

  for (x of timeLine) {
    if (x[1] === "s") {
      curCnt++;
    } else curCnt--;
    maxCnt = Math.max(curCnt, maxCnt);
    console.log(x, curCnt, maxCnt);
  }
  return maxCnt;
}

console.log(solution(arr));
