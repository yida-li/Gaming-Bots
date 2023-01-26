import pyautogui
import random
import time
import keyboard
pyautogui.FAILSAFE = False
start = time.time()




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

def closeBank(x,y):
    arbitraryMovement(random.randint(551, 556)+x,random.randint(111, 125)+y,random.uniform(0.78,1.12))
    pyautogui.click()
    temp = random.randint(1, 2)
    for i in range(temp):
        pyautogui.click()
        time.sleep(0.2)

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

def duoClean(x):    
    for i in range(x):

        arbitraryMovement(random.randint(
            429 - 4, 429 + 4), random.randint(237, 245), random.uniform(1.89, 2.11))

        pyautogui.click(button='left')
        sleepsegment()
        closeBank(0,8)
        arbitraryMovement(random.randint(
            429 - 4, 429 + 4), random.randint(237, 245)+543, random.uniform(1.89, 2.11))

        pyautogui.click(button='left')
        sleepsegment()
        closeBank(0,551)
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
        X_herbArray2 = [
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
        Y_herbArray2 = [
            random.randint(247, 258)+543,
            random.randint(283, 296)+543,
            random.randint(321, 332)+543,
            random.randint(358, 371)+543,
            random.randint(389, 406)+543,
            random.randint(431, 444)+543,
            random.randint(463, 479)+543,
            random.randint(247, 258)+543,
            random.randint(283, 296)+543,
            random.randint(321, 332)+543,
            random.randint(358, 371)+543,
            random.randint(389, 406)+543,
            random.randint(431, 444)+543,
            random.randint(463, 479)+543,
            random.randint(247, 258)+543,
            random.randint(283, 296)+543,
            random.randint(321, 332)+543,
            random.randint(358, 371)+543,
            random.randint(389, 406)+543,
            random.randint(431, 444)+543,
            random.randint(463, 479)+543,
            random.randint(247, 258)+543,
            random.randint(283, 296)+543,
            random.randint(321, 332)+543,
            random.randint(358, 371)+543,
            random.randint(389, 406)+543,
            random.randint(431, 444)+543,
            random.randint(463, 479)+543,
        ]

        counter = 0
        while (counter < 27):

            destiny = random.randint(0, 27)

            if (X_herbArray[destiny] != 0 and Y_herbArray[destiny] != 0):
               # pyautogui.moveTo(X_herbArray[destiny], Y_herbArray[destiny])
                pyautogui.click(
                    button='left', x=X_herbArray[destiny], y=Y_herbArray[destiny])
                # print(destiny)
                X_herbArray[destiny] = 0
                Y_herbArray[destiny] = 0

                counter = counter+1

        counter2 = 0        
        while (counter2 < 27):

            destiny = random.randint(0, 27)

            if (X_herbArray2[destiny] != 0 and Y_herbArray2[destiny] != 0):
               
                pyautogui.click(
                    button='left', x=X_herbArray2[destiny], y=Y_herbArray2[destiny])
                
                X_herbArray2[destiny] = 0
                Y_herbArray2[destiny] = 0

                counter2 = counter2+1
       
        time.sleep(random.uniform(1.234, 1.780))

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
            mediumDeposit(0,10) 
        elif moreRandom ==1:
            advancedDeposit1(0,10)
        else:
            normalDeposit(0,10) 

        pyautogui.moveTo(
            random.randint(256, 256 + 97),
            random.randint(190, 190 + 53)+543,random.uniform(0.5,0.953)
        )
        pyautogui.click(button='left')
        time.sleep(random.uniform(0.100, 0.200))
        pyautogui.click(button='left')
        time.sleep(random.uniform(0.634, 0.780))
        moreRandom=random.randint(0,10)
        if moreRandom ==0:
            mediumDeposit(0,551)
        elif moreRandom ==1:
            advancedDeposit1(0,551)
        else:
            normalDeposit(0,551)  
        #normalDeposit()
        end = time.time()
        print(round((end - start)/60,2),"minutes ")

def duoMix(x):

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
                random.randint(198 - 3, 198 + 3)+10, random.uniform(0.25,0.45)
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



            xlocation = random.randint(380, 382)
            ylocation = random.randint(198 -1, 198+1 )+551
            arbitraryMovement(xlocation, ylocation, 0.3)
            sleepsegment()
            pyautogui.click(button='right')

            sleepsegment()
            arbitraryMovement(xlocation, ylocation + 85, 0.5)
            pyautogui.click()

            sleepsegment()
            arbitraryMovement(
                random.randint(429 - 4, 429 + 4),
                random.randint(198 - 3, 198 + 3)+551, random.uniform(0.25,0.45)
            )
            pyautogui.click()
            closeBank(0,551)
            sleepsegment()
            arbitraryMovement(X_firstHalf[temp], Y_firstHalf[temp]+551, 0.2)
            pyautogui.click()
            sleepsegment()
            arbitraryMovement(
                X_secondHalf[temp2], Y_secondHalf[temp2]+551, 0.2)
            pyautogui.click()
            sleepsegment()
            arbitraryMovement(random.randint(
                227, 290), random.randint(433, 480)+551, 0.2)
            pyautogui.click()
            time.sleep(random.uniform(1.100, 2.200))
            arbitraryMovement(
            random.randint(256, 256 + 97),
            random.randint(190, 190 + 53), 0.5)
            pyautogui.click()
            time.sleep(random.uniform(2.500, 3.700))
            moreRandom=random.randint(0,10)
            if moreRandom ==0:
                mediumDeposit(0,10) 
            elif moreRandom ==1:
                advancedDeposit1(0,10)
            else:
                normalDeposit(0,10)
        else:
            xlocation = random.randint(429 - 4, 429 + 4)
            ylocation = random.randint(198 -1, 198+1 )+10
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
            xlocation = random.randint(429 - 4, 429 + 4)
            ylocation = random.randint(198 - 3, 198 + 3)+551
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
                random.randint(198 -1, 198+1 )+551, random.uniform(0.25,0.45)
            )
            pyautogui.click()
            closeBank(0,551)
            sleepsegment()
            arbitraryMovement(X_firstHalf[temp], Y_firstHalf[temp]+551, 0.2)
            pyautogui.click()
            sleepsegment()
            arbitraryMovement(
                X_secondHalf[temp2], Y_secondHalf[temp2]+551, 0.2)
            pyautogui.click()
            sleepsegment()
            arbitraryMovement(random.randint(
                227, 290), random.randint(433, 480)+551, 0.2)
            pyautogui.click()

            time.sleep(random.uniform(1.100, 2.200))
            arbitraryMovement(
            random.randint(256, 256 + 97),
            random.randint(190, 190 + 53), 0.5)
            pyautogui.click()
            time.sleep(random.uniform(2.400, 3.200))
            moreRandom=random.randint(0,6)
            if moreRandom ==0:
                mediumDeposit(0,10) 
            elif moreRandom ==1:
                advancedDeposit1(0,10)
            else:
                normalDeposit(0,10) 
            

        arbitraryMovement(
            random.randint(256, 256 + 97),
            random.randint(190, 190 + 53)+551, 0.5
        )
        pyautogui.click()
        time.sleep(random.uniform(0.634, 0.780))      
        moreRandom=random.randint(0,10)
        if moreRandom ==0:
            mediumDeposit(0,551)
        elif moreRandom ==1:
            advancedDeposit1(0,551)
        else:
            normalDeposit(0,551)  
        
        time.sleep(random.uniform(0.634, 0.780))
        end = time.time()
        print(round((end - start)/60,2),"minutes ")

