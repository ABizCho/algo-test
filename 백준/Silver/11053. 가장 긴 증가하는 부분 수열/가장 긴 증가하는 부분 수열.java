import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(br.readLine());
    String[] input = br.readLine().split(" ");
    int[] arr = new int[n];
    int[] dp = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = Integer.parseInt(input[i]);
    }

    //---logic : 바텀업
    for (int i = 0; i < n; i++) {
      dp[i] = 1;
      for (int j = 0; j < i; j++) {
        if (arr[j] < arr[i] && dp[i] < dp[j] + 1) {
          dp[i] = dp[j] + 1;
        }
      }
    }

    // 최대 길이 찾기
    int max = 0;
    for (int i = 0; i < n; i++) {
      if (max < dp[i]) {
        max = dp[i];
      }
    }

    System.out.println(max);
  }
}
