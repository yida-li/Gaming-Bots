import pyautogui
import random
import time
import keyboard
pyautogui.FAILSAFE = False
start = time.time()


#Store just resources

def closeBank(x,y):
    arbitraryMovement(random.randint(551, 556)+x,random.randint(111, 125)+y,random.uniform(0.78,1.12))
    pyautogui.click()
    temp = random.randint(1, 2)
    for i in range(temp):
        pyautogui.click()
        time.sleep(0.2)

def login(i,j):
    check=pyautogui.locateOnScreen('authenticatorRecognition/login.png')
    time.sleep(random.uniform(3.3, 3.780))
    if check:
        pyautogui.leftClick(x=449+i,y=319+j,duration=1)
        check2=pyautogui.locateOnScreen('authenticatorRecognition/enterusername.png')
        time.sleep(random.uniform(3.3, 3.780))    
        if check2:
            pyautogui.leftClick(x=357+i,y=291+j,duration=1)
            pyautogui.typewrite('password',interval=1)
            pyautogui.leftClick(x=312+i,y=349+j,duration=1)
            pyautogui.moveTo(random.randint(0,700),random.randint(0,200))
            time.sleep(random.uniform(5.3, 6.780))        
            pyautogui.leftClick(x=371+i,y=348+j,duration=2)
            check4=pyautogui.locateOnScreen('authenticatorRecognition/clickhere.png')
            time.sleep(random.uniform(3.3, 3.780))
            if not check4:
                pyautogui.keyDown('down')
                time.sleep(random.uniform(1.3, 2.380))
                pyautogui.keyUp('down')
                pyautogui.moveTo(x=51+i,y=142+j,duration=1)
                
                pyautogui.dragTo(x=227+i,y=147+j,duration=2,button='right')

def logout(i,j):
    closeBank()
    time.sleep(random.uniform(1.3, 2.380))
    arbitraryMovement(random.randint(640,647)+i,random.randint(502,517)+j,random.uniform(0.5,1.5))
    time.sleep(random.uniform(1.3, 2.380))
    pyautogui.leftClick()
    time.sleep(random.uniform(1.3, 2.380))
    arbitraryMovement(random.randint(607,689)+i,random.randint(453,463)+j,random.uniform(0.5,1.5))
    pyautogui.leftClick()
# VPN located in the middle of screen
def checkVPN():
    check=pyautogui.locateOnScreen('authenticatorRecognition/forti.png')
    if check:
        pyautogui.leftClick(x=1434,y=525,duration=2)
        pyautogui.typewrite('password', interval=1)
        pyautogui.leftClick(x=1490,y=587,duration=1)

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
        destiny = random.randint(1, 27)
        if (X_herbArray[destiny] != 0 and Y_herbArray[destiny] != 0):
            arbitraryMovement(
                X_herbArray[destiny]+Xi, Y_herbArray[destiny]+Xj, random.uniform(0.50, 0.150))
            pyautogui.click()
            time.sleep(random.uniform(0.50, 0.150))
            X_herbArray[destiny] = 0
            Y_herbArray[destiny] = 0

            counter1 = counter1+1



# decadence
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

    while (counter1 < 7):
        destiny = random.randint(1, 27)
        if (X_herbArray[destiny] != 0 and Y_herbArray[destiny] != 0):
            arbitraryMovement(
                X_herbArray[destiny]+Xi, Y_herbArray[destiny]+Xj, random.uniform(0.50, 0.150))
            pyautogui.click()
            time.sleep(random.uniform(0.50, 0.150))
            X_herbArray[destiny] = 0
            Y_herbArray[destiny] = 0

            counter1 = counter1+1


    time.sleep(random.uniform(0.601, 0.799))
    if (X_herbArray[17] != 0):
        arbitraryMovement(
            X_herbArray[10]+Xi, Y_herbArray[10]+Xj, random.uniform(0.50, 0.150))
        pyautogui.click()

    time.sleep(random.uniform(0.601, 0.799))
    if (X_herbArray[27] != 0):
        arbitraryMovement(
            X_herbArray[27]+Xi, Y_herbArray[27]+Xj, random.uniform(0.50, 0.150))
        time.sleep(random.uniform(0.101, 0.199))
        pyautogui.click

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
# arbitrarymoments
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


