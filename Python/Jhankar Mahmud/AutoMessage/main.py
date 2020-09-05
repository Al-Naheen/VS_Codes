import pyautogui
import time

message = 15
while message > 0:
    time.sleep(1)
    pyautogui.typewrite('I need you')
    time.sleep(1)
    pyautogui.press('enter')
    message -= 1