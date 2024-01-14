a, b = list(map(int, input().split()))
if ((a + 2) % 3 == 0) or ((a + 2) % 3 == b):
    print('A')
else:
    print('B')

