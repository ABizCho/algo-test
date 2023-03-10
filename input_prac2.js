const str = "5 7\n4 5 1 3 2"
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((ch) => ch));

console.log(str[1]);

///////////
const merge = function (left, right) {
  // 정렬된 왼쪽과 오른쪽 배열을 받아서 하나로 합치는 순수한 함수
  // left, right already sorted
  const result = [];
  while (left.length !== 0 && right.length !== 0) {
    left[0] <= right[0]
      ? result.push(left.shift())
      : result.push(right.shift());
  }

  return [...result, ...left, ...right]; // 아래 세줄과 같은 역할을 하는 코드
  // if(left.length === 0) results.push(...right);
  // if(right.length === 0) results.push(...left);
  // return results;
};

const mergeSort = function (array) {
  // ending condition: length === 1 인 배열이 들어올 때, 정렬이 끝난 것.
  if (array.length === 1) return array;

  // 2로 나누고 내림을 해야
  // length 가 2일 때도 안전하게 배열을 slice 할 수 있다.
  const middleIndex = Math.floor(array.length / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);

  // 재귀로 계속해서 반으로 나누면서 length 가 1이 될때까지 쪼개고,
  // 거꾸로 올라오면서 순수한 함수인 merge에 인자로 넣어서 다시 병합되어서 최종값을 리턴한다.
  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(str[1]));
