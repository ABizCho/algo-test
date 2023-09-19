import itertools
import math

def func_isPrime(num):
    if num < 2:
        return 0
    
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return 0
    
    return 1

def solution(numbers):
    arr = []
    for cur_comb_len in range(1, len(numbers) + 1): 
        cur_arr = list(itertools.permutations(numbers, cur_comb_len))
        arr.extend(cur_arr)
        # print("cur_arr",cur_arr)
    str_arr = list(map(lambda tup: "".join(tup),arr))
    str_arr = list(set(map(int,str_arr) ))
    # print(str_arr)
    answer = 0
    answer = sum(1 for x in str_arr if func_isPrime(int(x)))
    # print(answer)

    return answer