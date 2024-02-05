$('.slides').hide();
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
			if (bezel > 760) {bezel = 760};
			$('.bezel').width(bezel);
		//Resize containModel
			var bezelHeight = bezel * (460 / 760);
			$('.containModel').width(bezel);
			$('.containModel').height(bezelHeight);
		//Resize background images.
			var backgroundOffsetLeft = bezel * 0.03421;
			var backgroundOffsetTop = bezel * 0.05508; 
			var backgroundWidth = bezel * 0.68421;
			backgroundWidth = Math.floor(backgroundWidth);
			backgroundOffsetLeft = Math.floor(backgroundOffsetLeft);
			backgroundOffsetTop = Math.floor(backgroundOffsetTop);
			$(".slides").css("left", backgroundOffsetLeft);
			$(".slides").css("top", backgroundOffsetTop);
			$(".slides").css("width", backgroundWidth);
		// Resizes player buttons
			var playerWidth = bezel * (45/760);
			$(".player").css("width", playerWidth);
			var muteWidth = bezel * (36/760);
			$(".mute").css("width", muteWidth);
		// Resizes player buttons
			var arrowWidth = bezel * (27/760);
			$("#arrow").css("width", arrowWidth);
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
	// Adjusts where the arrow is depending on slide showing. Used within stages function.
		function arrow (slide) {
			var height = (6-1.13699) + (parseInt(slide)*1.13699);
			height = height.toFixed(3);
			$('#arrow').css("top", height + "%");
		}

	// Takes slide number and changes slide to number of argument. Rewind, FF, stages choices all call this function, as well as step back and forward functions.
		function stages(argument) {

			argument = parseInt(argument);
			if (argument < 1) { 
				argument = 1;
				errorAudio.playclip();

			}
				else if (argument > 73) {
					argument = 73
					errorAudio.playclip();

				};
			arrow(argument);

			$('.slides').hide();
			$('#slide' + argument).show();

			currentSlide = argument;
		}

		function stepBack() {
			organellesAudio.playclip();
			var slideNumber = currentSlide -1;
			stages(slideNumber); 
		}
		function stepForward() {
			organellesAudio.playclip();
			var slideNumber = currentSlide +1;
			stages(slideNumber); 
		}
		function rewind() {
			typeOfCellAudio.playclip();
			stages(01); //Passes slide number to stages.
		}
		function ff (argument) {
			typeOfCellAudio.playclip();
			stages(73); //Passes slide number to stages.
		}
		function play (argument) {
			returnAudio.playclip();
			$('#play').hide();
			$('#pause').show();

			if (currentSlide > 72) { 
				currentSlide = 1;
				$('.slides').hide() };

			timer = setInterval(function() {
				arrow(currentSlide);
			 	// $('.slides').hide();
				$('#slide' + currentSlide).show();
				currentSlide = parseInt(currentSlide) + 1;
				if (currentSlide > 73) {
					pause();
				};
			 }, slideDelay);

		}
		function pause (argument) {
			returnAudio.playclip();
			$('#pause').hide();
			$('#play').show();
			clearInterval(timer);
		}

	// Takes text clicks for stages(), but plays right audio first.
		function stageText (argument) {
			organellesAudio.playclip();
			stages(argument); //Passes slide number to stages.
		}

		function copyrightShow (argument) {
			$('#copyright').show();
			$('#return').show();
			organellesAudio.playclip();
		}

		function copyrightHide (argument) {
			$('#copyright').hide();
			$('#return').hide();
			typeOfCellAudio.playclip();
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