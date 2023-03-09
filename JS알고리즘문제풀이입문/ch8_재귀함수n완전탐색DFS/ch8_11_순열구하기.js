const input = "3 2\n3 6 9";

const [NM, arr] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// sol 1) 내풀이 : "뽑아" => TREE 재귀적 DFS
//  중복 허용하지 않는 방법 1: 반복문 내 newResids를 사용해, 원소를 하나씩 뺀 arr을 다음 DFS로 넘겨줌 => 반복문 내 splice 사용 및 새 배열 선언으로 시,공간적 비효율
function solution(M, arr) {
  let ans = [];
  let tmp = Array.from({ length: M }, () => 0);
  function DFS(L, resids) {
    if (L === M) {
      console.log(tmp);
      ans.push(tmp.join(" "));
    } else {
      for (let i = 0; i < resids.length; i++) {
        let newResids = resids.slice();
        newResids.splice(i, 1);
        tmp[L] = resids[i];

        DFS(L + 1, newResids);
      }
    }
  }
  DFS(0, arr);
  return ans.join("\n");
}

// sol 2 )
//  중복 허용하지 않는 방법 1: check배열 사용

function solution(M, arr) {
  let ans = [];
  const tmp = Array.from({ length: M }, () => 0);
  const check = Array.from({ length: arr.length }, () => 0);

  function DFS(L) {
    if (L === M) {
      console.log(tmp);
      ans.push(tmp.join(" "));
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!check[i]) {
          check[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          check[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return ans.join("\n");
}
console.log(solution(NM[1], arr));
