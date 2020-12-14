# ============================================
# ; Title: Assignment 9.2
# ; Author: Professor Krasso
# ; Modified by: Karina Alvarez
# ; Date: 9 December 2020
# ; Description: Querying and creating documents
# ;===========================================

from pymongo import MongoClient

import pprint
import datetime

client = MongoClient('localhost', 27017)
db = client.web335

db.users.update_one(
    {"employee_id": "0001234"},
    {
        "$set": {
            "email": "karalvarez@my365.bellevue.edu"
        }
    }
)

pprint.pprint(db.users.find_one({"employee_id": "0001234"}, {"email": 1, "employee_id": 1, "first_name": 1, "last_name": 1}))