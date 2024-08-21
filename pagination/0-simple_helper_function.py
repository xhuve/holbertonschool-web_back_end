"""
learning pagination through python
"""


def index_range(page, page_size):
    """
    a function that returns the index of
    a given page number, given the item page size
    """
    return (page * page_size, (page + 1) * page_size)