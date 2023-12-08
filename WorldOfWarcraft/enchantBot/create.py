import pyautogui
import random
import time
import keyboard
pyautogui.FAILSAFE = False
start = time.time()
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

# unpredictability or just lazy coding
def sleepsegment():
    temp= random.randint(0,10)
    if temp ==0:
        time.sleep(random.uniform(0.700, 0.800))
    elif temp == 1:
        time.sleep(random.uniform(0.500, 0.900))
    elif temp == 2:
        time.sleep(random.uniform(0.500, 0.600))
    elif temp == 3:
        time.sleep(random.uniform(0.800, 0.900))    
    elif temp == 4:
        time.sleep(random.uniform(0.600, 0.900)) 
    elif temp == 5:
        time.sleep(random.uniform(2.600, 4.800))  
    elif temp == 6:
        time.sleep(random.uniform(0.600, 0.800))  
    elif temp == 7:
        time.sleep(random.uniform(0.600, 0.800))  
    elif temp == 8:
        time.sleep(random.uniform(1.600, 2.800))  
    elif temp == 9:
        time.sleep(random.uniform(0.300, 0.800))  
    elif temp == 10:
        time.sleep(random.uniform(0.600, 0.800))  
 


#task number
def enchant(x):
    while(x>0):
        sleepsegment()
        print("task left : ",x)
        
        sleepsegment()
        arbitraryMovement1(random.randint(230, 280),random.randint(620, 625),random.uniform(0.68,1.15))
        pyautogui.click()
        time.sleep(10)
        sleepsegment()
        sleepsegment()
        x=x-1



def autopurchase():
    randomThreshold=random.randint(60*60*4.75,60*60*5.5)#clearly between 4 hour,45minutes to 5 hour 30 minutes
    end = time.time()

    while(end-start<=randomThreshold):
        time.sleep(10)
        sleepsegment()
        
        #
        

        #
        dice=random.randint(0,360)
        if dice%10==0:
            print("current cycle time is ", end-start," out of ", randomThreshold)
        end = time.time()


#task number
def disenchant(x):

    bag_cordinate = [
        [random.randint(785-7, 785+7),random.randint(657-6, 657+6)],[random.randint(828-7, 828+7),random.randint(657-6, 657+6)]
       ,[random.randint(873-7, 873+7),random.randint(657-6, 657+6)],[random.randint(915-7, 915+7),random.randint(657-6, 657+6)]
       ,[random.randint(960-7, 960+7),random.randint(657-6, 657+6)],[random.randint(1005-7, 1005+7),random.randint(657-6, 657+6)]
       ,[random.randint(1045-7, 1045+7),random.randint(657-6, 657+6)],[random.randint(1090-7, 1090+7),random.randint(657-6, 657+6)]
       ,[random.randint(1132-7, 1132+7),random.randint(657-6, 657+6)],[random.randint(1179-7, 1179+7),random.randint(657-6, 657+6)]

       ,[random.randint(785-7, 785+7),random.randint(702-6, 702+6)],[random.randint(828-7, 828+7),random.randint(702-6, 702+6)]
       ,[random.randint(873-7, 873+7),random.randint(702-6, 702+6)],[random.randint(915-7, 915+7),random.randint(702-6, 702+6)]
       ,[random.randint(960-7, 960+7),random.randint(702-6, 702+6)],[random.randint(1005-7, 1005+7),random.randint(702-6, 702+6)]
       ,[random.randint(1045-7, 1045+7),random.randint(702-6, 702+6)],[random.randint(1090-7, 1090+7),random.randint(702-6, 702+6)]
       ,[random.randint(1132-7, 1132+7),random.randint(702-6, 702+6)],[random.randint(1179-7, 1179+7),random.randint(702-6, 702+6)]
      ,[random.randint(785-7, 785+7),random.randint(743-6, 743+6)],[random.randint(828-7, 828+7),random.randint(743-6, 743+6)]
       ,[random.randint(873-7, 873+7),random.randint(743-6, 743+6)],[random.randint(915-7, 915+7),random.randint(743-6, 743+6)]
       ,[random.randint(960-7, 960+7),random.randint(743-6, 743+6)],[random.randint(1005-7, 1005+7),random.randint(743-6, 743+6)]
       ,[random.randint(1045-7, 1045+7),random.randint(743-6, 743+6)],[random.randint(1090-7, 1090+7),random.randint(743-6, 743+6)]
       ,[random.randint(1132-7, 1132+7),random.randint(743-6, 743+6)],[random.randint(1179-7, 1179+7),random.randint(743-6, 743+6)]
      ,[random.randint(785-7, 785+7),random.randint(791-6, 791+6)],[random.randint(828-7, 828+7),random.randint(791-6, 791+6)]
       ,[random.randint(873-7, 873+7),random.randint(791-6, 791+6)],[random.randint(915-7, 915+7),random.randint(791-6, 791+6)]
       ,[random.randint(960-7, 960+7),random.randint(791-6, 791+6)],[random.randint(1005-7, 1005+7),random.randint(791-6, 791+6)]
       ,[random.randint(1045-7, 1045+7),random.randint(791-6, 791+6)],[random.randint(1090-7, 1090+7),random.randint(791-6, 791+6)]
       ,[random.randint(1132-7, 1132+7),random.randint(791-6, 791+6)],[random.randint(1179-7, 1179+7),random.randint(791-6, 791+6)]
    ]
    sleepsegment()
    arbitraryMovement1(random.randint(230, 280),random.randint(300, 825),random.uniform(0.68,1.15))
    pyautogui.click()
    counter = 0
    while (counter < x):
        destiny = random.randint(0, x-1)
        if (bag_cordinate[destiny][0]!= 0):
                        sleepsegment()
                        pyautogui.typewrite("1")
                        sleepsegment()
                        arbitraryMovement1(bag_cordinate[destiny][0],bag_cordinate[destiny][1],random.uniform(0.68,1.15))
                        sleepsegment()
                        pyautogui.click(
                            button='left')
                        bag_cordinate[destiny][0] = 0
                        counter = counter+1
                        time.sleep(3)
                        sleepsegment()

def duality():
    choice = input("1 for enchant, 2 for disenchant")
    if choice=="1":
        number = input("how many are we enchanting?")
        number_as_integer = int((number))
        
        enchant(number_as_integer)
    if choice =="2":
        number = input("how many are we disenchanting?")
        number_as_integer = int((number))
        disenchant(number_as_integer)


#TODO
def trinity():
    choice = input("1 for enchant, 2 for disenchant, 3 for auto purchase")
    if choice=="1":
        number = input("how many are we enchanting?")
        number_as_integer = int((number))
        
        enchant(number_as_integer)
    if choice =="2":
        number = input("how many are we disenchanting?")
        number_as_integer = int((number))
        disenchant(number_as_integer)
    if choice =="3":
        selection = input("set type")
        #
        if (selection=="weapons"):
            number_as_integer = int((number))
            disenchant(number_as_integer)





duality()