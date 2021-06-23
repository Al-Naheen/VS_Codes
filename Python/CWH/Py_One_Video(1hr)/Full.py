# import cv2
# import math

# This is a comment
# print("Hello world")
# print(math.gcd(3,6))
'''
This is a multi line comment

'''
# This is also a comment
# print(5+8)
# if(age<18):
#     print("hello")


a = 34
b = "Harry"
c = 45.32
d = 3

# print(a + d)
# print(a - d)
# print(a * d)
# print(a / d)

# Quiz: Try these operators:
# 1. ** Exponentiation operator
# 2. // Floor division operator
# 3. %  Modulo operator

# Wrong syntax
# harry project = 45 
# Rules for creating variables

# 1. variable should start wioth a letter or an underscore
# 2. variable cannot start with a number
# 3. It can only contain alpha numeric characters
# 4. Variable names are case sensitive. Harry and harry are two different variables

# typeA = type(a)
# typeB = type(b)
# print(typeB)
e = "31"
e = float(e)
# e = str(455)
# e = int("34")
# e = 3.14
# print(type(e))
# print(e+2)


name = "Harry, Shubham, vikrant"
# print(name[2:5])
# print(name)
# print(name.strip())
# print(len(name))
var = name.lower()
var = name.upper()
var = name.replace("ar", "t")
var = name.replace(", ", '\n')
# print(var)

stri = "This is a "
name1 = "Harry"
name2 = "Rohan"
stri2 = "This is not a"
# print(stri + name)
# temp = "This is a {1} and he is a good boy named {0}".format(name1, name2)
temp = f"this is a {name2} and he is a good boy {name1}"
# print(temp)

'''
Python Collections:
1. List
2. Tuple
3. Set
4. Dictionary

'''
# List
lst = [61,2,3,4,6,41]
# var = type(lst)
# lst[2] = 45
# var = lst[2]
# lst.append(100)
# lst.insert(1,100)
# lst.remove(61)
# lst.pop()
# del lst[3]
# del lst
lst.clear()
var = lst
# var = len(lst)
# var = lst[1:4]
# print(var)


# Tuple
a = ("Harry", "Shubh", "Rohan")
# var = a
a = list(a)
var = type(a)

# Cannot do this
a[0] = "Vikrant" 
# print(var)

# Set
s1 = {23,2,2,2,2,2,7,3,2,1,2,2,12,7,6,3,12,}
# s1.add(44444)
# s1.update([12,12,423,3423,634,123,432,23])
# print(len(s1))
# s1.remove(1666)
# Like list you can use: .pop, .clear, del
# and.. intersection, union
# s1.discard(1666)
# print(s1)

harryDict = {
    "Name": "Harry",
    "Class": "4th",
    "Marks": 34.34,
    "Hours In School": 6
}
harryDict["Marks"] = 34
# print(harryDict["Marks"])
harryDict.pop("Marks")
# del, clear, pop, update
# print(harryDict)

# age = 34
# age = input("Enter Your Age\n")
# age = int(age)
# # print(type(age))
# if(age>18):
#     print("You can drive a car")

# elif(age==18):
#     print("You are an awesome teen")

# else:
#     print("You cannot drive")    


# Loops:
# Scenario: you have to print numbers between 1 to 1000
# for i in range(0, 1000):
#     print(i)

# li = [1, 432, "this"]
# for item in li:
#     print(item)
# # Quiz: Use for loop to iterate dictionary, set and tuples  
# i = 0
# while(i<100):
#     i = i + 1
#     if i == 78:
#         continue
#     print(i+1)

# Functions:
# def greet():
#     print("Good morning sir")
#     print("Good morning mam")
#     print("Good morning Uncle")

# greet()     

# def sum(a, b):
#     print("Running sum")
#     c = a + b
#     return c

# d = sum(34, 45)
# print(d)

class Employee:
    def __init__(self, gname, gsalary):
        self.name = gname
        self.salary = gsalary

harry = Employee("harry", 34)
print(harry.name)
print(harry.salary)
