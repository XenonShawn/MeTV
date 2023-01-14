#include <IRremote.h>

// IRemote NEC TV Xiaomi 3

#define IR_RECEIVE_PIN 2

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

#define IR_BUTTON_VOL_UP 18
#define IR_BUTTON_VOL_DOWN 19

#define IR_BUTTON_LEFT 52
#define IR_BUTTON_RIGHT 51
#define IR_BUTTON_UP 116
#define IR_BUTTON_DOWN 117

void setup() {
  Serial.begin(9600);
  IrReceiver.begin(IR_RECEIVE_PIN);
}
void loop() {
  if (IrReceiver.decode()) {
    IrReceiver.resume();
    int command = IrReceiver.decodedIRData.command;

    Serial.println(command);
  }
  delay(500);
}
