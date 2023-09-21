def solution(numbers, target):
    
    def DFS(idx, total):
        
        if (idx == len(numbers)):
            return 1 if total == target else 0
        
        return DFS(idx + 1, total + numbers[idx]) + DFS(idx + 1, total - numbers[idx])
        
    return DFS(0, 0)