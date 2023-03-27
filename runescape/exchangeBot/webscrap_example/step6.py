from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
import time
x = webdriver.Chrome()
while True: 
    
    x.get('https://coinmarketcap.com/coins/')
    x.find_element(By.CSS_SELECTOR, "tr:nth-child(1) .cmc-link .sc-aef7b723-0 > .sc-e225a64a-0").click()
    y = BeautifulSoup(x.page_source, 'html.parser')
    print(y.find('div', class_='priceValue').text)
    time.sleep(2)
    x.get('https://coinmarketcap.com/coins/')
    x.find_element(By.CSS_SELECTOR, "tr:nth-child(2) .cmc-link .sc-aef7b723-0 > .sc-e225a64a-0").click()
    y = BeautifulSoup(driver.page_source, 'html.parser')
    print(y.find('div', class_='priceValue').text)
    time.sleep(2)



