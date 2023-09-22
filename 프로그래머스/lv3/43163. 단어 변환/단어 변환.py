from collections import deque
def func_isAdjacent(str1, str2):
    diff = 0 
    for i in range(len(str1)):
        if str1[i] != str2[i]:
            diff += 1
    return diff == 1
    
def solution(begin, target, words):
    if target not in words:
        return 0
    
    visited = [False] * len(words)
    queue_toSearch = deque([( begin, 0 )])
    
    while queue_toSearch:
        current_word, depth = queue_toSearch.popleft()
        if current_word == target:  
            return depth
        
        for i, word in enumerate(words):
            if not visited[i] and func_isAdjacent(current_word, word):
                visited[i] = True
                queue_toSearch.append((word, depth + 1))
    return 0