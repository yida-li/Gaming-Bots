from selenium import webdriver
from bs4 import BeautifulSoup
driver = webdriver.Chrome()

def t0():
    url = "https://prices.runescape.wiki/osrs/item/2998"
    driver.get(url)
    print(driver)

def t1():
    url = "https://prices.runescape.wiki/osrs/item/2998"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    print(soup)


def t2():
    url = "https://prices.runescape.wiki/osrs/item/2998"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    print(search)

def t3():
    url = "https://prices.runescape.wiki/osrs/item/2998"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    price=search[1].text[0:5].replace(",", "")
    print(price)

def t4():
    url = "https://prices.runescape.wiki/osrs/item/2998"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    price=search[1].text[0:5].replace(",", "")
    if price.isdigit():
        print(price)

def t5():
    url = "https://prices.runescape.wiki/osrs/item/2998"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    price=search[1].text[0:5].replace(",", "")
    if price.isdigit():
        price=int(price)
        driver.quit()
    return price

def t6():
    url = "https://prices.runescape.wiki/osrs/item/2998"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    price=search[1].text[0:5].replace(",", "")
    if price.isdigit():
        price=int(price)
    else: 
        print("default")
    driver.quit()
    return price

def s0():
    url = "https://prices.runescape.wiki/osrs/item/1493"
    driver.get(url)
    print(driver)

def s1():
    url = "https://prices.runescape.wiki/osrs/item/1493"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    print(soup)


def s2():
    url = "https://prices.runescape.wiki/osrs/item/1493"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    print(search)

def s3():
    url = "https://prices.runescape.wiki/osrs/item/1493"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    price=search[1].text[0:5].replace(",", "")
    print(price)

def s4():
    url = "https://prices.runescape.wiki/osrs/item/1493"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    price=search[1].text[0:5].replace(",", "")
    if price.isdigit():
        print(price)

def s5():
    url = "https://prices.runescape.wiki/osrs/item/1493"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    price=search[1].text[0:5].replace(",", "")
    if price.isdigit():
        price=int(price)
        driver.quit()
    return price

def s6():
    url = "https://prices.runescape.wiki/osrs/item/1493"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    price=search[1].text[0:5].replace(",", "")
    if price.isdigit():
        price=int(price)
    else: 
        print("default")
    driver.quit()
    return price

def u0():
    url = "https://prices.runescape.wiki/osrs/item/2491"
    driver.get(url)
    print(driver)

def u1():
    url = "https://prices.runescape.wiki/osrs/item/2491"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    print(soup)


def u2():
    url = "https://prices.runescape.wiki/osrs/item/2491"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    print(search)

def u3():
    url = "https://prices.runescape.wiki/osrs/item/2491"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    price=search[1].text[0:5].replace(",", "")
    print(price)

def u4():
    url = "https://prices.runescape.wiki/osrs/item/2491"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    price=search[1].text[0:5].replace(",", "")
    if price.isdigit():
        print(price)

def u5():
    url = "https://prices.runescape.wiki/osrs/item/2491"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    price=search[1].text[0:5].replace(",", "")
    if price.isdigit():
        price=int(price)
        driver.quit()
    return price

def u6():
    url = "https://prices.runescape.wiki/osrs/item/2491"
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    price=search[1].text[0:5].replace(",", "")
    if price.isdigit():
        price=int(price)
    else: 
        print("default")
    driver.quit()
    return price



extraction_log1d=[
t0,t1,t2,t3,t4,t5,t6,
s0,s1,s2,s3,s4,s5,s6,
u0,u1,u2,u3,u4,u5,u6]
extraction_log2d=[
[t0,t1,t2,t3,t4,t5,t6],
[s0,s1,s2,s3,s4,s5,s6],
[u0,u1,u2,u3,u4,u5,u6]]

#extraction_log1d[0]()
#extraction_log2d[0][0]()

def test1(x):
    url = "https://prices.runescape.wiki/osrs/item/"+x
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    price=search[1].text[0:5].replace(",", "")
    if price.isdigit():
        price=int(price)
    else: 
        print("default")
    driver.quit()
    return price


#while(True):
#    test1(random.randint(0,4000))
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