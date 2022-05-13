import pyautogui
import random
import time
import keyboard
pyautogui.FAILSAFE = False
start = time.time()


# arbitrarymoments that defines human logic
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

# arbitrarymoments with more accuracy
def arbitraryMovement(x, y, z):
    temp = random.randint(0, 10)
    if temp == 1:
        pyautogui.moveTo(x, y, z, pyautogui.easeInBounce)
    elif temp == 2:
        pyautogui.moveTo(x, y, z, pyautogui.easeInCirc)
    elif temp == 3:
        pyautogui.moveTo(x, y, z, pyautogui.easeInCubic)
    elif temp == 4:
        pyautogui.moveTo(x, y, z, pyautogui.easeInElastic)
    elif temp == 5:
        pyautogui.moveTo(x, y, z, pyautogui.easeInExpo)
    elif temp == 7:
        pyautogui.moveTo(x, y, z, pyautogui.easeInExpo)
    elif temp == 8:
        pyautogui.moveTo(x, y, z, pyautogui.easeInOutBounce)
    elif temp == 9:
        pyautogui.moveTo(x, y, z, pyautogui.easeInOutCirc)
    elif temp == 10:
        pyautogui.moveTo(x, y, z, pyautogui.easeInOutCubic)
    elif temp == 6:
        pyautogui.moveTo(x, y, z, pyautogui.easeInOutElastic)
    elif temp == 0:
        pyautogui.moveTo(x, y, z, pyautogui.easeInOutExpo)

# arbitrarymoments with more precision
def arbitraryMovement2(x, y, z):
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


def refreshPrayer(x,y):
    arbitraryMovement(random.randint(551, 556)+x,random.randint(111, 125)+10,random.uniform(0.78,1.12))
    
    temp = random.randint(1, 2)
    if temp==1:
        pyautogui.click()
        time.sleep(random.uniform(0.100, 0.300))
        pyautogui.click()
    else:
        pyautogui.click()
        time.sleep(random.uniform(0.100, 0.300))
        pyautogui.click()
        time.sleep(random.uniform(0.100, 0.300))
        pyautogui.click()
        time.sleep(random.uniform(0.100, 0.300))
        pyautogui.click()


def inventory(Xi,Xj):
    x_cordinates = [
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
    y_cordinates = [
        random.randint(247, 258)+10,
        random.randint(283, 296)+10,
        random.randint(321, 332)+10,
        random.randint(358, 371)+10,
        random.randint(389, 406)+10,
        random.randint(431, 444)+10,
        random.randint(463, 479)+10,
        random.randint(247, 258)+10,
        random.randint(283, 296)+10,
        random.randint(321, 332)+10,
        random.randint(358, 371)+10,
        random.randint(389, 406)+10,
        random.randint(431, 444)+10,
        random.randint(463, 479)+10,
        random.randint(247, 258)+10,
        random.randint(283, 296)+10,
        random.randint(321, 332)+10,
        random.randint(358, 371)+10,
        random.randint(389, 406)+10,
        random.randint(431, 444)+10,
        random.randint(463, 479)+10,
        random.randint(247, 258)+10,
        random.randint(283, 296)+10,
        random.randint(321, 332)+10,
        random.randint(358, 371)+10,
        random.randint(389, 406)+10,
        random.randint(431, 444)+10,
        random.randint(463, 479)+10,
    ]


    
    counter1 = 0

    while (counter1 < 19):
        destiny = random.randint(8, 27)
        if (x_cordinates[destiny] != 0 and y_cordinates[destiny] != 0):
            arbitraryMovement(
                x_cordinates[destiny]+Xi, y_cordinates[destiny]+Xj, random.uniform(0.50, 0.150))
            pyautogui.click()
            dice=random.randint(0,4)
            if dice==2:
                refreshPrayer(0,0)
            time.sleep(random.uniform(45.50, 55.150))
            x_cordinates[destiny] = 0
            rocktake()
            y_cordinates[destiny] = 0

            counter1 = counter1+1

def rockcake():
    arbitraryMovement(
               random.randint(576, 586), random.randint(247, 258)+10, random.uniform(0.50, 0.150))
    pyautogui.click()

def rocktake():
    arbitraryMovement(
               random.randint(576, 586), random.randint(247, 258)+10, random.uniform(0.50, 0.150))
    sleepsegment()
    pyautogui.click(button='right')
    sleepsegment()
    arbitraryMovement2(
               random.randint(576, 586), random.randint(247, 258)+55, random.uniform(0.50, 0.150))
    sleepsegment()
    pyautogui.click()

def halfcourse():
    count =4
    while(counter>0):
        count=count-1
        inventory()

