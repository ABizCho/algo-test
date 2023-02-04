const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const ft_strlen = (str) => {
  len = 0;
  while (str[len]) len++;
  return len;
};

const recur = (str, left, right) => {
  if (left >= right) return `${1} ${left + 1}`;
  else if (str[left] != str[right]) return `${0} ${left + 1}`;
  else return recur(str, left + 1, right - 1);
};
const isPalindrome = (str) => {
  return recur(str, 0, ft_strlen(str) - 1);
};

let i = 0;
while (i < n) {
  console.log(isPalindrome(arr[i]));
  i++;
}
