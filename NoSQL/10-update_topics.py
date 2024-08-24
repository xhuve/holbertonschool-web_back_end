#!/usr/bin/env python3
'''
insert data from mongodb
'''


def update_topics(mongo_collection, name, topics):
    '''function to insert data from a NoSQL db'''
    return mongo_collection.update_many({'name': name}, {'$set': {'topics': topics}})
