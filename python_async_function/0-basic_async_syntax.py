#!/usr/bin/env python3
'''
async python
'''
import random
import asyncio

async def wait_random(max_delay=10):
    '''
        basics of async
    '''
    delay_time = random.randint(0, max_delay)
    await asyncio.sleep(delay_time)

    return delay_time