def SoloCraft(x):

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
            random.randint(247, 258)+8,
            random.randint(247, 258)+8,
            random.randint(247, 258)+8,
            random.randint(247, 258)+8,
            random.randint(283, 296)+8,
            random.randint(283, 296)+8,
            random.randint(283, 296)+8,
            random.randint(283, 296)+8,
            random.randint(321, 332)+8,
            random.randint(321, 332)+8,
            random.randint(321, 332)+8,
            random.randint(321, 332)+8,
            random.randint(358, 371)+8,
            random.randint(358, 371)+8,
        ]
        Y_secondHalf = [
            random.randint(358, 371)+8,
            random.randint(358, 371)+8,
            random.randint(389, 406)+8,
            random.randint(389, 406)+8,
            random.randint(389, 406)+8,
            random.randint(389, 406)+8,
            random.randint(431, 444)+8,
            random.randint(431, 444)+8,
            random.randint(431, 444)+8,
            random.randint(431, 444)+8,
            random.randint(463, 479)+8,
            random.randint(463, 479)+8,
            random.randint(463, 479)+8,
            random.randint(463, 479)+8,
        ]

        arbitraryMovement1(random.randint(0, 560), random.randint(0, 332), 0.5)

        Choice = 1
        if Choice==1:
            xlocation = random.randint(329, 333)
            ylocation = random.randint(201, 209 )
            arbitraryMovement1(xlocation, ylocation, 0.3)
            sleepsegment()
            pyautogui.click()
            sleepsegment()

        else: 
            # future potentials

            xlocation = random.randint(429 - 4, 429 + 4)
            ylocation = random.randint(198 - 3, 198 + 3)+8
            arbitraryMovement1(
                xlocation,
                ylocation, random.uniform(0.25,0.45)
            )
            sleepsegment()
            pyautogui.click(button='right')

            sleepsegment()
            arbitraryMovement1(xlocation, ylocation + 85, 0.5)
            pyautogui.click()

            sleepsegment()
            arbitraryMovement1(
                random.randint(380, 382),
                random.randint(198 -1, 198+1 )+8, random.uniform(0.25,0.45)
            )
            pyautogui.click()


        closeBank(0,10)
        sleepsegment()
        temp = 0
        arbitraryMovement1(X_firstHalf[temp], Y_firstHalf[temp], 0.2)
        pyautogui.click()
        sleepsegment()
        temp2 = random.randint(0, 13)
        arbitraryMovement1(
            X_secondHalf[temp2], Y_secondHalf[temp2], 0.2)
        pyautogui.click()
        sleepsegment()
        arbitraryMovement1(random.randint(
            335, 370), random.randint(443, 481), 0.2)
        pyautogui.click()
        time.sleep(random.uniform(0.100, 0.200))
        pyautogui.click()
        time.sleep(random.uniform(33.800, 35.200))

        arbitraryMovement1(
            random.randint(256, 256 + 97),
            random.randint(190, 190 + 53), 0.5
        )
        pyautogui.click()
        time.sleep(random.uniform(0.634, 0.780))
        
        moreRandom=random.randint(0,7)
        if moreRandom !=0:
            normalDeposit(0,0)
        else:
            advancedDeposit1(0,0)
        
        time.sleep(random.uniform(0.634, 0.780))
        end = time.time()
        print(end - start)



def bankAll(x,y):
            arbitraryMovement( 
                    random.randint(437, 458)+x,random.randint(333, 349)+y, random.uniform(0.2,0.5))
            pyautogui.click() 


SoloCraft(100)