import pyautogui # pip install pyautogui
# from PIL import Image, ImageGrab # pip install pillow
# # from numpy import asarray
# import time

# def hit(key):
#     pyautogui.keyDown(key)
#     return

# def isCollide(data):
#     # Draw the rectangle for birds
#     for i in range(200, 250):
#         for j in range(360, 420):
#             if data[i, j] < 100:
#                 hit("down")
#                 return

#     for i in range(200, 250):
#         for j in range(330, 355):
#             if data[i, j] < 100:
#                 hit("up")
#                 return
#     return

# if __name__ == "__main__":
#     print("Hey.. Dino game about to start in 3 seconds")
#     time.sleep(2)
#     # hit('up') 

#     while True:
#         image = ImageGrab.grab().convert('L')  
#         data = image.load()
#         isCollide(data)

name = 'Naheen'
print(f"Hello {name}")