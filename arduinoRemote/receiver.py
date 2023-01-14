import serial
ser = serial.Serial("COM7", 9600)
while True:
     cc=str(ser.readline())
     # print(cc[2:][:-5])
     command = cc[2:][:-5]
"""
#define IR_BUTTON_0 10
#define IR_BUTTON_1 0
#define IR_BUTTON_2 1
#define IR_BUTTON_3 2
#define IR_BUTTON_4 3
#define IR_BUTTON_5 4
#define IR_BUTTON_6 5
#define IR_BUTTON_7 6
#define IR_BUTTON_8 7
#define IR_BUTTON_9 8

#define IR_BUTTON_OK 101
#define IR_BUTTON_BACK 35
#define IR_BUTTON_PAUSE 25
#define IR_BUTTON_PLAY 26

#define IR_BUTTON_LEFT 52
#define IR_BUTTON_RIGHT 51
#define IR_BUTTON_UP 116
#define IR_BUTTON_DOWN 117
"""