def duoCraft(x):

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


            xlocation = random.randint(280, 286)
            ylocation = random.randint(238, 243)
            arbitraryMovement1(xlocation, ylocation+551, 0.3)
            sleepsegment()
            pyautogui.click()

            xlocation = random.randint(329, 333)
            ylocation = random.randint(201, 209)
            arbitraryMovement1(xlocation, ylocation+551, 0.3)
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


        closeBank(0,551)
        sleepsegment()
        temp = 0
        arbitraryMovement1(X_firstHalf[temp], Y_firstHalf[temp]+551, 0.2)
        sleepsegment()
        pyautogui.click()
        sleepsegment()
        temp2 = random.randint(0, 13)
        arbitraryMovement1(
            X_secondHalf[temp2], Y_secondHalf[temp2]+551, 0.2)
        sleepsegment()    
        pyautogui.click()
        sleepsegment()
        arbitraryMovement1(random.randint(
            335, 370), random.randint(443, 481)+551, 0.2)
        pyautogui.click()
        time.sleep(random.uniform(0.100, 0.200))
        pyautogui.click()
        time.sleep(random.uniform(36.800, 38.200))

        arbitraryMovement1(
            random.randint(256, 256 + 97),
            random.randint(190, 190 + 53), 0.5
        )
        pyautogui.click()
        time.sleep(random.uniform(0.634, 0.780))
        
        moreRandom=random.randint(0,10)
        if moreRandom ==0:
            mediumDeposit(0,10) 
        elif moreRandom ==1:
            advancedDeposit1(0,10)
        else:
            normalDeposit(0,10)       
        arbitraryMovement1(
            random.randint(256, 256 + 97),
            random.randint(190, 190 + 53)+551, 0.5
        )
        pyautogui.click()
        time.sleep(random.uniform(0.634, 0.780))
        
        moreRandom=random.randint(0,10)
        if moreRandom ==0:
            mediumDeposit(0,551)
        elif moreRandom ==1:
            advancedDeposit1(0,551)
        else:
            normalDeposit(0,551)  
        time.sleep(random.uniform(0.634, 0.780))
        end = time.time()
        print(round((end - start)/60,2),"minutes ")



