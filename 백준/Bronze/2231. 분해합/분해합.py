N = input()

res = int(N)
i = int(N)
while ( i > 0 ):
    cur_res = i
    cur_digits = len(str(i))
    
    for idx in range(cur_digits):
        cur_res += int(str(i)[idx])
        
    
    if (int(N) == cur_res and i < res):
        res = i
    i -= 1

if (res == int(N)):
    res = 0
print(res)