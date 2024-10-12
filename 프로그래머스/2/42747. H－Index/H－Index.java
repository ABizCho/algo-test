import java.util.Arrays;

class Solution {
    public int solution(int[] citations) {
        int maxCitation = Arrays.stream(citations).max().orElse(0);  // 배열의 최댓값 구하기
        
        for (int h = 0; h <= maxCitation; h++) {
            int countHOrMore = 0;  // h번 이상 인용된 논문의 수
            int countHOrLess = 0;  // h번 이하 인용된 논문의 수

            for (int citation : citations) {
                if (citation >= h) {
                    countHOrMore++;  // h번 이상 인용된 논문
                } else {
                    countHOrLess++;  // h번 이하 인용된 논문
                }
            }

            // H-Index 조건: h번 이상 인용된 논문이 h편 이상인지 확인
            if (countHOrMore >= h && countHOrLess <= citations.length - h) {
                // 조건을 충족할 경우 계속 h 값을 증가시킴
                continue;
            } else {
                // 조건을 만족하지 않으면 마지막 성공한 h - 1을 반환
                return h - 1;
            }
        }
        
        return 0;  // 만약 조건을 만족하지 않으면 0을 반환
    }
}
