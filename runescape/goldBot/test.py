import pyautogui
import random
import time
import keyboard
pyautogui.FAILSAFE = False
start = time.time()


x=500
y=500
z=1
temp = 6
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

