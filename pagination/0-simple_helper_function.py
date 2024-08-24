#!/usr/bin/env python3
"""
learning pagination through python
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int]:
    """
    a function that returns the index of
    a given page number, given the item page size
    """
    return ((page - 1) * page_size, page * page_size)
