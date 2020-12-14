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

user = {
    "first_name": "Karina",
    "last_name": 'Alvarez',
    "email": 'kalvarez@example.com',
    "employee_id": '0001234',
    "date-created": datetime.datetime.utcnow()
}

user_id = db.users.insert_one(user).inserted_id

print(user_id)

pprint.pprint(db.users.find_one({'employee_id': '0001234'}))