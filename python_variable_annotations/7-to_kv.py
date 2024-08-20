#!/usr/bin/env python3
'''
strongly typed python
'''
import math
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    '''
    function that adds 2 values
    '''

    return (k, pow(v, 2))