def duoFletch(x):

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
        if Choice==0:
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



            xlocation = random.randint(380, 382)
            ylocation = random.randint(198 -1, 198+1 )+596
            arbitraryMovement(xlocation, ylocation, 0.3)
            sleepsegment()
            pyautogui.click(button='right')

            sleepsegment()
            arbitraryMovement(xlocation, ylocation + 85, 0.5)
            pyautogui.click()

            sleepsegment()
            arbitraryMovement(
                random.randint(331 - 4, 331 + 4),
                random.randint(198 - 3, 198 + 3)+596, random.uniform(0.25,0.45)
            )
            pyautogui.click()
            closeBank(0,551)
            sleepsegment()
            arbitraryMovement(X_firstHalf[temp], Y_firstHalf[temp]+551, 0.2)
            pyautogui.click()
            sleepsegment()
            arbitraryMovement(
                X_secondHalf[temp2], Y_secondHalf[temp2]+545, 0.2)
            pyautogui.click()
            sleepsegment()
            arbitraryMovement(random.randint(
                227, 290), random.randint(433, 480)+551, 0.2)
            pyautogui.click()
            time.sleep(random.uniform(0.100, 0.200))
            pyautogui.click()
            time.sleep(random.uniform(10.100, 12.200))
            arbitraryMovement(
            random.randint(256, 256 + 97),
            random.randint(190, 190 + 53), 0.5)
            pyautogui.click()
            time.sleep(random.uniform(2.500, 3.700))
            moreRandom=random.randint(0,10)
            if moreRandom ==0:
                mediumDeposit(0,10) 
            elif moreRandom ==1:
                advancedDeposit1(0,10)
            else:
                normalDeposit(0,10)
        else:
            xlocation = random.randint(331 - 4, 331 + 4)
            ylocation = random.randint(198 -1, 198+1 )+45
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
            xlocation = random.randint(380, 382)
            ylocation = random.randint(198 - 3, 198 + 3)+596
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
                random.randint(331 - 4, 331 + 4),
                random.randint(198 -1, 198+1 )+596, random.uniform(0.25,0.45)
            )
            pyautogui.click()
            closeBank(0,551)
            sleepsegment()
            arbitraryMovement(X_firstHalf[temp], Y_firstHalf[temp]+551, 0.2)
            pyautogui.click()
            sleepsegment()
            arbitraryMovement(
                X_secondHalf[temp2], Y_secondHalf[temp2]+545, 0.2)
            pyautogui.click()
            sleepsegment()
            arbitraryMovement(random.randint(
                227, 290), random.randint(433, 480)+551, 0.2)
            pyautogui.click()
            
            time.sleep(random.uniform(10.100, 12.200))
            arbitraryMovement(
            random.randint(256, 256 + 97),
            random.randint(190, 190 + 53), 0.5)
            pyautogui.click()
            time.sleep(random.uniform(2.400, 3.400))
            moreRandom=random.randint(0,6)
            if moreRandom ==0:
                mediumDeposit(0,10) 
            elif moreRandom ==1:
                advancedDeposit1(0,10)
            else:
                normalDeposit(0,10) 
            

        arbitraryMovement(
            random.randint(256, 256 + 97),
            random.randint(190, 190 + 53)+551, 0.5
        )
        pyautogui.click()
        time.sleep(random.uniform(0.634, 0.780))      
        moreRandom=random.randint(0,10)
        if moreRandom ==0:
            mediumDeposit(0,551)
        elif moreRandom ==1:
            advancedDeposit1(0,551)
        else:
            normalDeposit(0,551)  
        
        time.sleep(random.uniform(0.634, 0.780))
        end = time.time()
        print(round((end - start)/60,2),"minutes ")


