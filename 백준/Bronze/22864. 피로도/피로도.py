A, B, C, M = map(int,input().split())

piro = 0
task = 0
STEP = 0

def func_rest(piro):
    piro = piro - C
    if ( piro < 0 ):
        piro = 0
    return piro
    
def func_work(piro, task):    
    piro = piro + A
    task = task + B
    return piro, task

while ( STEP < 24 ):
    if ( func_work(piro, task)[0] > M):
        piro = func_rest(piro)
        STEP += 1
        continue
    piro, task = func_work(piro, task)
    STEP += 1

print(task)

    