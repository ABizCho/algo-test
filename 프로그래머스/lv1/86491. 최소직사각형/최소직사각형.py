import sys

def solution(sizes):
    answer = sys.maxsize
    
    answer = max(max(x) for x in sizes) * max(min(y) for y in sizes)
    return answer
