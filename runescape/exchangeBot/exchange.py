import pyautogui
import random
import time
import keyboard
import openai
from selenium import webdriver
from bs4 import BeautifulSoup
pyautogui.FAILSAFE = False
start = time.time()
openai.api_key = "" #please go get ur own lol

def reset(x,y):
    arbitraryMovement(random.randint(555, 565)+x,random.randint(111, 121)+y,random.uniform(0.68,1.15))
    pyautogui.click()
    inventory_cordinates = random.randint(1, 2)
    for i in range(2):
        pyautogui.click()
        time.sleep(0.2)

def closeBank(x,y):
    arbitraryMovement(random.randint(555, 565)+x,random.randint(111, 121)+y,random.uniform(0.68,1.15))
    pyautogui.click()
    temp = random.randint(1, 2)
    for i in range(temp):
        pyautogui.click()
        time.sleep(0.2)

# checks at least position 0
def normalDeposit(Xi,Xj):
    X_herbArray = [
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
    ]
    Y_herbArray = [
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
    ]
    counter1 = 0

    while (counter1 < 2):
        destiny = random.randint(0, 27)
        if (X_herbArray[destiny] != 0 and Y_herbArray[destiny] != 0):
            arbitraryMovement(
                X_herbArray[destiny]+Xi, Y_herbArray[destiny]+Xj, random.uniform(0.50, 0.150))
            pyautogui.click()
            time.sleep(random.uniform(0.50, 0.150))
            X_herbArray[destiny] = 0
            Y_herbArray[destiny] = 0

            counter1 = counter1+1

    if (X_herbArray[0] != 0):
        arbitraryMovement(
            X_herbArray[0]+Xi, Y_herbArray[0]+Xj, random.uniform(0.50, 0.150))
        pyautogui.click()

# checks at least position 0 and 27
def mediumDeposit(Xi,Xj):
    X_herbArray = [
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
    ]
    Y_herbArray = [
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
    ]
    counter1 = 0

    while (counter1 < 2):
        destiny = random.randint(0, 27)
        if (X_herbArray[destiny] != 0 and Y_herbArray[destiny] != 0):
            arbitraryMovement(
                X_herbArray[destiny]+Xi, Y_herbArray[destiny]+Xj, random.uniform(0.50, 0.150))
            pyautogui.click()
            time.sleep(random.uniform(0.50, 0.150))
            X_herbArray[destiny] = 0
            Y_herbArray[destiny] = 0

            counter1 = counter1+1

    if (X_herbArray[0] != 0):
        arbitraryMovement(
            X_herbArray[0]+Xi, Y_herbArray[0]+Xj, random.uniform(0.50, 0.150))
        pyautogui.click()
    if (X_herbArray[27] != 0):
        arbitraryMovement(
            X_herbArray[0]+Xi, Y_herbArray[0]+Xj, random.uniform(0.50, 0.150))
        pyautogui.click()
 
# checks at least position 0 and 27 and 1 more random spot
def advancedDeposit1(Xi,Xj):
    X_herbArray = [
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
    ]
    Y_herbArray = [
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
    ]

    counter1 = 0

    while (counter1 < 3):
        destiny = random.randint(0, 27)
        if (X_herbArray[destiny] != 0 and Y_herbArray[destiny] != 0):
            arbitraryMovement(
                X_herbArray[destiny]+Xi, Y_herbArray[destiny]+Xj, random.uniform(0.50, 0.150))
            pyautogui.click()
            time.sleep(random.uniform(0.50, 0.150))
            X_herbArray[destiny] = 0
            Y_herbArray[destiny] = 0

            counter1 = counter1+1

    if (X_herbArray[0] != 0):
        arbitraryMovement(
            X_herbArray[0]+Xi, Y_herbArray[0]+Xj, random.uniform(0.50, 0.150))
        pyautogui.click()


    time.sleep(random.uniform(0.601, 0.799))
    if (X_herbArray[27] != 0):
        arbitraryMovement(
            X_herbArray[27]+Xi, Y_herbArray[27]+Xj, random.uniform(0.50, 0.150))
        time.sleep(random.uniform(0.101, 0.199))
        pyautogui.click

