A = int(input())
T = int(input())
IS_DEGI = int(input())

# 초기 상태 설정
total_cnt = 8  # 1회차 번, 데기 총 수
STEP = 1  # 확장 회차

# T번째 '뻔' 또는 '데기'가 어느 확장에서 나타나는지 찾음
while True:
    if (total_cnt + 2 > STEP):
        STEP -= 2
        continue
    total_cnt += 2  # 누적합 갱신
    STEP += 1  # 확장 회차 증가


# 해당 확장의 [번, 데기] 총 수 중 몇 번째인지 계산
remaining = T - total_cnt

# 해당 확장에서 누가 외치는지 찾음
if IS_DEGI == 0:
    if remaining <= STEP:
        person = remaining
    else:
        person = remaining - STEP
else:
    if remaining <= STEP:
        person = remaining + STEP
    else:
        person = remaining

# A명의 사람 중에서 몇 번째 사람이 해당 구호를 외치는지 계산
person = (person) % A
print(person)