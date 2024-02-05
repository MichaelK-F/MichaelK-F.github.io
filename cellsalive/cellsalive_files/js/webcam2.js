<!--  
   // This JavaScript "webcam" was designed at www.cellsalive.com
   // as a live webcam simulation using a sequence of still images
   // Copyright (C) 1999, Quill Graphics

<!--   --><!-- Begin

/////////////////////////////////////////////////////////
//
//Variables to change for a new set of images
//
/////////////////////////////////////////////////////////

var DELAY = 1;		//Delay between images in minutes
			//legitimate values: 1,2,3,4,5,6,10,12,15,20,30

var IMGNAME = "st";	//first part of image file names
			//i.e., mel1000.gif => "mel"

var TOTALFRAMES = 360;  //number of frames in the sequence
			//i.e., from 1000 - 1144 => 145 

var DIRNAME = "cam2/"	//directory of images
			//i.e., "/cam1", "cam2/" (note: the / is important)

var REPEATHOURS = 6;	//Number of hours before sequence repeats
			//i.e., if it repeats 4 times in a day => 6
			//for one repitition, enter 24
			//Note 24 must be evenly divisible by this!
/////////////////////////////////////////////////////////

var timerID = null;
var timerRunning = false;
var prevFrame = 2;
var curr = 3;

function startscript()
{
	startclock();
	newFrame('currImage');
	newPrevTime();
	newOrigTime();
}	

function stopclock (){
if(timerRunning)
clearTimeout(timerID);
timerRunning = false;
}

function showtime () {
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var timeValue = "" + ((hours == 0)? 12 : ((hours > 12) ? hours -12 :hours));
timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
timeValue += (hours >= 12) ? " P.M." : " A.M.";

if((minutes % DELAY) == 0 && seconds == 0)
{
       newFrame('currImage');
}

var nextTime;
var remminutes = minutes%DELAY;

if(hours == 23 && minutes >= (60-DELAY))
{       
          nextTime = "12:00:00 A.M.";
}

else
{
          if(minutes < 60-DELAY)
          {
             nextTime =  "" + ((hours == 0)? 12 : ((hours > 12) ? hours -12 :hours));
             nextTime += ((minutes - remminutes + DELAY) >= 10)? ":" : ":0";
             nextTime += (minutes - remminutes + DELAY);
             nextTime += (hours >= 12) ? ":00 P.M." : ":00 A.M.";
          }
        
          else
          {
          nextTime = "" + ((hours >= 12) ? hours - 11 :hours + 1);
          nextTime += ":00";
          nextTime += (hours >= 11) ? ":00 P.M." : ":00 A.M.";
          }
}

document.clock.face.value = timeValue;
document.clock.face2.value = nextTime
timerID = setTimeout("showtime()",1000);
timerRunning = true;
}

function startclock () {
stopclock();
showtime();
}

function newFrame(cImage)
{
with(document.clock)
{
var now = new Date();
var hours = now.getHours();
hours = hours % REPEATHOURS;
var minutes = now.getMinutes();
if(hours == 0 && minutes < DELAY)
	var minitValue = 1000;
else
	var minitValue = parseInt(((hours * 60) + (minutes))/DELAY) + 1000;
curr = minitValue - 999;
var nowFrame = DIRNAME + IMGNAME + (minitValue) + ".gif";
if(minitValue-1000 <= TOTALFRAMES)
{
	document.images[cImage].src = nowFrame;
}

else
{
	document.images[cImage].src = "/images/noframe.gif";
}
currFrame.value = minitValue - 999;
newCurrTime();
}
}

function newCurrTime()
{
with(document.clock)
{
	var now = new Date();
	var hours = now.getHours();
	var num = parseInt(currFrame.value - 1);
	var frame = (num)*DELAY;
	var frameHours = (frame - (frame%60))/60;
	frameHours = (hours - hours%REPEATHOURS) + frameHours;
	var frameMinutes = frame%60;
	frameMinutes = (frameMinutes < 10) ? "0"+frameMinutes: frameMinutes;
	var AMorPM = (frameHours >= 12)? " P.M." : " A.M.";

	if(frameHours > 12)
		frameHours -= 12;

	if(frameHours == 0)
		frameHours = 12;

	if(frameMinutes == 0)
		frameMinutes = "00";
	
	currTime.value = frameHours + ":"+frameMinutes+":00"+AMorPM;
}
}