# deposit exchanges items
def safeDeposit(Xi,Xj):
    X_herbArray = [
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(576, 586),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(616, 630),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(656, 670),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
        random.randint(699, 716),
    ]
    Y_herbArray = [
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
        random.randint(247, 258),
        random.randint(283, 296),
        random.randint(321, 332),
        random.randint(358, 371),
        random.randint(389, 406),
        random.randint(431, 444),
        random.randint(463, 479),
    ]
    counter1 = 0

    while (counter1 < 2):
        destiny = random.randint(0, 27)
        if (X_herbArray[destiny] != 0 and Y_herbArray[destiny] != 0):
            arbitraryMovement(
                X_herbArray[destiny]+Xi, Y_herbArray[destiny]+Xj, random.uniform(0.50, 0.150))
            pyautogui.click()
            time.sleep(random.uniform(0.50, 0.150))
            X_herbArray[destiny] = 0
            Y_herbArray[destiny] = 0

            counter1 = counter1+1

    if (X_herbArray[0] != 0):
        arbitraryMovement(
            X_herbArray[0]+Xi, Y_herbArray[0]+Xj, random.uniform(0.50, 0.150))
        pyautogui.click()

    if (X_herbArray[7] != 0):
        arbitraryMovement(
            X_herbArray[7]+Xi, Y_herbArray[7]+Xj, random.uniform(0.50, 0.150))
        pyautogui.click()
    sleepsegment()
    if (X_herbArray[14] != 0):
        arbitraryMovement(
            X_herbArray[14]+Xi, Y_herbArray[14]+Xj, random.uniform(0.50, 0.150))
        pyautogui.click()

    sleepsegment()
    arbitraryMovement(
            random.randint(444, 452),random.randint(330, 350), random.uniform(0.50, 0.150))
    pyautogui.click()
    sleepsegment()

# arbitrarymoments
def arbitraryMovement1(x, y, z):
    temp = random.randint(0, 12)
    if temp == 0:
        pyautogui.moveTo(x, y, z, pyautogui.easeInBack)
    elif temp == 1:
        pyautogui.moveTo(x, y, z, pyautogui.easeInBounce)
    elif temp == 2:
        pyautogui.moveTo(x, y, z, pyautogui.easeInCirc)
    elif temp == 3:
        pyautogui.moveTo(x, y, z, pyautogui.easeInCubic)
    elif temp == 4:
        pyautogui.moveTo(x, y, z, pyautogui.easeInElastic)
    elif temp == 5:
        pyautogui.moveTo(x, y, z, pyautogui.easeInExpo)
    elif temp == 6:
        pyautogui.moveTo(x, y, z, pyautogui.easeInOutBack)
    elif temp == 7:
        pyautogui.moveTo(x, y, z, pyautogui.easeInExpo)
    elif temp == 8:
        pyautogui.moveTo(x, y, z, pyautogui.easeInOutBounce)
    elif temp == 9:
        pyautogui.moveTo(x, y, z, pyautogui.easeInOutCirc)
    elif temp == 10:
        pyautogui.moveTo(x, y, z, pyautogui.easeInOutCubic)
    elif temp == 11:
        pyautogui.moveTo(x, y, z, pyautogui.easeInOutElastic)
    elif temp == 12:
        pyautogui.moveTo(x, y, z, pyautogui.easeInOutExpo)
# arbitrarymoments with more precision, less variety

def arbitraryMovement(x, y, z):
    temp = random.randint(0, 7)
    if temp == 1:
        pyautogui.moveTo(x, y, z, pyautogui.easeInBounce)
    elif temp == 2:
        pyautogui.moveTo(x, y, z, pyautogui.easeInCirc)
    elif temp == 3:
        pyautogui.moveTo(x, y, z, pyautogui.easeInCubic)
    elif temp == 4:
        pyautogui.moveTo(x, y, z, pyautogui.easeInExpo)
    elif temp == 5:
        pyautogui.moveTo(x, y, z, pyautogui.easeInOutBounce)
    elif temp == 6:
        pyautogui.moveTo(x, y, z, pyautogui.easeInOutCirc)
    elif temp == 7:
        pyautogui.moveTo(x, y, z, pyautogui.easeInOutCubic)
    elif temp == 0:
        pyautogui.moveTo(x, y, z, pyautogui.easeInOutExpo)

# unpredictability
def sleepsegment():
    temp= random.randint(0,4)
    if temp ==0:
        time.sleep(random.uniform(0.700, 0.800))
    elif temp == 1:
        time.sleep(random.uniform(0.500, 0.900))
    elif temp == 2:
        time.sleep(random.uniform(0.500, 0.600))
    elif temp == 3:
        time.sleep(random.uniform(0.800, 0.900))    
    elif temp == 4:
        time.sleep(random.uniform(0.600, 0.800))  

def enterExchange():
    # 2 seconds to enter randomly the exchange booth
    arbitraryMovement(random.randint(
            176, 184), random.randint(40,100), random.uniform(1.89, 2.11))
    temp = random.randint(1, 2)
    for i in range(temp):
        pyautogui.click()
        time.sleep(0.2)

def enterBank():
    # 2 seconds to enter randomly the bank
    arbitraryMovement(random.randint(
            280, 320), random.randint(170,190), random.uniform(1.89, 2.11))
    temp = random.randint(1, 2)
    for i in range(temp):
        pyautogui.click()
        time.sleep(0.2)

