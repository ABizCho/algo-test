from functools import reduce
T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    li = list(map(int, input().split()))
    hol_li = list(filter(lambda x: x % 2 != 0, li ))
    print("#{}".format(test_case), sum(hol_li))