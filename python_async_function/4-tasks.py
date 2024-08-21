#!/usr/bin/env python3
'''
async python
'''
import asyncio

task_wait_random = __import__('3-tasks').task_wait_random


def task_wait_n(max_delay: int) -> asyncio.Task:
    '''
        basics of async
    '''

    return asyncio.create_task(task_wait_random(max_delay))
