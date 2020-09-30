import pyautogui
import time

pyautogui.FAILSAFE = False
for i in range(0, 150):
    time.sleep(3)
    pyautogui.press('tab')
    time.sleep(1)
    pyautogui.press('tab')
    time.sleep(1)
    pyautogui.press('tab')
    time.sleep(2)
    pyautogui.press('enter')