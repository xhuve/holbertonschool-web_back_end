#!/usr/bin/env python3
'''
strongly typed python
'''
from typing import List, Union

def sum_mixed_list(input_list: List[Union[int, float]]) -> float:
    '''
    function that adds 2 values
    '''

    return sum(input_list)
