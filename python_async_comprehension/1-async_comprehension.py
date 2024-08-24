#!/usr/bin/env python3
'''
Python - Async Comprehension
Module
'''
from typing import Generator

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> Generator[float, None, None]:
    '''
        fuction that returns a random number per second
    '''
    return [value for value in async_generator()]
