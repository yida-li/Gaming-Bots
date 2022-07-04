import pyautogui
import random
import time
import keyboard
pyautogui.FAILSAFE = False
start = time.time()


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

    while (counter1 < 4):
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


def SoloClean(x):    
    for i in range(x):

        arbitraryMovement(random.randint(
            429 - 4, 429 + 4), random.randint(237, 245), random.uniform(1.89, 2.11))

        pyautogui.click(button='left')
        sleepsegment()
        closeBank(0,8)
        # print('phase')
        sleepsegment()
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

        counter = 0
        while (counter < 27):

            destiny = random.randint(0, 27)

            if (X_herbArray[destiny] != 0 and Y_herbArray[destiny] != 0):

                pyautogui.click(
                    button='left', x=X_herbArray[destiny], y=Y_herbArray[destiny])

                X_herbArray[destiny] = 0
                Y_herbArray[destiny] = 0

                counter = counter+1

        time.sleep(random.uniform(2.4000, 2.500))

        pyautogui.moveTo(
            random.randint(256, 256 + 97),
            random.randint(190, 190 + 53),random.uniform(0.5,0.953)
        )
        pyautogui.click(button='left')
        time.sleep(random.uniform(0.100, 0.200))
        pyautogui.click(button='left')
        time.sleep(random.uniform(0.634, 0.780))
        moreRandom=random.randint(0,10)
        if moreRandom ==0:
            normalDeposit(0,0)
        elif moreRandom ==1:
            advancedDeposit1(0,0)
        else:
            bankAll(0,10)  

        end = time.time()
        print(round((end - start)/60,2),"minutes ")

def SoloMix(x):

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
                random.randint(198 - 3, 198 + 3)+8, random.uniform(0.25,0.45)
            )
            pyautogui.click()
        else:
            xlocation = random.randint(429 - 4, 429 + 4)
            ylocation = random.randint(198 - 3, 198 + 3)+8
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
                random.randint(198 -1, 198+1 )+8, random.uniform(0.25,0.45)
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
            bankAll(0,10)  
        
        time.sleep(random.uniform(0.634, 0.780))
        end = time.time()
        print(round((end - start)/60,2),"minutes ")

def SoloFletch(x):

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
            random.randint(SoloFletch
SoloFletch699, 716),
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

        arbitraryMovement(random.randint(0, 560), random.randint(0, 332), 0.5)

        Choice =random.randint(0,1)
        if Choice==1:
            xlocation = random.randint(380, 382)
            ylocation = random.randint(198 -1, 198+1 )+45
            arbitraryMovement(xlocation, ylocation, 0.3)
            sleepsegment()
            pyautogui.click(button='right')

            sleepsegment()
            arbitraryMovement(xlocation, ylocation + 85, 0.5)
            pyautogui.click()

            sleepsegment()
            arbitraryMovement(
                random.randint(331 - 4, 331 + 4),
                random.randint(198 - 3, 198 + 3)+45, random.uniform(0.25,0.45)
            )
            pyautogui.click()
        else:
            xlocation = random.randint(331 - 4, 331 + 4)
            ylocation = random.randint(198 - 3, 198 + 3)+45
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
                random.randint(198 -1, 198+1 )+45, random.uniform(0.25,0.45)
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
        time.sleep(random.uniform(14.690, 16.200))

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
            bankAll(0,10)  
        
        time.sleep(random.uniform(0.634, 0.780))
        end = time.time()
        print(round((end - start)/60,2),"minutes ")



def bankAll(x,y):
            arbitraryMovement( 
                    random.randint(437, 458)+x,random.randint(333, 349)+y, random.uniform(0.2,0.5))
            pyautogui.click() 
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
            xlocation = random.randint(280, 286)
            ylocation = random.randint(238, 243)
            arbitraryMovement1(xlocation, ylocation, 0.3)
            sleepsegment()
            pyautogui.click()

            xlocation = random.randint(329, 333)
            ylocation = random.randint(201, 209)
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
        sleepsegment()
        pyautogui.click()
        sleepsegment()
        temp2 = random.randint(0, 13)
        arbitraryMovement1(
            X_secondHalf[temp2], Y_secondHalf[temp2], 0.2)
        sleepsegment()    
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
        
        moreRandom=random.randint(0,10)
        if moreRandom ==0:
            normalDeposit(0,0)
        elif moreRandom ==1:
            advancedDeposit1(0,0)
        else:
            bankAll(0,10)        
        time.sleep(random.uniform(0.634, 0.780))
        end = time.time()
        print(round((end - start)/60,2),"minutes ")


def singularity(x):

    while(x>0):
        randomThreshold=random.randint(6969,9696) # between 4 hours and 20 minutes to 5 hours and 18 minutes
        end = time.time()
        while(start-end<=randomThreshold):
            SoloCraft(1)
            end = time.time()
def duality():

    randomThreshold=random.randint(15000,19111) # between 4 hours and 20 minutes to 5 hours and 18 minutes
    end = time.time()
    while(start-end<=randomThreshold):
        decision=random.randint(0,1)
        if decision==0:
            SoloMix(random.randint(50,99))
        else:
            SoloClean(random.randint(50,100))
        end = time.time()


        
def trinity():

    randomThreshold=random.randint(15000,19111) # between 4 hours and 20 minutes to 5 hours and 18 minutes
    end = time.time()
    while(end-start<=randomThreshold):
        decision=random.randint(0,2)
        if decision==0:
            SoloMix(random.randint(50,200))
        elif decision==1:
            SoloClean(random.randint(25,50))
        else:
            SoloCraft(random.randint(5,25))
        end = time.time()
def quadruple():

    randomThreshold=random.randint(15000,19111) # between 4 hours and 20 minutes to 5 hours and 18 minutes
    end = time.time()
    while(end-start<=randomThreshold):
        decision=random.randint(0,3)
        if decision==0:
            SoloMix(random.randint(50,200))
        elif decision==1:
            SoloClean(random.randint(25,50))
        elif decision==2;
            SoloFletch(random.randint(5,15))
        else:
            SoloCraft(random.randint(5,25))
        end = time.time()
               

