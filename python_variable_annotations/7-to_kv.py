#!/usr/bin/env python3
'''
strongly typed python
'''
import math
from typing import List, Union


def to_kv(k: str, v: Union[int, float]) -> tuple:
    '''
    function that adds 2 values
    '''

    return (k, pow(v, 2))
