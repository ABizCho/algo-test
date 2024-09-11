def check_rect_relation(x1, y1, x2, y2, x3, y3, x4, y4):
    # 완전히 겹치지 않는 경우
    if x2 < x3 or x4 < x1 or y2 < y3 or y4 < y1:
        return 'd'
    # 점에서 만나는 경우
    elif (x2 == x3 and y2 == y3) or (x2 == x3 and y1 == y4) or (x1 == x4 and y2 == y3) or (x1 == x4 and y1 == y4):
        return 'c'
    # 선에서 만나는 경우
    elif x2 == x3 or x1 == x4 or y1 == y4 or y2 == y3:
        return 'b'
    # 직사각형이 겹치는 경우
    else:
        return 'a'

# 4개의 테스트 케이스 처리
for _ in range(4):
    x1, y1, x2, y2, x3, y3, x4, y4 = map(int, input().split())
    print(check_rect_relation(x1, y1, x2, y2, x3, y3, x4, y4))
