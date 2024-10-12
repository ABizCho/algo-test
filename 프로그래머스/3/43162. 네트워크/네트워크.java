import java.util.LinkedList;
import java.util.Queue;

class Solution {
    public int solution(int n, int[][] computers) {
        boolean[] visited = new boolean[n];  // 방문 여부를 체크하는 배열
        int answer = 0;  // 네트워크 개수

        Queue<Integer> q = new LinkedList<>();  // BFS 탐색을 위한 큐

        for (int i = 0; i < n; i++) {
            if (visited[i]) {
                continue;  // 이미 방문한 경우는 넘어감
            }

            q.offer(i);  // 큐에 추가
            visited[i] = true;  // 방문 처리
            answer++;  // 새로운 네트워크 발견

            while (!q.isEmpty()) {
                int current = q.poll();  // 현재 컴퓨터를 큐에서 꺼냄

                for (int j = 0; j < n; j++) {
                    if (computers[current][j] == 0) {
                        continue;  // 연결되지 않은 경우
                    }

                    if (visited[j]) {
                        continue;  // 이미 방문한 경우
                    }

                    // 두 조건을 모두 통과한 경우
                    q.offer(j);  // 큐에 추가
                    visited[j] = true;  // 방문 처리
                }
            }
        }

        return answer;  // 네트워크 개수를 반환
    }
}
