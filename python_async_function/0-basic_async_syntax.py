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
    delay_time = random.uniform(0, float(max_delay))
    await asyncio.sleep(delay_time)

    return delay_time

