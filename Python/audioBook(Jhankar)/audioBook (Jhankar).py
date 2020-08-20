import pyttsx3
import PyPDF2

book = open('toPdf.pdf','rb')
pdfReader = PyPDF2.PdfFileReader(book)
pages = pdfReader.numPages
print(pages)

# for num in range(7,pages):
friend = pyttsx3.init()
page = pdfReader.getPage(0)
text = page.extractText()
friend.say(text)
friend.runAndWait()