def test():
    randomThreshold=random.randint(15000,19111) # between 4 hours and 20 minutes to 5 hours and 18 minutes
    end = time.time()
    while(end-start<=randomThreshold):
        decision=random.randint(0,2)
        if decision==0:
            duoMix(random.randint(1,1))
        if decision==1:
            duoFletch(random.randint(1,1))
        else:
            duoCraft(random.randint(1,1))
        end = time.time()
def test1():
    randomThreshold=random.randint(15000,19111) # between 4 hours and 20 minutes to 5 hours and 18 minutes
    end = time.time()
    while(end-start<=randomThreshold):
        decision=random.randint(0,2)
        if decision==0:
            duoMix(random.randint(1,1))
        if decision==1:
            duoFletch(random.randint(1,1))
        else:
            duoCraft(random.randint(1,99))
        end = time.time()
def test2():
    randomThreshold=random.randint(15000,19111) # between 4 hours and 20 minutes to 5 hours and 18 minutes
    end = time.time()
    while(end-start<=randomThreshold):
        decision=random.randint(0,2)
        if decision==0:
            duoMix(random.randint(1,99))
        if decision==1:
            duoFletch(random.randint(1,1))
        else:
            duoCraft(random.randint(1,1))
        end = time.time()
def test3():
    randomThreshold=random.randint(15000,19111) # between 4 hours and 20 minutes to 5 hours and 18 minutes
    end = time.time()
    while(end-start<=randomThreshold):
        decision=random.randint(0,2)
        if decision==0:
            duoMix(random.randint(1,1))
        if decision==1:
            duoFletch(random.randint(1,99))
        else:
            duoCraft(random.randint(1,1))
        end = time.time()

def trinity():
    randomThreshold=random.randint(15000,19111) # between 4 hours and 20 minutes to 5 hours and 18 minutes
    end = time.time()
    while(end-start<=randomThreshold):
        decision=random.randint(0,3)
        if decision==0 or decision ==3:
            duoMix(random.randint(5,100))
        else:
            duoFletch(random.randint(1,50))
        #else:
        #    duoCraft(random.randint(1,10))
        end = time.time()

#test() 
#test1()
#test2()
#test3()       
#trinity()
#duoMix(10)
trinity()
