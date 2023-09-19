def solution(num_list, n):
    answer = []
    
    incre = 0
    while (len(num_list) > incre):
        answer.append(num_list[incre])
        incre += n
        
    return answer