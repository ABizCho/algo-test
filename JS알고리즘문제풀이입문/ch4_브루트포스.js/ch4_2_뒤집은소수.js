const input = "9\n32 55 62 20 250 370 200 30 100";

let [n, strs] = input.split("\n");
strs = strs.split(" ");

const start = new Date();

const isPrime = (n) => {
  if (n === 1) return 0;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// sol 1 )
function solution(strs) {
  let ans = [];
  let revNums = strs.map((str) => Number(str.split("").reverse().join("")));

  ans = revNums.filter((v) => isPrime(v));
  return ans.join(" ");
}

// // sol 2 )
// function solution(strs) {
//   let ans = [];
//   let nums = strs.map((v) => Number(v));
//   for (x of nums) {
//     let tmp = x;

//     let res = 0;
//     while (x) {
//       tmp = x % 10;
//       res = res * 10 + tmp;
//       x = parseInt(x / 10);
//     }
//     if (isPrime(res)) {
//       ans.push(res);
//     }
//   }
//   return ans;
// }

// time
console.log(solution(strs));
const end = new Date();
console.log(end - start);
