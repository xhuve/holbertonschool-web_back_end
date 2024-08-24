#!/usr/bin/env python3
'''
insert data from mongodb
'''


def schools_by_topic(mongo_collection, topic):
    '''function to insert data from a NoSQL db'''
    return mongo_collection.find({'topics': { '$in': [topic] }})
