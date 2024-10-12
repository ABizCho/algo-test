import java.util.Arrays;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        
        for (int i = 0; i < commands.length; i++){
            answer[i] = func(array, commands[i]);
        }
        return answer;
    }
    
    private int func(int[] array, int[] command){
        int i = command[0];
        int j = command[1];
        int k = command[2];
        int[] targetArray = Arrays.copyOfRange(array, i - 1, j );
        
        Arrays.sort(targetArray);
        return targetArray[k - 1];
    }
}