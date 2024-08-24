#!/usr/bin/env python3
'''
insert data from mongodb
'''


def insert_school(mongo_collection, **kwargs):
    '''function to insert data from a NoSQL db'''
    new_rec = mongo_collection.insertOne(kwargs)
    return new_rec._id
