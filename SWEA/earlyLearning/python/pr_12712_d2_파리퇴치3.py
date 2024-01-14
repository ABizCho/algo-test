T = int(input())

for test_case in range(T): # 테케 반복

	N, M = map(int, input().split())

	Xj = [1, 1, -1, -1]
	Xi = [-1, 1, -1, 1]

	Tj = [1, 0, -1, 0]
	Ti = [0, 1, 0, -1]
    
	board = []
	for _ in range(N):
		board.append(list(map(int, input().split())))
	
	res = 0
	for j in range(N):
		for i in range(N):
			X_sum = board[j][i]
			T_sum = board[j][i]

			for pos in range(4):
				for m in range(1, M):

					a = j + Tj[pos] * m
					b = i + Ti[pos] * m
					
					c = j + Xj[pos] * m
					d = i + Xi[pos] * m
 
                    # 인덱스 범위 체크
					if -1 < a < N and -1 < b < N:
						T_sum += board[a][b]
						
					if -1 < c < N and -1 < d < N:
						X_sum += board[c][d]
						
			res = max(res, X_sum, T_sum)
	print(f'#{test_case+1}:',res)

