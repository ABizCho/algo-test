from itertools import product

n, k_num = map(int, input().split())
len_max = len(str(n))
k = list(input().split())

while True:
    tmp_combs = list(product(k, repeat = len_max)) 
    res = []

    for comb in tmp_combs:
        cur_val = int("".join(comb))
        if cur_val <= n:
            res.append(cur_val)
    
    if len(res) >= 1:
        print(max(res))
        break
    
    else:
        len_max -= 1