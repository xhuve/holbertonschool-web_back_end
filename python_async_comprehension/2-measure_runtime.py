#!/usr/bin/env python3
'''
Python - Async Comprehension
Module
'''
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    '''
        fuction that returns a random number per second
    '''
    start = time.time()
    result = await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end = time.time() - start
    return end
