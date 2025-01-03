function solution(friends, gifts) {
  // ---------------------------
  // 1. 각 친구별 총 선물 보낸 횟수, 받은 횟수
  // ---------------------------
  const totalGiven = {};    // friendName -> 전체 선물 보낸 횟수
  const totalReceived = {}; // friendName -> 전체 선물 받은 횟수
  // 미리 0으로 초기화
  friends.forEach((f) => {
    totalGiven[f] = 0;
    totalReceived[f] = 0;
  });

  // gifts 배열을 순회하면서 카운팅
  gifts.forEach((g) => {
    const [giver, receiver] = g.split(" ");
    totalGiven[giver] += 1;
    totalReceived[receiver] += 1;
  });

  // ---------------------------
  // 2. 각 친구별 "선물 지수" = (보낸 횟수 - 받은 횟수)
  // ---------------------------
  const giftIndex = {}; // friendName -> 선물 지수
  friends.forEach((f) => {
    giftIndex[f] = totalGiven[f] - totalReceived[f];
  });

  // ---------------------------
  // 3. 친구 쌍 사이 주고받은 선물 횟수를 저장할 자료구조
  //    pairCounts[A][B] = A가 B에게 준 횟수
  // ---------------------------
  // 예: pairCounts["muzi"]["ryan"] = muzi -> ryan 보낸 횟수
  //     pairCounts["ryan"]["muzi"] = ryan -> muzi 보낸 횟수
  const pairCounts = {};
  friends.forEach((f) => {
    pairCounts[f] = {};
    friends.forEach((t) => {
      pairCounts[f][t] = 0;
    });
  });

  gifts.forEach((g) => {
    const [giver, receiver] = g.split(" ");
    pairCounts[giver][receiver] += 1;
  });

  // ---------------------------
  // 4. 다음 달에 받을 선물을 카운팅할 객체
  // ---------------------------
  const nextMonthReceiveCount = {};
  friends.forEach((f) => {
    nextMonthReceiveCount[f] = 0;
  });

  // ---------------------------
  // 5. 모든 친구 쌍(A,B)에 대해 규칙 적용
  //    (A != B 이면 한 번씩만 비교하면 되므로 i < j 같은 방식 활용)
  // ---------------------------
  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const A = friends[i];
      const B = friends[j];

      const AtoB = pairCounts[A][B];
      const BtoA = pairCounts[B][A];

      if (AtoB === 0 && BtoA === 0) {
        // ① 서로 선물을 주고받은 기록이 없거나
        // ② 보낸 횟수가 정확히 같은 경우(AtoB === BtoA) 중 "0인 케이스"
        //    -> giftIndex 비교
        if (giftIndex[A] > giftIndex[B]) {
          nextMonthReceiveCount[A] += 1;
        } else if (giftIndex[A] < giftIndex[B]) {
          nextMonthReceiveCount[B] += 1;
        }
        // giftIndex도 같으면 아무도 못 받음
      } else if (AtoB === BtoA) {
        // 주고받은 수가 '동일'하게 있는 경우
        // -> 역시 giftIndex 비교
        if (giftIndex[A] > giftIndex[B]) {
          nextMonthReceiveCount[A] += 1;
        } else if (giftIndex[A] < giftIndex[B]) {
          nextMonthReceiveCount[B] += 1;
        }
        // 같으면 아무도 못 받음
      } else {
        // AtoB와 BtoA가 다를 때, 더 많이 준 쪽이 선물을 받는다.
        if (AtoB > BtoA) {
          // A가 B에게 준 횟수가 더 많으면 A가 한 번 받음
          nextMonthReceiveCount[A] += 1;
        } else {
          nextMonthReceiveCount[B] += 1;
        }
      }
    }
  }

  // ---------------------------
  // 6. 다음 달에 가장 많은 선물을 받는 친구가 받을 선물 수
  // ---------------------------
  const maxReceive = Math.max(...Object.values(nextMonthReceiveCount));
  return maxReceive;
}


// -----------------------------------------------
// 아래는 간단 테스트용 코드 예시(문제 예시와 비교해 볼 수 있음)
// -----------------------------------------------

// 예시 #1
const friends1 = ["muzi", "ryan", "frodo", "neo"];
const gifts1 = [
  "muzi frodo", "muzi frodo",
  "ryan muzi", "ryan muzi", "ryan muzi",
  "frodo muzi",
  "frodo ryan",
  "neo muzi",
];
console.log(solution(friends1, gifts1)); // 문제 예시에서는 2

// 예시 #2
const friends2 = ["joy", "brad", "alessandro", "conan", "david"];
const gifts2 = [
  "alessandro brad",
  "alessandro joy",
  "alessandro conan",
  "david alessandro",
  "alessandro david",
];
console.log(solution(friends2, gifts2)); // 문제 예시에서는 4

// 예시 #3
const friends3 = ["a", "b", "c"];
const gifts3 = [
  // a-b, b-c, a-c 등 전혀 주고받은 기록이 없거나
  // 보냈어도 서로 횟수가 동일하고 giftIndex도 다 0일 수 있는 상황 가정
  // 문제 예시 #3 처럼 아무도 선물을 못 받게 될 수도 있음
];
console.log(solution(friends3, gifts3)); // 0
