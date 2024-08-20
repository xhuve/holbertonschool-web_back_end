#!/usr/bin/env python3
'''
strongly typed python
'''
from typing import List

float_list = List[float]


def sum_list(input_list: float_list) -> float:
    '''
    function that adds 2 values
    '''

    return sum(input_list)
