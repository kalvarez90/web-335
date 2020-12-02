"""
============================================
; Title:  alvarez_hello_world.py
; Author: Professor Krasso
; Date:   2 December 2020
; Modified by: Karina Alvarez
; Description: First python file
===========================================
"""

#start of program

first_name = 'Karina'
last_name = 'Alvarez'

print(first_name + ' ' + last_name)

#add function - 2 parameters 
def add(number1, number2):
    return number1 + number2

#subtract function - 2 parameters
def subtract(number1, number2):
    return number1 - number2

#division function - 2 parameters
def divide(number1, number2):
    return number1 / number2

print(add(1,2))
print(subtract(4,1))
print(divide(8,2))