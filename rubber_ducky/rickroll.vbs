While true
	Dim oPlayer
	Set oPlayer = CreateObject("WMPlayer.OCX")

	oPlayer.URL = "https://michaelk-f.github.io/rubber_ducky/rick_rolled.mp3"
	oPlayer.controls.play 
	While oPlayer.playState <> 1 ' 1 = Stopped
		WScript.Sleep 100
	Wend
	
	oPlayer.close
Wend
