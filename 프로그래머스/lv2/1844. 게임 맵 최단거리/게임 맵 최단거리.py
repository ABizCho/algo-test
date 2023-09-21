from collections import deque

def solution(maps):
    N, M = len(maps), len(maps[0])  # 행과 열의 크기
    visited = [ [False]*M for _ in range(N) ]  # 방문 여부를 저장하는 배열
    
    dx, dy = [0, 0, -1, 1], [1, -1, 0, 0]  # 4방향 탐색을 위한 배열
    queue_toSearch = deque([(0, 0, 1)])  # x, y 좌표와 그 지점까지의 거리를 저장
    
    while queue_toSearch:
        x, y, distance = queue_toSearch.popleft()
        
        if x == N-1 and y == M-1:  # 목표 지점에 도착한 경우
            return distance
        
        for i_dim in range(4):
            x_to, y_to = x + dx[i_dim], y + dy[i_dim]
            
            # 지도 내부이며, 방문하지 않았고, 벽이 아닌 경우
            if 0 <= x_to < N and 0 <= y_to < M and not visited[x_to][y_to] and maps[x_to][y_to] == 1:
                visited[x_to][y_to] = True
                queue_toSearch.append((x_to, y_to, distance+1))  # 다음 지점과 그 지점까지의 거리 저장

    return -1  # 모든 경로를 탐색했지만 목표 지점에 도달하지 못한 경우