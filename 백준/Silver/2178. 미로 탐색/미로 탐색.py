from collections import deque

N, M= list(map(int, input().split()))

board = [ list( map(int, input().strip() ) ) for _ in range(N) ]
visited = [[False] * M for _ in range(N)]
dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]

def bfs(x, y):
    queue_toSearch = deque()
    queue_toSearch.append([x, y])
    while queue_toSearch:
        x, y = queue_toSearch.popleft()
        for i_dim in range(4):
            x_to = x + dx[i_dim]
            y_to = y + dy[i_dim]
            
            if x == N - 1 and y == M - 1:
                print(board[N - 1][M - 1])
                break
            
            if ( 0 <= x_to < N and 0 <= y_to < M):
                if ( visited[x_to][y_to] == False and board[x_to][y_to] == 1):
                    visited[x_to][y_to] = True
                    board[x_to][y_to] = board[x][y] + 1
                    queue_toSearch.append([x_to, y_to])
bfs(0, 0)
    