#!/usr/bin/env python3
'''
strongly typed python
'''
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    '''
    type anotated function element_length that
    takes a list of strings and returns a list of tuples
    '''
    return [(i, len(i)) for i in lst]
