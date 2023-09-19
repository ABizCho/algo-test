import sys

def solution(sizes):
    max_width = 0
    max_height = 0
    res_total_min = sys.maxsize
    
    for cur_w, cur_h in sizes :
        large, small = max(cur_w, cur_h), min(cur_w, cur_h)

        max_width = max(max_width, large)
        max_height = max(max_height, small)
    
    res_total_min = max_width * max_height
    return res_total_min
