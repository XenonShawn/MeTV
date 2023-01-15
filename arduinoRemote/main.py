import serial
from driver import Remote

ser = serial.Serial("/dev/ttyACM0", 9600)

remote = Remote('chromedriver')

while True:
     cc=str(ser.readline())
     print("main", cc[2:][:-5])
     command = cc[2:][:-5]
     remote.press(command)
          
