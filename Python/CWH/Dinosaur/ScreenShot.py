from PIL import Image, ImageGrab # pip install pillow
import time

def takeScreenShot():
    image = ImageGrab.grab()
    image.show()

if __name__ == "__main__":
    time.sleep(2)
    takeScreenShot()