def extraction():

    driver = webdriver.Chrome()
    url = "https://prices.runescape.wiki/osrs/item/2998"
    driver.get(url)

    # Use Beautiful Soup to parse the HTML content of the page
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    price=search[1].text[0:5].replace(",", "")

    if price.isdigit():
        price=int(price)+1
        driver.quit()
        return str(price)
        # insert into function
        #print(price)
    else: 
        #default value
        
        driver.quit()
        return str(price)
        
#items_list={"toadflax":"https://prices.runescape.wiki/osrs/item/2998","avantoe":"https://prices.runescape.wiki/osrs/item/1249"}
def extraction_advanced(itemname):

    driver = webdriver.Chrome()
    url = items_list[itemname] # "https://prices.runescape.wiki/osrs/item/2998"
    driver. get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    search=soup.find_all('span', class_='wgl-item-price')
    price=search[1].text[0:5].replace(",", "")

    if price.isdigit():
        price=int(price)+1
        driver.quit()
        return str(price)
    else: 
        driver.quit()
        return str(price)

def random_thought():
      completion = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=[
      {"role": "user", "content":"say something random about how boring the game runescape is in less than 9 words"}
      ]
      )
      arbitraryMovement(random.randint(0, 560), random.randint(0, 332), 0.5)
      sleepsegment()
      pyautogui.click()
      reply=completion.choices[0].message['content']

      pyautogui.press('enter')
      sleepsegment()

      pyautogui.typewrite("/"+reply, interval=random.uniform(0.79, 1.31))
      sleepsegment()
      pyautogui.press('enter')




