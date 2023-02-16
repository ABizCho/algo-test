//sol1
function solution(strs) {
  let max_idx;
  strs.reduce((max_len, cur_s, idx) => {
    if (cur_s.length > max_len) {
      max_idx = idx;
      return cur_s.length;
    }
    return max_len;
  }, 0);

  return strs[max_idx];
}

input = "5\nteacher\ntime\nstudent\nbeautiful\ngood";

[n, ...strs] = input.split("\n");
console.log(solution(strs));
