const input = "bacaAacbabcbaabcabc\nabc";
const [src, tar] = input.split("\n");

// // sol 1 ) 슬라이딩윈도우, 해쉬맵 활용한 내 풀이 : O(N)
// function solution(src, tar) {
//   let cnt = 0;
//   let k = tar.length;

//   const sH = new Map();
//   for (x of tar) sH.has(x) ? sH.set(x, sH.get(x) + 1) : sH.set(x, 1);

//   for (let i = 0; i < k; i++) {
//     if (sH.has(src[i])) {
//       sH.set(src[i], sH.get(src[i]) - 1);
//     }
//   }

//   if ([...sH.entries()].filter((v) => v[1] === 0).length === k) {
//     cnt++;
//   }

//   for (let rt = k; rt < src.length; rt++) {
//     sH.has(src[rt]) ? sH.set(src[rt], sH.get(src[rt]) - 1) : sH;
//     sH.has(src[rt - k]) ? sH.set(src[rt - k], sH.get(src[rt - k]) + 1) : sH;
//     if ([...sH.entries()].filter((v) => v[1] === 0).length === k) {
//       cnt++;
//     }
//   }
//   return cnt;
// }

// sol 2 ) 슬라이딩 윈도, 해쉬맵 사용 풀이지만 Map을 두개 사용한 풀이 : O(N)
const cmpMaps = (map1, map2) => {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key)) return false;
    if (map2.get(key) !== val) return false;
  }
  return true;
};

function solution(s, t) {
  let ans = 0;
  let tH = new Map();
  let sH = new Map();

  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  let lt = 0;
  //슬라이딩 윈도우
  for (let rt = len; rt < s.length; rt++) {
    //rt 추가
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);

    //비교
    if (cmpMaps(sH, tH)) ans++;
    sH.set(s[lt], sH.get(s[lt]) - 1);

    //lt 제거
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return ans;
}

console.log(solution(src, tar));
