from selenium import webdriver
driver = webdriver.Chrome()
driver.get('https://www.bloomberg.com/markets/stocks')
print(driver.page_source)