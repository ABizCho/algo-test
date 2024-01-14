result = 0
number = int(input())

while True:
    if number == 0:
        break
    result += number % 10
    number = number // 10
print(result)

