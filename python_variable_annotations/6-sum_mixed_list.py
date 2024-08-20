#!/usr/bin/env python3
'''
strongly typed python
'''

float_list = list[float, int]


def sum_mixed_list(input_list: float_list) -> float:
    '''
    function that adds 2 values
    '''

    return sum(input_list)
