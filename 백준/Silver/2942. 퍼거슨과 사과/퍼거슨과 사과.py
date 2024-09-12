import math

def greatest_common_divisor(number_a, number_b):
    return math.gcd(number_a, number_b)

def get_divisors(number):
    divisors = []

    for i in range(1, int(math.sqrt(number)) + 1):
        if number % i == 0:
            divisors.append(i)  
            
            if i != number // i:
                divisors.append(number // i)
    divisors.sort()
    return divisors

red_apples, green_apples = map(int, input().split())

greatest_common_divisor_value = greatest_common_divisor(red_apples, green_apples)

divisors = get_divisors(greatest_common_divisor_value)

for divisor in divisors:
    print(divisor, red_apples // divisor, green_apples // divisor)