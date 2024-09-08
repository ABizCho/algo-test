import sys

def remove_duplicates_and_sort():
    n = int(sys.stdin.readline())
    numbers = set(map(int, sys.stdin.readline().split()))
    
    sorted_numbers = sorted(numbers)
    
    print(" ".join(map(str, sorted_numbers)))

remove_duplicates_and_sort()
