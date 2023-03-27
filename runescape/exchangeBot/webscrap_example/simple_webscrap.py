from selenium import webdriver
from bs4 import BeautifulSoup
driver = webdriver.Chrome()


url = "https://www.bloomberg.com/markets/stocks"
driver.get(url)
soup = BeautifulSoup(driver.page_source, 'html.parser')
soup=soup.find_all('span', class_='data-table-row-cell__value')

print(soup[0])
print(soup[1])
print(soup[2])
print(soup[3])
print(soup[4])
