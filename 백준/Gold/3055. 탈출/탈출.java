import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.StringTokenizer;

public class Main {
    static int n, m;
    static char[][] map;
    static int[] dx = {1, 0, -1, 0};
    static int[] dy = {0, 1, 0, -1};

    static ArrayDeque<Node> waterQueue = new ArrayDeque<>();
    static ArrayDeque<Node> hedgeHogQueue = new ArrayDeque<>();
    static boolean[][] visited;

    public static void main(String[] args) throws Exception {
        initializeGame();
        System.out.println(solve());
    }

    private static void initializeGame() throws Exception {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(bf.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        map = new char[n][m];
        visited = new boolean[n][m];

        for (int i = 0; i < n; i++) {
            String line = bf.readLine();
            for (int j = 0; j < m; j++) {
                map[i][j] = line.charAt(j);
                switch (map[i][j]) {
                    case '*':
                        waterQueue.add(new Node(i, j));
                        break;
                    case 'S':
                        hedgeHogQueue.add(new Node(i, j));
                        visited[i][j] = true;
                        break;
                }
            }
        }
    }

    private static String solve() {
        int time = 0;
        while (!hedgeHogQueue.isEmpty()) {
            moveWater();
            if (moveHedgehog()) return String.valueOf(time + 1);
            if (hedgeHogQueue.isEmpty()) return "KAKTUS";
            time++;
        }
        return "KAKTUS";
    }

    private static void moveWater() {
        int size = waterQueue.size();
        for (int i = 0; i < size; i++) {
            Node water = waterQueue.poll();
            for (int j = 0; j < 4; j++) {
                int ny = water.y + dy[j];
                int nx = water.x + dx[j];
                if (nx >= 0 && nx < m && ny >= 0 && ny < n && map[ny][nx] == '.') {
                    map[ny][nx] = '*';
                    waterQueue.add(new Node(ny, nx));
                }
            }
        }
    }

    private static boolean moveHedgehog() {
        int size = hedgeHogQueue.size();
        for (int i = 0; i < size; i++) {
            Node hog = hedgeHogQueue.poll();
            for (int j = 0; j < 4; j++) {
                int ny = hog.y + dy[j];
                int nx = hog.x + dx[j];
                if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                    if (map[ny][nx] == 'D') return true;
                    if (!visited[ny][nx] && map[ny][nx] == '.') {
                        visited[ny][nx] = true;
                        hedgeHogQueue.add(new Node(ny, nx));
                    }
                }
            }
        }
        return false;
    }

    static class Node {
        int y, x;

        Node(int y, int x) {
            this.y = y;
            this.x = x;
        }
    }
}
