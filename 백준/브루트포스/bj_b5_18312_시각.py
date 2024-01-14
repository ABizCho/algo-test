aN, K = map(int,input().split())
cnt = 0

for h in range(0, N + 1):
    for m in range(0, 60):
        for s in range(0, 60):
            # 각 자릿수를 문자열로 변환하고 하나의 문자열로 합침
            time_str = f"{h:02d}{m:02d}{s:02d}"
            
            # K가 하나라도 포함되면 cnt 증가
            if str(K) in time_str:
                cnt += 1
print(time_str)                
print(cnt)