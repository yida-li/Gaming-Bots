
import openai
import pyautogui
import random
import time
import keyboard
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

openai.api_key = "" #please go get ur own lol

wind="Say a random phrase with approximately 10 words about how boring today is?"
def random_thought():
      completion = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=[
      {"role": "user", "content":""+wind+""}
      ]
      )
      arbitraryMovement(random.randint(0, 560), random.randint(0, 332), 0.5)
      sleepsegment()
      pyautogui.click()
      reply=completion.choices[0].message['content']

      pyautogui.press('enter')
      sleepsegment()

      pyautogui.typewrite(""+reply, interval=random.uniform(0.79, 1.31))
      sleepsegment()
      pyautogui.press('enter')

breeze="Can you comment on the following sentence in less than 10 words: "      
def random_thought_reply():
      completion = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=[
      {"role": "user", "content":""+breeze+wind+""}
      ]
      )
      arbitraryMovement(random.randint(0, 560), random.randint(0, 332), 0.5)
      sleepsegment()
      pyautogui.click()
      reply=completion.choices[0].message['content']

      pyautogui.press('enter')
      sleepsegment()

      pyautogui.typewrite(""+reply, interval=random.uniform(0.79, 1.31))
      sleepsegment()
      pyautogui.press('enter')


#takes in 1 sentence and reply another
def random_thought_reply_recursion(x):
      completion = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=[
      {"role": "user", "content":""+breeze+x+""}
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
      return reply

random_thought()
random_thought_reply()
random_thought_reply()
random_thought_reply()
random_thought_reply()
random_thought_reply()
random_thought_reply()
random_thought_reply()
random_thought_reply()
