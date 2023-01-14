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


#define IR_BUTTON_VOL_UP 18
#define IR_BUTTON_VOL_DOWN 19

#define IR_BUTTON_OK 101
#define IR_BUTTON_BACK 35
#define IR_BUTTON_PAUSE 25
#define IR_BUTTON_PLAY 26

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
    switch (command) {
      case IR_BUTTON_0: {
        Serial.println("0");
        break;
      }
      case IR_BUTTON_1: {
        Serial.println("1");
        break;
      }
      case IR_BUTTON_2: {
        Serial.println("2");
        break;
      }
      case IR_BUTTON_3: {
        Serial.println("3");
        break;
      }
      case IR_BUTTON_4: {
        Serial.println("4");
        break;
      }
      case IR_BUTTON_5: {
        Serial.println("5");
        break;
      }
      case IR_BUTTON_6: {
        Serial.println("6");
        break;
      }
      case IR_BUTTON_7: {
        Serial.println("7");
        break;
      }
      case IR_BUTTON_8: {
        Serial.println("8");
        break;
      }
      case IR_BUTTON_9: {
        Serial.println("9");
        break;
      }
      case IR_BUTTON_VOL_UP: {
        Serial.println("volup");
        break;
      }
      case IR_BUTTON_VOL_DOWN: {
        Serial.println("voldown");
        break;
      }
      case IR_BUTTON_BACK: {
        Serial.println("back");
        break;
      }
      case IR_BUTTON_PAUSE: {
        Serial.println("pause");
        break;
      }
      case IR_BUTTON_PLAY: {
        Serial.println("play");
        break;
      }
      case IR_BUTTON_OK: {
        Serial.println("ok");
        break;
      }
      case IR_BUTTON_LEFT: {
        Serial.println("left");
        break;
      }
      case IR_BUTTON_RIGHT: {
        Serial.println("right");
        break;
      }
      case IR_BUTTON_UP: {
        Serial.println("up");
        break;
      }
      case IR_BUTTON_DOWN: {
        Serial.println("down");
        break;
      }
      default: {
        Serial.println("error");
      }
    }
  }
  delay(500);
}
