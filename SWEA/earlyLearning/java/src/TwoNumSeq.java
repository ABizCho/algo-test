import java.util.Scanner;

// 두 개의 숫자열
class TwoNumSeq {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int T = sc.nextInt();
    int N, M, maxNum, tempSum;
    int[] A, B;
    for (int idxTest = 1; idxTest <= T; idxTest++) {
      maxNum = 0;
      N = sc.nextInt();
      M = sc.nextInt();
      A = new int[N];
      B = new int[M];
      for (int i = 0; i < N; i++) {
        A[i] = sc.nextInt();
      }
      for (int i = 0; i < M; i++) {
        B[i] = sc.nextInt();
      }

      if (N > M) {
        int temp = N;
        N = M;
        M = temp;
        int[] tempArr = A;
        A = B;
        B = tempArr;
      }

      for (int i = 0; i <= Math.abs(M - N); i++) {
        tempSum = 0;
        for (int j = 0; j < N; j++) {
          tempSum += A[j] * B[i + j];
        }
        if (maxNum < tempSum) {
          maxNum = tempSum;
        }
      }

      System.out.printf("#%d %d\n", idxTest, maxNum);

    }
  }
}