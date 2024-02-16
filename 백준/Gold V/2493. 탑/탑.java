import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {

  static class Tower {

    int height;
    int idx;

    public Tower(int height, int idx) {
      this.height = height;
      this.idx = idx;
    }
  }

  public static void main(String[] args) throws IOException {
    Stack<Tower> stack = new Stack<>();

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int N = Integer.parseInt(br.readLine());

    StringBuilder sb = new StringBuilder();
    StringTokenizer st = new StringTokenizer(br.readLine());
    for (int idx = 1; idx <= N; idx++) {
      int cur_height = Integer.parseInt(st.nextToken());

      while (!stack.isEmpty() && stack.peek().height < cur_height) {
        stack.pop();
      }

      sb.append(stack.isEmpty() ? "0" : stack.peek().idx);

      stack.push(new Tower(cur_height, idx));

      if (idx == N) {
        continue;
      }
      sb.append(" ");

    }

    System.out.println(sb.toString());
  }
}