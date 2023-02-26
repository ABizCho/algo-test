const input = "7\n128 460 603 40 521 1235 137 123";

let [N, nums] = input.split("\n");
nums = nums.split(" ");

const start = new Date();

// // sol 1) reduce를 이용한 O(n x m) 풀이 => m은 10,000,000을 넘지 않음 즉, 최대 O(8n)의 풀이 => O(n)의 풀이 == 상수 무시 법칙

// function solution(nums) {
//   let ans = 0;

//   ans = nums.reduce(
//     (max, v, i) => {
//       cur_sum = v.split("").reduce((acc, v) => acc + Number(v), 0);

//       if (max[0] < cur_sum) {
//         return [cur_sum, i];
//       } else if (max[0] === cur_sum) {
//         return Number(v) > Number(nums[max[1]]) ? [cur_sum, i] : max;
//       } else return max;
//     },
//     [Number.MIN_SAFE_INTEGER, -1]
//   );
//   return nums[ans[1]];
// }

// // sol 2)
// function solution(arr) {
//   let ans,
//     max = Number.MIN_SAFE_INTEGER;
//   for (let x of arr) {
//     let sum = x.split("").reduce((a, b) => a + Number(b), 0);
//     if (sum > max) {
//       max = sum;
//       ans = x;
//     } else if (sum === max) {
//       if (Number(x) > ans) ans = x;
//     }
//   }
//   return ans;
// }

// sol 3) cur_sum을 구하는 방식을 10 나누기,mod 연산을 활용
function solution(arr) {
  let ans,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let cur_sum = 0,
      tmp = x;
    while (tmp) {
      cur_sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (cur_sum > max) {
      max = cur_sum;
      ans = x;
    } else if (cur_sum === max) {
      if (Number(x) > ans) ans = x;
    }
  }
  return ans;
}

/* //CHAT GPT가 내놓은 답
function getDigitSum(n) {
  // 주어진 자연수 n의 자릿수 합을 계산하는 함수
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

function findMaxDigitSumNumber(numbers) {
  let maxDigitSum = 0;
  let maxNumber = 0;

  for (let i = 0; i < numbers.length; i++) {
    const digitSum = getDigitSum(numbers[i]);
    if (
      digitSum > maxDigitSum ||
      (digitSum === maxDigitSum && numbers[i] > maxNumber)
    ) {
      maxDigitSum = digitSum;
      maxNumber = numbers[i];
    }
  }

  return maxNumber;
}

// 예시 입력에 대한 실행 예제
const numbers = [128, 460, 603, 40, 521, 1235, 137, 123];
const maxDigitSumNumber = findMaxDigitSumNumber(numbers);
console.log(maxDigitSumNumber); // 137
*/

// time
console.log(solution(nums));

const end = new Date();
console.log(end - start);
