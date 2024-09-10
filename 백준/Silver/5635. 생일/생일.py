from datetime import datetime

# 입력
n = int(input())  # 학생 수 입력
students = []

# 학생 정보 입력
for _ in range(n):
    name, dd, mm, yyyy = input().split()
    birthdate = datetime(int(yyyy), int(mm), int(dd))  # 생일을 datetime 객체로 변환
    students.append((name, birthdate))

# 가장 나이가 적은 사람 (최근에 태어난 사람) 찾기
youngest = max(students, key=lambda x: x[1])

# 가장 나이가 많은 사람 (가장 먼저 태어난 사람) 찾기
oldest = min(students, key=lambda x: x[1])

# 출력
print(youngest[0])  # 나이가 적은 사람
print(oldest[0])    # 나이가 많은 사람
