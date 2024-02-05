$('.slides').hide();
$('.infoSlides').hide();
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
	$('.infoSlides').hide();
	$('#return').hide();
	$('#slide1').show();
	$('#unmuteBtn').hide();
	viewportChange();
	$(window).resize(function() {
		viewportChange();
	});

	// Button bindings
		$('#muteBtn').click(muteButton);
		$('#unmuteBtn').click(unmuteButton);
		$('#ff').click(ff);
		$('#pause').click(pause);
		$('#play').click(play);
		$('#rewind').click(rewind);
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
			if (bezel > 694) {bezel = 694};
			$('.bezel').width(bezel);
		//Resize containModel
			var bezelHeight = bezel * (508 / 694);
			$('.containModel').width(bezel);
			$('.containModel').height(bezelHeight);
		//Resize background images.
			var backgroundOffsetLeft = bezel * 0.0401595;
			var backgroundOffsetTop = bezel * 0.0551814; 
			var backgroundWidth = bezel * (393/694);
			backgroundWidth = Math.floor(backgroundWidth);
			backgroundOffsetLeft = Math.floor(backgroundOffsetLeft);
			backgroundOffsetTop = Math.floor(backgroundOffsetTop);
			$(".slides").css("left", backgroundOffsetLeft);
			$(".slides").css("top", backgroundOffsetTop);
			$(".slides").css("width", backgroundWidth);
		//Resize info slides.
			$(".infoSlides").css("left", backgroundOffsetLeft);
			$(".infoSlides").css("top", backgroundOffsetTop);
			$(".infoSlides").css("width", backgroundWidth);
		// Resizes player buttons
			var playerWidth = bezel * (45/694);
			$(".player").css("width", playerWidth);
		// Resizes black bar
			var barWidth = bezel * (178/694);
			$("#blackBar").css("width", barWidth);
		// Resizes info icon buttons
			var infoWidth = bezel * (29/694);
			$(".info").css("width", infoWidth);
			$(".info").css("height", infoWidth);
		//Resizes menu panel
			$(".menu").css("width", bezel);
			$(".menu").css("height", bezelHeight);
			$(".menu").css("top", 0);
		// Adjusts font for different screen widths
			var fontSize = bezel / 42;
			$(".containModel").css("font-size", fontSize);		
		// Sets heading width
			$(".heading").css("width", bezel);
	}

// Controls Functions
	// Adjusts where the black bar is depending on slide showing. Used within stages function.
		function blackBar (slide) {
			var height = (5.7-1) + (parseInt(slide)*1);
			height = height.toFixed(3);
			$('#blackBar').css("top", height + "%");
		}

	// Takes slide number and changes slide to number of argument. Rewind, FF, stages choices all call this function, as well as step back and forward functions.
		function stages(argument) {
			argument = parseInt(argument);
			if (argument < 1) { 
				argument = 1;
				errorAudio.playclip();
			}
				else if (argument > 74) {
					argument = 74
					errorAudio.playclip();
				};
			blackBar(argument);
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
			if (slideNumber > 74) {
				errorAudio.playclip();
			} else {
				organellesAudio.playclip();
			};
		}

		function rewind() {
			pause("silent");
			typeOfCellAudio.playclip();
			copyrightHide('silent');
			stages(01); //Passes slide number to stages.
		}

		function ff (argument) {
			typeOfCellAudio.playclip();
			copyrightHide('silent');
			stages(74); //Passes slide number to stages.
		}

		function play (argument) {
			returnAudio.playclip();
			copyrightHide('silent');
			$('#play').hide();
			$('#pause').show();
			if (currentSlide === 74) { 
				currentSlide = 1;
				$('.slides').hide() };

			timer = setInterval(function() {
				blackBar(currentSlide);
			 	// $('.slides').hide();
				$('#slide' + currentSlide).show();
				currentSlide = parseInt(currentSlide) + 1;
				if (currentSlide > 74) {
					pause();
					currentSlide = 74;
				};
			 }, slideDelay);
		}

		function pause (argument) {
			if (argument !== "silent") {
				returnAudio.playclip();
			};
			
			$('#pause').hide();
			$('#play').show();
			clearInterval(timer);
		}

	// Takes text clicks for stages(), but plays right audio first.
		function stageText (argument) {
			organellesAudio.playclip();
			pause('silent');
			$('.infoSlides').hide();
			stages(argument); //Passes slide number to stages.
		}

		function showInfo (argument, slide) {
			pause('');
			$('.infoSlides').hide();
			stages(slide);
			$(argument).show();
			// $('#return').show();
			
		}

		function copyrightShow (argument) {
			$('.infoSlides').hide();
			$('#copyright').show();
			pause('silent');
			organellesAudio.playclip();
		}

		function copyrightHide (argument) {
			$('.infoSlides').hide();
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