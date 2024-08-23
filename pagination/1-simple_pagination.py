#!/usr/bin/env python3
"""
a python program that executes a simple pagination
"""
import csv
from typing import List


index_range = __import__('0-simple_helper_function').index_range


class Server:
    """
    Attributes:
        DATA_FILE (str): The file path of the dataset.
    Methods:
        __init__(): Initializes the Server object.
        dataset() -> List[List]: Returns the cached dataset.
        get_page(page: int = 1, page_size: int = 10) -> List[List]:
    Returns a subset of the dataset based on the given page and page size.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
            A function that evaluates if the arguments are correct,
            creates the dataset and returns the required amount of
            list elements
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        start, end = index_range(page, page_size)
        self.dataset()
        return self.__dataset[start:end]
