from selenium import webdriver
from bs4 import BeautifulSoup



driver = webdriver.Chrome()

def extraction_sell_value():

    url = "https://prices.runescape.wiki/osrs/item/2998"
    driver.get(url)

    # Use Beautiful Soup to parse the HTML content of the page
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    
    
    price=search[1].text[0:5].replace(",", "")
    

    #print(price)
    if price.isdigit():
        price=int(price)

    else: 
        print("default")
    driver.quit()
    return price

def extraction_buy_value():

    url = "https://prices.runescape.wiki/osrs/item/2998"
    driver.get(url)

    # Use Beautiful Soup to parse the HTML content of the page
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    
    
    price=search[0].text[0:5].replace(",", "")
    
    if price.isdigit():
        price=int(price)
    else: 
        #default value
        print("default")

        
    driver.quit()
    return price


print(type(extraction()))