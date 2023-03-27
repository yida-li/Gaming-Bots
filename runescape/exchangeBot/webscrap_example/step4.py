from selenium import webdriver

from bs4 import BeautifulSoup

yida = webdriver.Chrome()
yida.get('https://coinmarketcap.com/currencies/ethereum')
yida = BeautifulSoup(yida.page_source, 'html.parser')
print(yida.find_all('div', class_='priceValue')[0].text)