function increment(cImage, amount)
{
with(document.clock)
{
	var num = parseInt(frameToView.value);
	if(num <= TOTALFRAMES-amount && num <= curr-amount)
	{
		num += amount;
		frameToView.value = num;
		newPrev(cImage);
	}
}
}

function decrement(cImage, amount)
{
with(document.clock)
{
	var num = parseInt(frameToView.value);
	if(num > amount)
	{
		num -= amount;
		frameToView.value = num;
		newPrev(cImage);
	}
}
}

function newPrev(cImage)
{
with(document.clock)
{
	var num = parseInt(frameToView.value - 1);
	if(num >= 0 &&  num <= TOTALFRAMES)
	{
		ref = new Image(120, 120);
		ref.src = DIRNAME + IMGNAME + (num+1000) + ".gif";
		document.images[cImage].src = ref.src;
	}

	else
	{
		ref = new Image(120, 120);
		ref.src = "/images/noframe.gif";
		document.images[cImage].src = ref.src;
	}
	newPrevTime();
}
}

function newPrevTime()
{
with(document.clock)
{
	var now = new Date();
	var hours = now.getHours();
	var num = parseInt(frameToView.value - 1);
	var frame = num*DELAY;
	var frameHours = (frame - (frame%60))/60;
	frameHours = (hours - hours%REPEATHOURS) + frameHours;
	var frameMinutes = frame%60;
	frameMinutes = (frameMinutes < 10) ? "0"+frameMinutes: frameMinutes;

	if(frameHours > 23)
		prevTime.value = "--:--:--  --";

	else
	{
	var AMorPM = (frameHours >= 12)? " P.M." : " A.M.";

	if(frameHours > 12)
		frameHours -= 12;

	if(frameHours == 0)
		frameHours = 12;

	if(frameMinutes == 0)
		frameMinutes = "00";
	
	prevTime.value = frameHours + ":"+frameMinutes+":00"+AMorPM;
	}
}
}

function newOrigTime()
{
with(document.clock)
{
	var now = new Date();
	var hours = now.getHours();
	var origHours = hours - hours % REPEATHOURS;
	var AMPM = (origHours >= 12)? "P.M." : "A.M.";

	origHours = (origHours > 12) ? origHours-12: origHours;

	if(origHours == 0)
		origHours = 12;

	origTime.value = origHours + ":00:00 " + AMPM;
}
}

function reset()
{
with(document.clock)
{
	origFrame.value = 1;
}
}

<!--  
   // This JavaScript "webcam" was designed at www.cellsalive.com
   // as a live webcam simulation using a sequence of still images
   // Copyright (C) 1999, Quill Graphics

<!--   --><!-- Begin

/////////////////////////////////////////////////////////
//
//Variables to change for a new set of images
//
/////////////////////////////////////////////////////////

var DELAY = 1;		//Delay between images in minutes
			//legitimate values: 1,2,3,4,5,6,10,12,15,20,30

var IMGNAME = "st";	//first part of image file names
			//i.e., mel1000.gif => "mel"

var TOTALFRAMES = 360;  //number of frames in the sequence
			//i.e., from 1000 - 1144 => 145 

var DIRNAME = "cam2/"	//directory of images
			//i.e., "/cam1", "cam2/" (note: the / is important)

var REPEATHOURS = 6;	//Number of hours before sequence repeats
			//i.e., if it repeats 4 times in a day => 6
			//for one repitition, enter 24
			//Note 24 must be evenly divisible by this!
/////////////////////////////////////////////////////////

var timerID = null;
var timerRunning = false;
var prevFrame = 2;
var curr = 3;

function startscript()
{
	startclock();
	newFrame('currImage');
	newPrevTime();
	newOrigTime();
}	

function stopclock (){
if(timerRunning)
clearTimeout(timerID);
timerRunning = false;
}

function showtime () {
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var timeValue = "" + ((hours == 0)? 12 : ((hours > 12) ? hours -12 :hours));
timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
timeValue += (hours >= 12) ? " P.M." : " A.M.";

if((minutes % DELAY) == 0 && seconds == 0)
{
       newFrame('currImage');
}

var nextTime;
var remminutes = minutes%DELAY;

if(hours == 23 && minutes >= (60-DELAY))
{       
          nextTime = "12:00:00 A.M.";
}

else
{
          if(minutes < 60-DELAY)
          {
             nextTime =  "" + ((hours == 0)? 12 : ((hours > 12) ? hours -12 :hours));
             nextTime += ((minutes - remminutes + DELAY) >= 10)? ":" : ":0";
             nextTime += (minutes - remminutes + DELAY);
             nextTime += (hours >= 12) ? ":00 P.M." : ":00 A.M.";
          }
        
          else
          {
          nextTime = "" + ((hours >= 12) ? hours - 11 :hours + 1);
          nextTime += ":00";
          nextTime += (hours >= 11) ? ":00 P.M." : ":00 A.M.";
          }
}

document.clock.face.value = timeValue;
document.clock.face2.value = nextTime
timerID = setTimeout("showtime()",1000);
timerRunning = true;
}

