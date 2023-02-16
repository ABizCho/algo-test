const input = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];
const n = input.length;
const dp = new Array(power_sum(n) + 1);

//dp insert
dp[0] = input[0][0];

dp[1] = dp[0] + input[1][0];
dp[2] = dp[0] + input[1][1];

dp[3];
dp[4];
dp[5];
dp[6];

let i_input = 2; // input의 1차원 인덱스
let i_dp = 1; //dp의 인덱스
let power = 0;
while (i_input < n) {
  power += 2 ** i_input;
  console.log(`i_input: ${i_input}===`);
  while (i_dp <= power) {
    console.log(`i_dp: ${i_dp}`);
    let j_input = 0;
    while (input[i_input][j_input + 1]) {
      dp[i_dp * 2 + 1] = dp[i_dp] + input[i_input][j_input];
      dp[i_dp * 2 + 2] = dp[i_dp] + input[i_input][j_input + 1];
      j_input++;
    }
    i_dp++;
  }
  i_input++;
}
console.log(`dp : ${dp}`);

function power_sum(n) {
  let sum = 0;
  let i = 1;
  while (i < n) {
    sum += 2 ** i;
    i++;
  }
  return sum;
}
