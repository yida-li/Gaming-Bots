from selenium import webdriver #testing coen448
from bs4 import BeautifulSoup #ai course  model   <--> make analogy between cloths
x = webdriver.Chrome()
a = "https://www.bloomberg.com/markets/stocks"
x.get(a)
b = BeautifulSoup(x.page_source, 'html.parser')
b=b.find_all('span', class_='data-table-row-cell__value')
print(b[0].text)
print(b[1].text)
print(b[2].text)
print(b[3].text)
print(b[4].text)