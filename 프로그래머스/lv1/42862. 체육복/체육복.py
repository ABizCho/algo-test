def solution(n, lost, reserve):
    # 여벌의 체육복을 가져온 학생 중에서 체육복을 도난당한 학생을 찾아서 lost와 reserve에서 제거
    intersection = set(lost) & set(reserve)
    lost = list(set(lost) - intersection)
    reserve = list(set(reserve) - intersection)
    
    # 체육복을 빌려주기
    for r in reserve:
        # 앞번호 학생에게 빌려주기
        if r - 1 in lost:
            lost.remove(r - 1)
        # 뒷번호 학생에게 빌려주기
        elif r + 1 in lost:
            lost.remove(r + 1)
            
    # 전체 학생 수에서 체육복이 없는 학생 수를 빼서 체육 수업을 들을 수 있는 학생 수를 반환
    return n - len(lost)