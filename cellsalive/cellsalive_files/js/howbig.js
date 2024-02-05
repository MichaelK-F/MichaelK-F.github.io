$('.slides').hide();
$('.overlays').hide();
$('#unmuteBtn').hide();
//Initialize two sound clips with 1 fallback file each:
var errorAudio = createsoundbite("../audio/error.mp3", "audio/error.wav");
var organellesAudio = createsoundbite("../audio/organelles.mp3", "audio/organelles.wav");
var returnAudio = createsoundbite("../audio/return.mp3", "audio/return.wav");
var typeOfCellAudio = createsoundbite("../audio/typeOfCell.mp3", "audio/typeOfCell.wav");
var currentSlide = 1;
var slideDelay = 83; // Milliseconds between slides.
var timer;

$(document).ready(function() {
	$('.slides').hide();
	$('.overlays').hide();
	// $('#return').hide();
	$('#slide1').show();
	$('#unmuteBtn').hide();
	viewportChange();
	$(window).resize(function() {
		viewportChange();
	});

	// Button bindings
		$('#muteBtn').click(muteButton);
		$('#unmuteBtn').click(unmuteButton);
		$('#stepBack').click(stepBack);
		$('#stepForward').click(stepForward);
		$('#copyrightBtn').click(copyrightShow);
		$('#return').click(copyrightHide);

}); // End document ready

// Main Functions
	function viewportChange (argument) {
		var viewportWidth = $(window).width();
		//Sets bezel to correct size
			var bezel = viewportWidth * percentOfScreen;
			if (bezel > 720) {bezel = 720};
			$('.bezel').width(bezel);
		//Resize containModel
			var bezelHeight = bezel * (520 / 720);
			$('.containModel').width(bezel);
			$('.containModel').height(bezelHeight);
		//Resize background images.
			var backgroundOffsetLeft = bezel * 0.0667;
			var backgroundOffsetTop = bezel * 0.0535; 
			var backgroundWidth = bezel * (449/720);
			backgroundWidth = Math.floor(backgroundWidth);
			backgroundOffsetLeft = Math.floor(backgroundOffsetLeft);
			backgroundOffsetTop = Math.floor(backgroundOffsetTop);
			$(".slides").css("left", backgroundOffsetLeft);
			$(".slides").css("top", backgroundOffsetTop);
			$(".slides").css("width", backgroundWidth);
		//Resize info slides.
			$(".overlays").css("left", backgroundOffsetLeft);
			$(".overlays").css("top", backgroundOffsetTop);
			$(".overlays").css("width", backgroundWidth);
		// Resizes player buttons
			var playerWidth = bezel * (30/720);
			$(".player").css("width", playerWidth);
		// Resizes mute buttons
			var muteWidth = bezel * (36/720);
			$("#muteBtn, #unmuteBtn").css("width", muteWidth);
		// Resizes arrow
			var arrowWidth = bezel * (22/720);
			$("#arrow").css("width", arrowWidth);
		//Resizes menu panel
			$(".menu").css("width", bezel);
			$(".menu").css("height", bezelHeight);
			$(".menu").css("top", 0);
		// Adjusts font for different screen widths
			var fontSize = bezel / 42;
			$(".containModel").css("font-size", fontSize);		
	}

// Controls Functions
	// Adjusts where the black bar is depending on slide showing. Used within stages function.
		function arrow (slide) {
			var offset = 2.08;
			var width = (4.7-offset) + (parseInt(slide)*offset);
			width = width.toFixed(3);
			$('#arrow').css("left", width + "%");
		}

	// Takes slide number and changes slide to number of argument. Rewind, FF, stages choices all call this function, as well as step back and forward functions.
		function stages(argument) {
			argument = parseInt(argument);
			if (argument < 1) { 
				argument = 1;
				errorAudio.playclip();
			}
				else if (argument > 31) {
					argument = 31
					errorAudio.playclip();
				};
			arrow(argument);
			$('.slides').hide();
			$('#slide' + argument).show();
			currentSlide = argument;
		}

		function stepBack() {
			var slideNumber = currentSlide -1;
			copyrightHide('silent');
			stages(slideNumber); 
			if (slideNumber < 1) {
				errorAudio.playclip();
			} else {
				organellesAudio.playclip();
			};
		}

		function stepForward() {
			var slideNumber = currentSlide +1;
			copyrightHide('silent');
			stages(slideNumber); 
			if (slideNumber > 31) {
				errorAudio.playclip();
			} else {
				organellesAudio.playclip();
			};
		}


	// Takes text clicks for stages(), but plays right audio first.
		function stageText (argument, overlay) {
			organellesAudio.playclip();
			$('.overlays').hide();
			$(overlay).show();
			stages(argument); //Passes slide number to stages.
		}

		function copyrightShow (argument) {
			$('.overlays').hide();
			$('#copyright').show();
			organellesAudio.playclip();
		}

		function copyrightHide (argument) {
			$('.overlays').hide();
			$('#copyright').hide();
			// $('#return').hide();
			if (argument !== "silent") {
				typeOfCellAudio.playclip();
			};
		}
		function muteButton (argument) {
			$('#muteBtn').hide();
			$('#unmuteBtn').show();
			mute = true;
		}

		function unmuteButton (argument) {
			$('#unmuteBtn').hide();
			$('#muteBtn').show();
			mute = false;
		}



// End Main Functions