const input = "5\n2 7\n1 3\n1 2\n2 5\n3 6";

const [N, ...coords] = input
  .split("\n")
  .map((v) => v.split(" ").map((x) => Number(x)));

// 2차원에 대한(좌표) 정렬법
function solution(coords) {
  coords.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]; // x가 같은경우 y정렬
    } else return a[0] - b[0]; // x정렬
  });
  return coords.map((v) => v.join(" ")).join("\n");
}
console.log(solution(coords));
