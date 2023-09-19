from math import ceil

def func_calcDayOfTask(progress, speed):
    remainder_task = (100 - progress)
    return ceil(remainder_task / speed)
    
def solution(progresses, speeds):
    answer = []
    
    daysOfFin = [func_calcDayOfTask(p, s) for p, s in zip(progresses, speeds)]
    
    cnt = 1
    max_day = daysOfFin[0]
    
    for i in range(1, len(daysOfFin)):
        if max_day >= daysOfFin[i]:
            cnt += 1
        else:
            answer.append(cnt)
            cnt = 1
            max_day = daysOfFin[i]
            
    answer.append(cnt)
    
    return answer