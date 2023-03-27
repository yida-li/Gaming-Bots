from selenium import webdriver
from bs4 import BeautifulSoup

driver = webdriver.Chrome()
driver.get('https://www.bloomberg.com/markets/stocks')

driver = BeautifulSoup(driver.page_source, 'html.parser')
print(driver.find_all('span', class_='data-table-row-cell__value')[0])
print(driver.find_all('span', class_='data-table-row-cell__value')[0].text)
print(driver.find('span', class_='data-table-row-cell__value'))
print(driver.find('span', class_='data-table-row-cell__value').text)
print(float(driver.find('span', class_='data-table-row-cell__value').text.replace(",","")))
