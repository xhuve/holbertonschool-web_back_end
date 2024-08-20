#!/usr/bin/env python3
'''
strongly typed python
'''

type List = List[float]

def sum_list(input_list: List) -> float:
    '''
    function that adds 2 values
    '''

    return sum(input_list)