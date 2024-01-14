import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class RotateNumArr {

  public static void main(String[] args) throws IOException {
    BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

    int T = Integer.parseInt(bf.readLine());

    for (int idxTest = 1; idxTest < T + 1; idxTest++) {
//      Each Test Cases

      int GRID_LEN = Integer.parseInt(bf.readLine());
      int[][] grid = new int[GRID_LEN][GRID_LEN];

      // read & save grid items
      for (int i = 0; i < GRID_LEN; i++) {
        StringTokenizer st = new StringTokenizer(bf.readLine());
        for (int j = 0; j < GRID_LEN; j++) {
          grid[i][j] = Integer.parseInt(st.nextToken());
        }
      }

      // res
      System.out.printf("#%d\n", idxTest);
      for (int i = 0; i < GRID_LEN; i++) {

        for (int j = 0; j < GRID_LEN; j++) {
          System.out.printf("", idxTest);
        }
      }
    }
  }
}
