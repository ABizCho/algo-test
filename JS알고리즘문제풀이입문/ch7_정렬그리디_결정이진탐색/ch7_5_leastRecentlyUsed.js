const input = "5 9\n1 2 3 2 6 2 3 5 7";

const [SN, arr] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// sol 1 ) O(N^2) or O(NS), 내장함수 사용한 내 풀이
function solution(S, arr) {
  let cache = Array.from({ length: S }, (v) => 0);
  for (x of arr) {
    if (cache.includes(x)) {
      for (let i = cache.indexOf(x); i > 0; i--) {
        cache[i] = cache[i - 1];
      }
      cache[0] = x;
    } else {
      cache.unshift(x);
      cache.pop();
    }
  }
  return cache.join(" ");
}

// sol 2 ) O(NS)로 개선한 코드
function solution(S, arr) {
  let cache = Array.from({ length: S }, () => 0);
  let pos = -1;
  let n = 0;
  arr.forEach((v) => {
    console.log(cache);
    pos = cache.indexOf(v);
    pos = pos >= 0 ? pos : n;

    while (pos >= 0) {
      cache[pos] = cache[pos - 1];
      pos--;
    }
    cache[0] = v;
    if (n < S - 1) n++;
  });
  return cache;
}

// sol 3 ) sol 2와 접근법은 동일하지만 가독성이 더 나은 정답코드
function solution(S, arr) {
  let ans = Array.from({ length: S }, () => 0);

  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < S; i++) if (x === ans[i]) pos = i;

    if (pos === -1) {
      for (let i = S - 1; i >= 1; i--) {
        ans[i] = ans[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        ans[i] = ans[i - 1];
      }
    }
    ans[0] = x;
  });
  return ans.join(" ");
}

// sol 4 ) set을 이용해 O(N)으로 개선한 코드
// set은 해시 테이블을 사용한 자료구조로 배열과 다르게 add, has, delete 등 메서드가 내부에서 선형이 아닌 해시함수를 이용한 탐색을 수행하여 최악 O(1)탐색
// 모든 데이터가 해시 충돌을 일으키는 최악의 경우 O(n)까지 갈 수 있으나, 드문 경우.
// 따라서, 중복이 없는 자료더미인 경우 set을 고려하는 것이 유리할 듯
function solution(S, arr) {
  const cache = new Set(); // cache set 생성 => 역순으로 쌓아감, res에 넣을 때 정순 삽입
  const result = []; // 결과값 배열 생성

  for (const num of arr) {
    console.log(cache);
    if (cache.has(num)) {
      // num이 cache에 있는 경우
      cache.delete(num); // cache에서 num 삭제
      cache.add(num); // cache의 마지막에 num 추가
    } else {
      // num이 cache에 없는 경우
      if (cache.size === S) {
        // cache가 S개인 경우

        const deletedNum = cache.values().next().value; // cache에서 가장 오래된 num 삭제
        cache.delete(deletedNum);
      }
      cache.add(num); // num 추가
    }
  }

  // Set에서 값을 꺼내서 결과 배열에 추가
  cache.forEach((num) => {
    result.unshift(num); // unshift를 사용하여 오래된 num부터 추가
  });

  return result;
}

console.log(solution(SN[0], arr));
