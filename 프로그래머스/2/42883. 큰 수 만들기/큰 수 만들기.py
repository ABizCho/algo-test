def solution(number, k):
    # 스택을 사용하여 문제 해결
    stack = []
    for num in number:
        # 스택이 비어있지 않고, k가 0보다 크고, 스택의 마지막 원소가 현재 숫자보다 작은 경우
        while stack and k > 0 and stack[-1] < num:
            # 스택의 마지막 원소 제거
            stack.pop()
            # k를 1 감소
            k -= 1
        # 스택에 현재 숫자 추가
        stack.append(num)
    # 만약 k가 0보다 크다면, 스택에서 k개의 원소 제거
    stack = stack[:-k] if k > 0 else stack
    # 스택의 원소들을 합쳐서 문자열로 반환
    return ''.join(stack)