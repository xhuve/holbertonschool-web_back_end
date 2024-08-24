#!/usr/bin/env python3
'''
Retrieve data from mongodb
'''


def list_all(mongo_collection):
    '''function to retrieve data from a NoSQL db'''
    return [record for record in mongo_collection.find()]