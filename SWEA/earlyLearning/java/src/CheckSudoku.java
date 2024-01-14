import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class CheckSudoku {

  public static void main(String[] args) throws IOException {
    BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

    int T = Integer.parseInt(bf.readLine());

    for (int idxTest = 1; idxTest < T + 1; idxTest++) {
      // Each Test Case
      int[][] board = new int[9][9];

      // read board
      for (int i = 0; i < 9; i++) {
        StringTokenizer st = new StringTokenizer(bf.readLine());
        for (int j = 0; j < 9; j++) {
          board[i][j] = Integer.parseInt(st.nextToken());
        }
      }

      System.out.printf("#%d %d\n", idxTest, isValidSudoku(board) ? 1 : 0);
    }
  }

  private static boolean isValidSudoku(int[][] board) {
    for (int i = 0; i < 9; i += 3) {
      for (int j = 0; j < 9; j += 3) {
        if (!checkGrid(board, i, j)) {
          return false;
        }
      }
    }

    for (int i = 0; i < 9; i++) {
      boolean[] rowCheck = new boolean[9];
      boolean[] colCheck = new boolean[9];

      for (int j = 0; j < 9; j++) {
        // Check row and column
        if (!checkCell(board[i][j], rowCheck) || !checkCell(board[j][i], colCheck)) {
          return false;
        }
      }
    }
    return true;
  }

  private static boolean checkGrid(int[][] board, int rowStart, int colStart) {
    boolean[] gridCheck = new boolean[9];
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        if (!checkCell(board[rowStart + i][colStart + j], gridCheck)) {
          return false;
        }
      }
    }
    return true;
  }

  private static boolean checkCell(int number, boolean[] check) {
    if (number < 1 || number > 9 || check[number - 1]) {
      return false;
    }
    check[number - 1] = true;
    return true;
  }
}