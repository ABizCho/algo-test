N = int(input())  # 입력 받기
res = 0  # 결과를 저장할 변수

# 생성자의 시작 범위를 N - 9 * len(str(N))로 제한
for i in range(max(0, N - 9 * len(str(N))), N):
    cur_res = i
    cur_digits = str(i)  # 문자열로 변환

    # 분해합 계산
    for digit in cur_digits:
        cur_res += int(digit)

    # 생성자를 찾은 경우
    if cur_res == N:
        res = i
        break

print(res)

############# 복잡도

import math

N = 1000000  # N을 1,000,000으로 설정
result = N * math.log10(N)  # N log_{10} N 계산

print("N log_{10} N =", result)