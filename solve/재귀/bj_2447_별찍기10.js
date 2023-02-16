// const num = parseInt("9".toString().trim());
// console.log(num);
//ref : https://chunghyup.tistory.com/68

const fs = require("fs");
num = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let lines = [];
const printStars = (num) => {
  let i = 0;
  let j = 0;
  while (i < num) {
    j = 0;
    while (j < num) {
      star(i, j, num);
      j++;
    }
    lines.push("\n");
    i++;
  }
};

const star = (i, j, num) => {
  //탈출조건 1
  if (i % 3 == 1 && j % 3 == 1) {
    lines.push(" ");
  } else {
    //탈출조건 2
    if (num == 1) lines.push("*");
    //depth++조건
    else star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
  }
};

printStars(num);
console.log(lines.join(""));
