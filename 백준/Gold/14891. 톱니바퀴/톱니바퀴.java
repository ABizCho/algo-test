import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

  static int N = 4, M = 8;
  static int IDX_leftContact = 6;
  static int IDX_rightContact = 2;

  static int[] cumRotates = new int[N];
  static boolean[][] gears = new boolean[N][M];

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    for (int i = 0; i < N; i++) {
      String gearLine = br.readLine();
      for (int j = 0; j < M; j++) {
        gears[i][j] = gearLine.charAt(j) == '1';
      }
    }

    int rotateN = Integer.parseInt(br.readLine());
    while (rotateN-- > 0) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      int cur_gear = Integer.parseInt(st.nextToken()) - 1;
      boolean isClockwise = st.nextToken().equals("1");

      boolean[] CROSS_CLOCKWISE =
          (((cur_gear + 1) % 2 == 0) ^ isClockwise) ? new boolean[]{true, false, true, false}
              : new boolean[]{false, true, false, true};

      boolean[][] cur_gears_isClockwise = new boolean[4][3];

      for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 2; j++) {
          int rotatedIdx;

          if (j == 0) {
            rotatedIdx = (IDX_leftContact - cumRotates[i] + M) % M;
            cur_gears_isClockwise[i][0] = gears[i][rotatedIdx];
          } else {
            rotatedIdx = (IDX_rightContact + cumRotates[i] + M) % M;
            cur_gears_isClockwise[i][1] = gears[i][rotatedIdx];
          }
        }
      }

      checked = new boolean[4];
      checkingRotateOrNot(cur_gear, cur_gears_isClockwise);

      for (int i = 0; i < 4; i++) {
        if (cur_gears_isClockwise[i][2]) {
          cumRotates[i] += CROSS_CLOCKWISE[i] ? 1 : -1;
          cumRotates[i] = (cumRotates[i] + M) % M; 
        }
      }
    }

    int res = 0;
    int[] addItems = {1, 2, 4, 8};
    for (int i = 0; i < 4; i++) {
      int rotatedIdx = (0 - cumRotates[i] + M) % M; 
      res += gears[i][rotatedIdx] ? addItems[i] : 0;
    }

    System.out.println(res);
  }

  static boolean[] checked;

  static void checkingRotateOrNot(int checking_gear, boolean[][] cur_gears_isClockWise) {
    cur_gears_isClockWise[checking_gear][2] = true;
    int left_gear = checking_gear - 1;
    int right_gear = checking_gear + 1;

    if (left_gear >= 0 && !checked[left_gear]) {
      int idx_checkingGear_leftContact = (IDX_leftContact - cumRotates[checking_gear] + M) % M;
      int idx_leftGear_rightContact = (IDX_rightContact - cumRotates[left_gear] + M) % M;

      if (gears[checking_gear][idx_checkingGear_leftContact]
          != gears[left_gear][idx_leftGear_rightContact]) {
        checked[left_gear] = true;
        checkingRotateOrNot(left_gear, cur_gears_isClockWise);
      }
    }

    if (right_gear < 4 && !checked[right_gear]) {
      int idx_checkingGear_rightContact = (IDX_rightContact - cumRotates[checking_gear] + M) % M;
      int idx_rightGear_leftContact = (IDX_leftContact - cumRotates[right_gear] + M) % M;

      if (gears[checking_gear][idx_checkingGear_rightContact]
          != gears[right_gear][idx_rightGear_leftContact]) {
        checked[right_gear] = true;
        checkingRotateOrNot(right_gear, cur_gears_isClockWise);
      }
    }
  }
}