function startclock () {
stopclock();
showtime();
}

function newFrame(cImage)
{
with(document.clock)
{
var now = new Date();
var hours = now.getHours();
hours = hours % REPEATHOURS;
var minutes = now.getMinutes();
if(hours == 0 && minutes < DELAY)
	var minitValue = 1000;
else
	var minitValue = parseInt(((hours * 60) + (minutes))/DELAY) + 1000;
curr = minitValue - 999;
var nowFrame = DIRNAME + IMGNAME + (minitValue) + ".gif";
if(minitValue-1000 <= TOTALFRAMES)
{
	document.images[cImage].src = nowFrame;
}

else
{
	document.images[cImage].src = "/images/noframe.gif";
}
currFrame.value = minitValue - 999;
newCurrTime();
}
}

function newCurrTime()
{
with(document.clock)
{
	var now = new Date();
	var hours = now.getHours();
	var num = parseInt(currFrame.value - 1);
	var frame = (num)*DELAY;
	var frameHours = (frame - (frame%60))/60;
	frameHours = (hours - hours%REPEATHOURS) + frameHours;
	var frameMinutes = frame%60;
	frameMinutes = (frameMinutes < 10) ? "0"+frameMinutes: frameMinutes;
	var AMorPM = (frameHours >= 12)? " P.M." : " A.M.";

	if(frameHours > 12)
		frameHours -= 12;

	if(frameHours == 0)
		frameHours = 12;

	if(frameMinutes == 0)
		frameMinutes = "00";
	
	currTime.value = frameHours + ":"+frameMinutes+":00"+AMorPM;
}
}

function increment(cImage, amount)
{
with(document.clock)
{
	var num = parseInt(frameToView.value);
	if(num <= TOTALFRAMES-amount && num <= curr-amount)
	{
		num += amount;
		frameToView.value = num;
		newPrev(cImage);
	}
}
}

function decrement(cImage, amount)
{
with(document.clock)
{
	var num = parseInt(frameToView.value);
	if(num > amount)
	{
		num -= amount;
		frameToView.value = num;
		newPrev(cImage);
	}
}
}

function newPrev(cImage)
{
with(document.clock)
{
	var num = parseInt(frameToView.value - 1);
	if(num >= 0 &&  num <= TOTALFRAMES)
	{
		ref = new Image(120, 120);
		ref.src = DIRNAME + IMGNAME + (num+1000) + ".gif";
		document.images[cImage].src = ref.src;
	}

	else
	{
		ref = new Image(120, 120);
		ref.src = "/images/noframe.gif";
		document.images[cImage].src = ref.src;
	}
	newPrevTime();
}
}

function newPrevTime()
{
with(document.clock)
{
	var now = new Date();
	var hours = now.getHours();
	var num = parseInt(frameToView.value - 1);
	var frame = num*DELAY;
	var frameHours = (frame - (frame%60))/60;
	frameHours = (hours - hours%REPEATHOURS) + frameHours;
	var frameMinutes = frame%60;
	frameMinutes = (frameMinutes < 10) ? "0"+frameMinutes: frameMinutes;

	if(frameHours > 23)
		prevTime.value = "--:--:--  --";

	else
	{
	var AMorPM = (frameHours >= 12)? " P.M." : " A.M.";

	if(frameHours > 12)
		frameHours -= 12;

	if(frameHours == 0)
		frameHours = 12;

	if(frameMinutes == 0)
		frameMinutes = "00";
	
	prevTime.value = frameHours + ":"+frameMinutes+":00"+AMorPM;
	}
}
}

function newOrigTime()
{
with(document.clock)
{
	var now = new Date();
	var hours = now.getHours();
	var origHours = hours - hours % REPEATHOURS;
	var AMPM = (origHours >= 12)? "P.M." : "A.M.";

	origHours = (origHours > 12) ? origHours-12: origHours;

	if(origHours == 0)
		origHours = 12;

	origTime.value = origHours + ":00:00 " + AMPM;
}
}

function reset()
{
with(document.clock)
{
	origFrame.value = 1;
}
}
