# import requests
# from bs4 import BeautifulSoup

# with open("Billboard Hot 100 – Billboard.html") as file:
#     file = file.read()

# soup = BeautifulSoup(file, 'html.parser')
# list100 = soup.find_all(name="h3", class_="c-title")
# all100 = [item.getText() for item in list100]
# print(all100.getText())
from django import path
from django.http import HttpResponse
from pygame import pygame_dir
ali = [0,1]

for i in range(10):
    a = ali[-1]
    b = ali[-2]
    c =  a + b
    ali.append(c)
print(ali)
