Set.prototype.union = function (setB) {
  var union = new Set(this);
  for (var elem of setB) {
    union.add(elem);
  }
  return union;
};

let set = new Set([1, 2]);

const set1 = [1, 2];
const set2 = [2, 5];
const set3 = [5, 1];
const set4 = [6, 1];
const set5 = [5, 8];
const set6 = [7, 9];

in_arr_sets = [set1, set2, set3, set4, set5, set6];
res_arr_sets = [set];

const dfs = () => {
  let n = 0;
  let i = 0;
  let flag = 0;
  while (n < 6) {
    i = 0;
    flag = 0;
    while (i < 2) {
      if (set.has(in_arr_sets[n][i])) {
        set = set.union(new Set(in_arr_sets[n]));
        flag = 1;
        break;
      }
      if (!flag) {
        set;
      }
      i++;
    }
    n++;
  }
  console.log(set);
};

dfs();
