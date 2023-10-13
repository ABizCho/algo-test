def solution(people, limit):
    people.sort()  # 사람들의 몸무게를 정렬합니다.
    
    answer = 0  # 필요한 구명보트의 수를 저장합니다.
    light = 0  # 가장 가벼운 사람의 인덱스를 가리킵니다.
    heavy = len(people) - 1  # 가장 무거운 사람의 인덱스를 가리킵니다.
    
    # 가벼운 사람과 무거운 사람의 인덱스가 교차할 때까지 루프를 실행합니다.
    while light <= heavy:
        # 가장 가벼운 사람과 가장 무거운 사람을 같이 태울 수 있으면
        if people[light] + people[heavy] <= limit:
            light += 1  # 가장 가벼운 사람의 다음 사람으로 이동합니다.
        # 가장 무거운 사람을 혼자 태웁니다.
        heavy -= 1  # 가장 무거운 사람의 다음 사람으로 이동합니다.
        answer += 1  # 구명보트의 수를 증가시킵니다.
    
    return answer