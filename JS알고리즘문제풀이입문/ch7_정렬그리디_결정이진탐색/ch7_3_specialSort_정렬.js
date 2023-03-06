const input = "8\n5 -1 3 -2 1 0";
[5, -1, 3, -2, 1, 0];
const [N, arr] = input
  .split("\n")
  .map((str) => str.split(" ").map((v) => Number(v)));

// sol 1 ) 내 풀이

/* chat GPT와 내 코드에 대해 토론한 내용을 요약해봄
1. 내 함수는 while문 내에 splice 메서드를 사용중인데, 이는 N이 커질수록 성능저하를 유발할 수 있다고 함.
2. 이유를 물어보고 찾아보니, splice는 기본적으로는 배열의 요소를 삭제하여, 이를 재배열하는 연산을 수행하므로, 내가 알고있던대로 배열의 재배치에 많은 연산이 몰림.
3. CHAT GPT가 제시한 해결방안은 양수,음수 를 저장할 추가배열을 만들어 한번의 순회로 이들에 삽입한 후, CONCAT시키는 것임
4. 나는 위의 방법이 추가배열을 두개 사용하므로, 공간복잡도 측면에서 불리하다고 생각했으나 splice의 시간적 불리함과 비교해서는 gpt의 방법이 효율적일 것이라 납득했음.

*/
function solution(arr) {
  let lt = 0;
  let i = 0;
  while (i < arr.length) {
    console.log(arr);
    if (arr[lt] > 0) {
      arr.push(Number(arr.splice(lt, 1)));
    } else lt++;

    i++;
  }
  return arr;
}

// sol 2 ) gpt가 제시한 해결법 활용
function solution(arr) {
  const pos = [];
  const neg = [];

  for (x of arr) {
    if (x > 0) pos.push(x);
    else neg.push(x);
  }

  return neg.concat(pos);
}

// sol 3 ) 버블정렬 응용
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}
console.log(solution(arr));
