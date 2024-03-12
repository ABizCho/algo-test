import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

  static int N, L;
  static int[][] board;

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    StringTokenizer st = new StringTokenizer(br.readLine());
    N = Integer.parseInt(st.nextToken());
    L = Integer.parseInt(st.nextToken());

    board = new int[N][N];
    for (int i = 0; i < N; i++) {
      st = new StringTokenizer(br.readLine());
      for (int j = 0; j < N; j++) {
        board[i][j] = Integer.parseInt(st.nextToken());
      }
    }

    int res = 0;
    for (int i = 0; i < N; i++) {
      if (checkRow(i)) {
        res++;
      }
      if (checkCol(i)) {
        res++;
      }
    }

    System.out.println(res);
  }

  private static boolean checkRow(int row) {
    boolean[] visited = new boolean[N];

    for (int i = 0; i < N - 1; i++) {
      if (board[row][i] != board[row][i + 1]) {
        int diff = board[row][i] - board[row][i + 1];

        if (diff == 1) {
          for (int j = i + 1; j <= i + L; j++) {
            if (j >= N || board[row][j] != board[row][i + 1] || visited[j]) {
              return false;
            }
            visited[j] = true;
          }
        } else if (diff == -1) {
          for (int j = i; j > i - L; j--) {
            if (j < 0 || board[row][j] != board[row][i] || visited[j]) {
              return false;
            }
            visited[j] = true;
          }
        } else {
          return false;
        }
      }
    }
    return true;
  }

  private static boolean checkCol(int col) {
    boolean[] visited = new boolean[N];

    for (int i = 0; i < N - 1; i++) {
      if (board[i][col] != board[i + 1][col]) {
        int diff = board[i][col] - board[i + 1][col];

        if (diff == 1) {
          for (int j = i + 1; j <= i + L; j++) {
            if (j >= N || board[j][col] != board[i + 1][col] || visited[j]) {
              return false;
            }
            visited[j] = true;
          }
        } else if (diff == -1) {
          for (int j = i; j > i - L; j--) {
            if (j < 0 || board[j][col] != board[i][col] || visited[j]) {
              return false;
            }
            visited[j] = true;
          }
        } else {
          return false;
        }
      }
    }
    return true;
  }
}