#                 0,1, ...                     6, 7
#                                             14,15
#                                   ,19,20,21,22,23
#                                   ,27,28,29,22,31                             
#                                   ,35,36,37,38,39
#                                             46,47
#
#bank cordinates for windows
bank_cordinates=[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]
                ,[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0] 
                ,[0,0],[0,0],[0,0],[235,200],[285,200],[332,200],[380,200],[428,200]
                ,[0,0],[0,0],[0,0],[235,235],[285,235],[332,235],[380,235],[428,235]
                ,[0,0],[0,0],[0,0],[235,270],[285,270],[332,270],[380,270],[428,270]
                ,[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]
                ,[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
  
#inventory cordinates for windows           
inventory_cordinates = [
            [random.randint(576, 586),random.randint(247, 258)]
            ,[random.randint(616, 630),random.randint(247, 258)]
            ,[random.randint(656, 670),random.randint(247, 258)]
            ,[random.randint(699, 716),random.randint(247, 258)]
           
            ,[random.randint(576, 586),random.randint(283, 296)]
            ,[random.randint(616, 630),random.randint(283, 296)]
            ,[random.randint(656, 670),random.randint(283, 296)]
            ,[random.randint(699, 716),random.randint(283, 296)]

            ,[random.randint(576, 586),random.randint(321, 332)]
            ,[random.randint(616, 630),random.randint(321, 332)]
            ,[random.randint(656, 670),random.randint(321, 332)]
            ,[random.randint(699, 716),random.randint(321, 332)]

           ,[random.randint(576, 586), random.randint(358, 371)]
           ,[random.randint(616, 630),random.randint(358, 371)]
           ,[random.randint(656, 670),random.randint(358, 371)]
           ,[random.randint(699, 716),random.randint(358, 371)]

            ,[random.randint(576, 586),random.randint(389, 406)]
            ,[random.randint(616, 630),random.randint(389, 406)]
            ,[random.randint(656, 670),random.randint(389, 406)]
            ,[random.randint(699, 716),random.randint(389, 406)]

            ,[random.randint(576, 586), random.randint(431, 444)]
            ,[random.randint(616, 630), random.randint(431, 444)]
            ,[random.randint(656, 670), random.randint(431, 444)]
            ,[random.randint(699, 716), random.randint(431, 444)]

            ,[random.randint(576, 586), random.randint(463, 479)]
            ,[random.randint(616, 630), random.randint(463, 479)]
            ,[random.randint(656, 670), random.randint(463, 479)]
            ,[random.randint(699, 716), random.randint(463, 479)]
        ]

#exchange booth cordinates for windows
exchange_cordinates=[[[0,0],[0,0],True],[[176,177],[231,177],True],[[302,177],[351,177],True],[[409,177],[466,177],True],
                     [[0,0],[0,0],True],[[176,298],[231,298],True],[[302,298],[351,298],True],[[409,298],[466,298],True]]

auction_cordinates=[]

#collect resources/gold from grand exchange
def collect():
    reset(0,0)
    sleepsegment()
    xlocation = random.randint(290, 300)
    ylocation = random.randint(175,181)
    arbitraryMovement(xlocation, ylocation, 0.3)
    sleepsegment()
    pyautogui.click(button='right')

    sleepsegment()
    arbitraryMovement(xlocation, ylocation + 85, 0.5)
    pyautogui.click()
    sleepsegment()
    arbitraryMovement(random.randint(295, 325), random.randint(295, 300), 0.4)
    pyautogui.click()

    sleepsegment()
    reset(0,0)
    sleepsegment()
    enterBank()
    sleepsegment()

def sell():

    if exchange_cordinates[7][2]==True:

    #7
        arbitraryMovement(random.randint(exchange_cordinates[7][1][0]-10, exchange_cordinates[7][1][0]+10),
                        random.randint(exchange_cordinates[7][1][1]-10, exchange_cordinates[7][1][1]+10),0.7)
        pyautogui.click()

        arbitraryMovement(inventory_cordinates[0][0],inventory_cordinates[0][1]
                        ,0.7)
        pyautogui.click()
        sleepsegment()

        #up 5%
        #arbitraryMovement(random.randint(445, 455), random.randint(235, 245), 0.4)
        #pyautogui.click()
        #sleepsegment()




        arbitraryMovement(random.randint(245, 285), random.randint(309, 321), 0.4)
        pyautogui.click()
        sleepsegment()
        exchange_cordinates[7][2]==False
        sleepsegment()

    if exchange_cordinates[6][2]==True:
    #6
        arbitraryMovement(random.randint(exchange_cordinates[6][1][0]-10, exchange_cordinates[6][1][0]+10),
                        random.randint(exchange_cordinates[6][1][1]-10, exchange_cordinates[6][1][1]+10),0.7)
        pyautogui.click()
        #up 5%
        #arbitraryMovement(random.randint(445, 455), random.randint(235, 245), 0.4)
        #pyautogui.click()
        #sleepsegment()
        arbitraryMovement(random.randint(445, 455), random.randint(235, 245), 0.4)
        pyautogui.click()
        sleepsegment()
        arbitraryMovement(random.randint(245, 285), random.randint(309, 321), 0.4)
        pyautogui.click()
        sleepsegment()    
        exchange_cordinates[6][2]==False
        sleepsegment()

    if exchange_cordinates[5][2]==True:
    #5
        arbitraryMovement(random.randint(exchange_cordinates[5][1][0]-10, exchange_cordinates[5][1][0]+10),
                        random.randint(exchange_cordinates[5][1][1]-10, exchange_cordinates[5][1][1]+10),0.7)
        pyautogui.click()

        arbitraryMovement(inventory_cordinates[2][0],inventory_cordinates[2][1]
                        ,0.7)
        pyautogui.click()
        sleepsegment()
        #up 5%
        #arbitraryMovement(random.randint(445, 455), random.randint(235, 245), 0.4)
        #pyautogui.click()
        #sleepsegment()
        arbitraryMovement(random.randint(245, 285), random.randint(309, 321), 0.4)
        pyautogui.click()
        sleepsegment()  
        exchange_cordinates[5][2]==False
        sleepsegment()

def Combination_One(x):

    for i in range(x):

        X_firstHalf = [
            random.randint(576, 586),
            random.randint(616, 630),
            random.randint(656, 670),
            random.randint(699, 716),
            random.randint(576, 586),
            random.randint(616, 630),
            random.randint(656, 670),
            random.randint(699, 716),
            random.randint(576, 586),
            random.randint(616, 630),
            random.randint(656, 670),
            random.randint(699, 716),
            random.randint(576, 586),
            random.randint(616, 630),
        ]
        X_secondHalf = [
            random.randint(656, 670),
            random.randint(699, 716),
            random.randint(576, 586),
            random.randint(616, 630),
            random.randint(656, 670),
            random.randint(699, 716),
            random.randint(576, 586),
            random.randint(616, 630),
            random.randint(656, 670),
            random.randint(699, 716),
            random.randint(576, 586),
            random.randint(616, 630),
            random.randint(656, 670),
            random.randint(699, 716),
        ]
        Y_firstHalf = [
            random.randint(247, 258),
            random.randint(247, 258),
            random.randint(247, 258),
            random.randint(247, 258),
            random.randint(283, 296),
            random.randint(283, 296),
            random.randint(283, 296),
            random.randint(283, 296),
            random.randint(321, 332),
            random.randint(321, 332),
            random.randint(321, 332),
            random.randint(321, 332),
            random.randint(358, 371),
            random.randint(358, 371),
        ]
        Y_secondHalf = [
            random.randint(358, 371),
            random.randint(358, 371),
            random.randint(389, 406),
            random.randint(389, 406),
            random.randint(389, 406),
            random.randint(389, 406),
            random.randint(431, 444),
            random.randint(431, 444),
            random.randint(431, 444),
            random.randint(431, 444),
            random.randint(463, 479),
            random.randint(463, 479),
            random.randint(463, 479),
            random.randint(463, 479),
        ]

        arbitraryMovement(random.randint(0, 560), random.randint(0, 332), 0.5)

        Choice =random.randint(0,1)
        if Choice==1:
            xlocation = random.randint(380, 382)
            ylocation = random.randint(198 -1, 198+1 )+10
            arbitraryMovement(xlocation, ylocation, 0.3)
            sleepsegment()
            pyautogui.click(button='right')

            sleepsegment()
            arbitraryMovement(xlocation, ylocation + 85, 0.5)
            pyautogui.click()

            sleepsegment()
            arbitraryMovement(
                random.randint(429 - 4, 429 + 4)-96,
                random.randint(198 - 3, 198 + 3), random.uniform(0.25,0.45)
            )
            pyautogui.click()
        else:
            xlocation = random.randint(429 - 4, 429 + 4)-96
            ylocation = random.randint(198 - 3, 198 + 3)
            arbitraryMovement(
                xlocation,
                ylocation, random.uniform(0.25,0.45)
            )
            sleepsegment()
            pyautogui.click(button='right')

            sleepsegment()
            arbitraryMovement(xlocation, ylocation + 85, 0.5)
            pyautogui.click()

            sleepsegment()
            arbitraryMovement(
                random.randint(380, 382),
                random.randint(198 -1, 198+1 ), random.uniform(0.25,0.45)
            )
            pyautogui.click()


        closeBank(0,10)
        sleepsegment()
        temp = random.randint(0, 13)
        arbitraryMovement(X_firstHalf[temp], Y_firstHalf[temp], 0.2)
        pyautogui.click()
        sleepsegment()
        temp2 = random.randint(0, 13)
        arbitraryMovement(
            X_secondHalf[temp2], Y_secondHalf[temp2], 0.2)
        pyautogui.click()
        sleepsegment()
        arbitraryMovement(random.randint(
            227, 290), random.randint(433, 480), 0.2)
        pyautogui.click()
        time.sleep(random.uniform(0.100, 0.200))
        pyautogui.click()
        time.sleep(random.uniform(8.800, 9.200))

        arbitraryMovement(
            random.randint(256, 256 + 97),
            random.randint(190, 190 + 53), 0.5
        )
        pyautogui.click()
        time.sleep(random.uniform(0.634, 0.780))
        moreRandom=random.randint(0,10)
        if moreRandom ==0:
            normalDeposit(0,10)
        elif moreRandom ==1:
            advancedDeposit1(0,10)
        else:
            mediumDeposit(0,10)  
        
        time.sleep(random.uniform(0.634, 0.780))
        end = time.time()
        

def Combination_Two(x):

    for i in range(x):

        X_firstHalf = [
            random.randint(576, 586),
            random.randint(616, 630),
            random.randint(656, 670),
            random.randint(699, 716),
            random.randint(576, 586),
            random.randint(616, 630),
            random.randint(656, 670),
            random.randint(699, 716),
            random.randint(576, 586),
            random.randint(616, 630),
            random.randint(656, 670),
            random.randint(699, 716),
            random.randint(576, 586),
            random.randint(616, 630),
        ]
        X_secondHalf = [
            random.randint(656, 670),
            random.randint(699, 716),
            random.randint(576, 586),
            random.randint(616, 630),
            random.randint(656, 670),
            random.randint(699, 716),
            random.randint(576, 586),
            random.randint(616, 630),
            random.randint(656, 670),
            random.randint(699, 716),
            random.randint(576, 586),
            random.randint(616, 630),
            random.randint(656, 670),
            random.randint(699, 716),
        ]
        Y_firstHalf = [
            random.randint(247, 258),
            random.randint(247, 258),
            random.randint(247, 258),
            random.randint(247, 258),
            random.randint(283, 296),
            random.randint(283, 296),
            random.randint(283, 296),
            random.randint(283, 296),
            random.randint(321, 332),
            random.randint(321, 332),
            random.randint(321, 332),
            random.randint(321, 332),
            random.randint(358, 371),
            random.randint(358, 371),
        ]
        Y_secondHalf = [
            random.randint(358, 371),
            random.randint(358, 371),
            random.randint(389, 406),
            random.randint(389, 406),
            random.randint(389, 406),
            random.randint(389, 406),
            random.randint(431, 444),
            random.randint(431, 444),
            random.randint(431, 444),
            random.randint(431, 444),
            random.randint(463, 479),
            random.randint(463, 479),
            random.randint(463, 479),
            random.randint(463, 479),
        ]

        arbitraryMovement(random.randint(0, 560), random.randint(0, 332), 0.5)

        Choice =random.randint(0,1)
        if Choice==1:
            xlocation = random.randint(380, 382)
            ylocation = random.randint(198 -1, 198+1 )+10
            arbitraryMovement(xlocation, ylocation, 0.3)
            sleepsegment()
            pyautogui.click(button='right')

            sleepsegment()
            arbitraryMovement(xlocation, ylocation + 85, 0.5)
            pyautogui.click()

            sleepsegment()
            arbitraryMovement(
                random.randint(429 - 4, 429 + 4),
                random.randint(198 - 3, 198 + 3), random.uniform(0.25,0.45)
            )
            pyautogui.click()
        else:
            xlocation = random.randint(429 - 4, 429 + 4)
            ylocation = random.randint(198 - 3, 198 + 3)
            arbitraryMovement(
                xlocation,
                ylocation, random.uniform(0.25,0.45)
            )
            sleepsegment()
            pyautogui.click(button='right')

            sleepsegment()
            arbitraryMovement(xlocation, ylocation + 85, 0.5)
            pyautogui.click()

            sleepsegment()
            arbitraryMovement(
                random.randint(380, 382),
                random.randint(198 -1, 198+1 ), random.uniform(0.25,0.45)
            )
            pyautogui.click()


        closeBank(0,10)
        sleepsegment()
        temp = random.randint(0, 13)
        arbitraryMovement(X_firstHalf[temp], Y_firstHalf[temp], 0.2)
        pyautogui.click()
        sleepsegment()
        temp2 = random.randint(0, 13)
        arbitraryMovement(
            X_secondHalf[temp2], Y_secondHalf[temp2], 0.2)
        pyautogui.click()
        sleepsegment()
        arbitraryMovement(random.randint(
            227, 290), random.randint(433, 480), 0.2)
        pyautogui.click()
        time.sleep(random.uniform(0.100, 0.200))
        pyautogui.click()
        time.sleep(random.uniform(8.800, 9.200))

        arbitraryMovement(
            random.randint(256, 256 + 97),
            random.randint(190, 190 + 53), 0.5
        )
        pyautogui.click()
        time.sleep(random.uniform(0.634, 0.780))
        moreRandom=random.randint(0,10)
        if moreRandom ==0:
            normalDeposit(0,10)
        elif moreRandom ==1:
            advancedDeposit1(0,10)
        else:
            mediumDeposit(0,10)  
        
        time.sleep(random.uniform(0.634, 0.780))
        end = time.time()
      

def CombineResources(x):
    while(x>0):
        x=x-1
        decision=random.randint(0,1)
        if decision==0:
            Combination_Two(random.randint(1,20))
        else:
            Combination_One(random.randint(1,20))  

def sell_items():
    
    sleepsegment()
    #note the items
    arbitraryMovement(random.randint(
            190, 210), random.randint(345,355), random.uniform(1.89, 2.11))
    sleepsegment() 
    pyautogui.click()
    sleepsegment()

    chance=random.randint(0,6)

    if chance==0:
        arbitraryMovement(
        random.randint(bank_cordinates[37][0]-5,bank_cordinates[37][0]+5),
        random.randint(bank_cordinates[37][1]-5,bank_cordinates[37][1]+5), random.uniform(1.89, 2.11))
        pyautogui.click()
        sleepsegment()
        arbitraryMovement(
            random.randint(bank_cordinates[27][0]-5,bank_cordinates[27][0]+5),
            random.randint(bank_cordinates[27][1]-5,bank_cordinates[27][1]+5), random.uniform(1.89, 2.11))
        pyautogui.click()
        sleepsegment()
        arbitraryMovement(
            random.randint(bank_cordinates[19][0]-5,bank_cordinates[35][0]+5),
            random.randint(bank_cordinates[19][1]-5,bank_cordinates[35][1]+5), random.uniform(1.89, 2.11))
        pyautogui.click()
        sleepsegment()
    elif chance==1:
        arbitraryMovement(
        random.randint(bank_cordinates[36][0]-5,bank_cordinates[36][0]+5),
        random.randint(bank_cordinates[36][1]-5,bank_cordinates[36][1]+5), random.uniform(1.89, 2.11))
        pyautogui.click()
        sleepsegment()
        arbitraryMovement(
            random.randint(bank_cordinates[27][0]-5,bank_cordinates[27][0]+5),
            random.randint(bank_cordinates[27][1]-5,bank_cordinates[27][1]+5), random.uniform(1.89, 2.11))
        pyautogui.click()
        sleepsegment()
        arbitraryMovement(
            random.randint(bank_cordinates[19][0]-5,bank_cordinates[35][0]+5),
            random.randint(bank_cordinates[19][1]-5,bank_cordinates[35][1]+5), random.uniform(1.89, 2.11))
        pyautogui.click()
        sleepsegment()
    elif chance==2:
        arbitraryMovement(
        random.randint(bank_cordinates[37][0]-5,bank_cordinates[37][0]+5),
        random.randint(bank_cordinates[37][1]-5,bank_cordinates[37][1]+5), random.uniform(1.89, 2.11))
        pyautogui.click()
        sleepsegment()
        arbitraryMovement(
            random.randint(bank_cordinates[35][0]-5,bank_cordinates[35][0]+5),
            random.randint(bank_cordinates[35][1]-5,bank_cordinates[35][1]+5), random.uniform(1.89, 2.11))
        pyautogui.click()
        sleepsegment()
        arbitraryMovement(
            random.randint(bank_cordinates[19][0]-5,bank_cordinates[35][0]+5),
            random.randint(bank_cordinates[19][1]-5,bank_cordinates[35][1]+5), random.uniform(1.89, 2.11))
        pyautogui.click()
        sleepsegment()
    elif chance==3:
        arbitraryMovement(
        random.randint(bank_cordinates[19][0]-5,bank_cordinates[19][0]+5),
        random.randint(bank_cordinates[19][1]-5,bank_cordinates[19][1]+5), random.uniform(1.89, 2.11))
        pyautogui.click()
        sleepsegment()
        arbitraryMovement(
            random.randint(bank_cordinates[27][0]-5,bank_cordinates[27][0]+5),
            random.randint(bank_cordinates[27][1]-5,bank_cordinates[27][1]+5), random.uniform(1.89, 2.11))
        pyautogui.click()
        sleepsegment()
        arbitraryMovement(
            random.randint(bank_cordinates[36][0]-5,bank_cordinates[36][0]+5),
            random.randint(bank_cordinates[36][1]-5,bank_cordinates[36][1]+5), random.uniform(1.89, 2.11))
        pyautogui.click()
        sleepsegment()
    else:
        arbitraryMovement(
        random.randint(bank_cordinates[19][0]-5,bank_cordinates[19][0]+5),
        random.randint(bank_cordinates[19][1]-5,bank_cordinates[19][1]+5), random.uniform(1.89, 2.11))
        pyautogui.click()
        sleepsegment()
        arbitraryMovement(
            random.randint(bank_cordinates[27][0]-5,bank_cordinates[27][0]+5),
            random.randint(bank_cordinates[27][1]-5,bank_cordinates[27][1]+5), random.uniform(1.89, 2.11))
        pyautogui.click()
        sleepsegment()
        arbitraryMovement(
            random.randint(bank_cordinates[35][0]-5,bank_cordinates[35][0]+5),
            random.randint(bank_cordinates[35][1]-5,bank_cordinates[35][1]+5), random.uniform(1.89, 2.11))
        pyautogui.click()
        sleepsegment()

    reset(0,0)
    enterExchange()
    sleepsegment()
    sell()
    reset(0,0)
    enterBank()
    safeDeposit(0,0)











# bulk of the code for rehoabam, a lot of algorithm to be inserted and integrated nested inside
def buy_items():


    sleepsegment()
    #withdraw cash
    arbitraryMovement(
        random.randint(bank_cordinates[20][0]-5,bank_cordinates[20][0]+5),
        random.randint(bank_cordinates[20][1]-5,bank_cordinates[20][1]+5), random.uniform(1.89, 2.11))
    pyautogui.click()
    sleepsegment()
    pyautogui.click()
    sleepsegment()
    reset(0,0)
    enterExchange()
    sleepsegment()

##############################################################################################################################
##############################################################################################################################
    arbitraryMovement(random.randint(exchange_cordinates[1][0][0]-10, exchange_cordinates[1][0][0]+10),
                        random.randint(exchange_cordinates[1][0][1]-10, exchange_cordinates[1][0][1]+10),0.7)
    pyautogui.click()
    sleepsegment()
    pyautogui.typewrite('toadflax\n', interval=random.uniform(1.79, 2.31))
    sleepsegment()
    
    #down 5%
    #arbitraryMovement(random.randint(
    #        280,300 ), random.randint(230,250), random.uniform(1.89, 2.11))   
    #sleepsegment()
    #pyautogui.click()

    #custom price
    sleepsegment()
    arbitraryMovement(random.randint(
            380,400 ), random.randint(230,250), random.uniform(1.89, 2.11))   
    sleepsegment()
    pyautogui.click()

    #insert webscrapped data
    pyautogui.typewrite((extraction()), interval=random.uniform(1.79, 2.31))
    sleepsegment()
    pyautogui.press('enter')
    sleepsegment() 

    #up 5%
    #arbitraryMovement(random.randint(
    #        440,460 ), random.randint(230,250), random.uniform(1.89, 2.11))   
    #sleepsegment()
    #pyautogui.click()   
    arbitraryMovement(random.randint(
            190,200 ), random.randint(230,250), random.uniform(1.89, 2.11))
    rolldices=random.randint(2,3)

    while rolldices>0:
        pyautogui.click()
        time.sleep(random.uniform(0.1,0.45))
        rolldices=rolldices-1

    sleepsegment()
    arbitraryMovement(random.randint(245, 285), random.randint(309, 321), 0.4)
    pyautogui.click()
    sleepsegment()

##############################################################################################################################
##############################################################################################################################

    arbitraryMovement(random.randint(exchange_cordinates[2][0][0]-10, exchange_cordinates[2][0][0]+10),
                        random.randint(exchange_cordinates[2][0][1]-10, exchange_cordinates[2][0][1]+10),0.7)
    pyautogui.click()
    sleepsegment()
    pyautogui.typewrite('kwuarm\n', interval=random.uniform(1.79, 2.31))
    sleepsegment()
    
    #down 5%
    #arbitraryMovement(random.randint(
    #        280,300 ), random.randint(230,250), random.uniform(1.89, 2.11))   
    #sleepsegment()
    #pyautogui.click()
    
    arbitraryMovement(random.randint(
            190,200 ), random.randint(230,250), random.uniform(1.89, 2.11))
    rolldices=random.randint(2,3)

    while rolldices>0:
        pyautogui.click()
        time.sleep(random.uniform(0.1,0.45))
        rolldices=rolldices-1

    sleepsegment()
    arbitraryMovement(random.randint(245, 285), random.randint(309, 321), 0.4)
    pyautogui.click()
    sleepsegment()

#############################################################################################################################
##############################################################################################################################


    arbitraryMovement(random.randint(exchange_cordinates[3][0][0]-10, exchange_cordinates[3][0][0]+10),
                        random.randint(exchange_cordinates[3][0][1]-10, exchange_cordinates[3][0][1]+10),0.7)
    pyautogui.click()
    sleepsegment()
    pyautogui.typewrite('avantoe\n', interval=random.uniform(1.79, 2.31))
    sleepsegment()
    
    #down 5%
    #arbitraryMovement(random.randint(
    #        280,300 ), random.randint(230,250), random.uniform(1.89, 2.11))   
    #sleepsegment()
    #pyautogui.click()
    
    arbitraryMovement(random.randint(
            190,200 ), random.randint(230,250), random.uniform(1.89, 2.11))
    rolldices=random.randint(2,3)

    while rolldices>0:
        pyautogui.click()
        time.sleep(random.uniform(0.1,0.45))
        rolldices=rolldices-1

    sleepsegment()
    arbitraryMovement(random.randint(245, 285), random.randint(309, 321), 0.4)
    pyautogui.click()
    sleepsegment()
    reset(0,0)
    enterBank()

def abort():
    sleepsegment()
    spec=random.randint(261, 327)
    spe1c=random.randint(261, 327)
    spe2c=random.randint(261, 327)
    tru=random.randint(391, 487)
    tru1=random.randint(391, 487)
    durm=random.randint(276, 369)
    durm1=random.randint(276, 369)
    ewer=random.randint(154,246)
    ewer1=random.randint(154,246)
    arbitraryMovement(tru, spec, 0.4)
    sleepsegment()
    pyautogui.click(button='right')
    arbitraryMovement(tru, spec+40, 0.4)
    pyautogui.click()
    sleepsegment()
    arbitraryMovement(durm, spe1c, 0.4)
    sleepsegment()
    pyautogui.click(button='right')
    arbitraryMovement(durm, spe1c+40, 0.4)
    pyautogui.click()
    sleepsegment()
    arbitraryMovement(ewer, spe2c, 0.4)
    sleepsegment()
    pyautogui.click(button='right')
    arbitraryMovement(ewer, spe2c+40, 0.4)
    pyautogui.click()
    bomse=random.randint(142, 204)
    bomse1=random.randint(142, 204)
    bomse2=random.randint(142, 204)
    sleepsegment()
    arbitraryMovement(tru1, bomse, 0.4)
    sleepsegment()
    pyautogui.click(button='right')
    arbitraryMovement(tru1, bomse+40, 0.4)
    pyautogui.click()
    sleepsegment()
    arbitraryMovement(durm1, bomse1, 0.4)
    sleepsegment()
    pyautogui.click(button='right')
    arbitraryMovement(durm1, bomse1+40, 0.4)
    pyautogui.click()
    sleepsegment()
    arbitraryMovement(ewer1, bomse2, 0.4)
    sleepsegment()
    pyautogui.click(button='right')
    arbitraryMovement(ewer1, bomse2+40, 0.4)
    pyautogui.click()
    sleepsegment()

# assign a random cycle arbitrairy 
def recycleExchange():
    reset(0,0)
    enterExchange()
    abort()
    reset(0,0)
    collect()
    enterBank()

def initialize():
    randomThreshold=random.randint(60*60*4,60*60*5.5) #clearly between 4 hours and 5 hours30 minutes
    end = time.time()
    #recycleExchange()
    buy_items()
    sell_items()
    while(end-start<=randomThreshold):
        print("Still stuck in limbo, but the patient heart will wait for an eternity")
        random_thought()
        dice=random.randint(0,360)
        if dice%60==0:
            collect()
        decision=random.randint(0,41)
        if decision==0:
            random_thought()
        if decision==5:
            buy_items()
        if decision==6:
            sell_items()         
        else:
            CombineResources(random.randint(1,2))
        end = time.time()
  


initialize()
