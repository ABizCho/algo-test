import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class PracArr {

  public static void main(String[] args) throws IOException {

    BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

    int I = Integer.parseInt(bf.readLine());
    StringTokenizer st = new StringTokenizer(bf.readLine());

    int[] A = new int[I];

    for (int i = 0; i < I; i++) {
      A[i] = Integer.parseInt(st.nextToken());
    }

    int J = Integer.parseInt(bf.readLine());
    st = new StringTokenizer(bf.readLine());
    int[] M = new int[J];

    for (int i = 0; i < J; i++) {
      M[i] = Integer.parseInt(st.nextToken());
    }

    Arrays.sort(A);

    // -------
    int left = 0;
    int right = A.length;
    int idx = 0;
    while (left <= right) {
      int mid = (left + right) / 2;
    }

    System.out.println(A);

  }

}