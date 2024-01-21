import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();
    int N = Integer.parseInt(br.readLine());
    int[] arrNum = new int[N];

    for (int i = 0; i < N; i++) {
      arrNum[i] = Integer.parseInt(br.readLine());
    }

    Arrays.sort(arrNum);

    for (int i = 0; i < N; i++) {
      sb.append(arrNum[i]).append('\n');
    }

    System.out.print(sb.toString());
  }
}