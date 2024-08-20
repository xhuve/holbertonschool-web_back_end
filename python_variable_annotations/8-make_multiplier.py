#!/usr/bin/env python3
'''
strongly typed python
'''
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    '''
    function that adds 2 values
    '''

    def function(num):
        return multiplier * num
    return function
