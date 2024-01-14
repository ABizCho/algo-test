import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Mode {

  public static void main(String[] args) throws IOException {
    BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

    int T = Integer.parseInt(bf.readLine());

    for (int idxTest = 1; idxTest < T + 1; idxTest++) {
      // TestCases
      int[] arrCntScores = new int[101];

      StringTokenizer st = new StringTokenizer(bf.readLine());
      for (int idxScore = 0; idxScore < 1000; idxScore++) {
        arrCntScores[Integer.parseInt(st.nextToken())] += 1;
      }

      int maxVal = Integer.MIN_VALUE;
      int maxIdx = Integer.MIN_VALUE;
      for (int curIdx = 0; curIdx < arrCntScores.length; curIdx++) {
        if (maxVal <= arrCntScores[curIdx]) {
          maxVal = arrCntScores[curIdx];
          maxIdx = curIdx;
        }
      }
      System.out.printf("#%d %d\n", idxTest, maxIdx);
    }
  }
}
