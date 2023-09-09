N, M = map(int, input().split())
CARDS = list(map(int, input().split()))

res = 0;
for i in range(N):
    for j in range(i + 1, N):
        for k in range(j + 1, N):
            cur_res = CARDS[i] + CARDS[j] + CARDS[k]
            if (cur_res > res and cur_res <= M):
                res = cur_res

print(res); 
