def solution(n, lost, reserve):
    intersection = set(lost) & set(reserve)
    lost = list(set(lost) - intersection)
    reserve = list(set(reserve) - intersection)
    
    for r in reserve :
        if r - 1 in lost :
            lost.remove(r-1)
        elif r + 1 in lost :
            lost.remove(r+1)
    
            
    answer = n - len(lost)
    return answer