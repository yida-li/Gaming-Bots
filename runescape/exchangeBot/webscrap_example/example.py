from selenium import webdriver
from bs4 import BeautifulSoup
driver = webdriver.Chrome()


url = "https://www.bloomberg.com/markets/stocks"
driver.get(url)
soup = BeautifulSoup(driver.page_source, 'html.parser')
search=soup.find_all('span', class_='wgl-item-price')
price=search[1].text[0:5].replace(",", "")
if price.isdigit():
    price=int(price)
else: 
    print("default")
driver.quit()