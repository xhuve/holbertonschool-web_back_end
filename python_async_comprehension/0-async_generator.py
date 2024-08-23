#!/usr/bin/env python3
'''
Python - Async Comprehension
Module
'''
import asyncio
from random import uniform
from typing import Generator


async def async_generator() -> Generator[float]:
    for _ in range(10):
        await asyncio.sleep(1)
        yield uniform(1, 10)