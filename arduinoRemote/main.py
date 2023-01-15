import serial
from driver import Remote

ser = serial.Serial("COM7", 9600)

remote = Remote('chromedriver.exe')

while True:
     cc=str(ser.readline())
     # print(cc[2:][:-5])
     command = cc[2:][:-5]
     remote.press(command)
          
