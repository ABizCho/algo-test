import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

  public static int calcSum(int A, int B){
    int result = A + B;
    return result;
  }
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());
    
    int A = Integer.parseInt(st.nextToken());
    int B = Integer.parseInt(st.nextToken());
    
    int result = calcSum(A, B);
    System.out.println(result);
    
  }
}
