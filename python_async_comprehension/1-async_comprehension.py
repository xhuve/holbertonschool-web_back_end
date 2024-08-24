#!/usr/bin/env python3
'''
Python - Async Comprehension
Module
'''
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    '''
        fuction that returns a random number per second
    '''
    return [value for value in async_generator()]
