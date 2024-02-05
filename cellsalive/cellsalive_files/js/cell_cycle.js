$('.hide').hide();
//Initialize two sound clips with 1 fallback file each:
var errorAudio = createsoundbite("../audio/error.mp3", "audio/error.wav");
var organellesAudio = createsoundbite("../audio/organelles.mp3", "audio/organelles.wav");
var returnAudio = createsoundbite("../audio/return.mp3", "audio/return.wav");
var typeOfCellAudio = createsoundbite("../audio/typeOfCell.mp3", "audio/typeOfCell.wav");
var currentSlide = 1;
var slideDelay = 130; // Milliseconds between slides.
var timer;

$(document).ready(function() {
	$('.hide').hide();
	$('#return').hide();
	$('#unmuteBtn').hide();
	$('#background').show();
	$('#slide1').show();
	viewportChange();
	$(window).resize(function() {
		viewportChange();
	});

	// Button bindings
		$('#muteBtn').click(muteButton);
		$('#unmuteBtn').click(unmuteButton);
		$('#pause').click(pause);
		$('#play').click(play);
		$('#rewind').click(rewind);
		$('#return').click(copyrightHide);
		$('#g1MapClick').click(play);
		$('#g2MapClick').click(play);
		$('#mMapClick').click(play);

	$('img[usemap]').rwdImageMaps(); // Binds map.

}); // End document ready

// Main Functions
	function viewportChange (argument) {
		var viewportWidth = $(window).width();
		//Sets bezel to correct size
			var bezel = viewportWidth * percentOfScreen;
			if (bezel > 760) {bezel = 760};
			$('.bezel').width(bezel);
		//Resize containModel
			var bezelHeight = bezel * (508 / 760);
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
			var playerWidth = bezel * (36/760);
			$(".player").css("width", playerWidth);
		// Resizes player buttons
			var arrowOffsetLeft = bezel * 0.22500;
			var arrowOffsetTop = bezel * 0.1599; 
			var arrowWidth = bezel * (208/760);
			arrowWidth = Math.floor(arrowWidth);
			arrowOffsetLeft = Math.floor(arrowOffsetLeft);
			arrowOffsetTop = Math.floor(arrowOffsetTop);
			$("#arrow").css("left", arrowOffsetLeft);
			$("#arrow").css("top", arrowOffsetTop);
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
			var angle = parseInt(currentSlide-1) *3;
			angle = 'rotate(' + angle + 'deg)';
			$('#arrow').css({
			        "-webkit-transform": angle,
			        "-moz-transform": angle,
			        "transform": angle /* For modern browsers(CSS3)  */
			    });


		}

	// Takes slide number and changes slide to number of argument. Rewind, FF, stages choices all call this function, as well as step back and forward functions.
		function stages(argument) {
			argument = parseInt(argument);
			$('.hide').hide();
			currentSlide = argument;
			arrow(currentSlide);
			cellShow(currentSlide);
			// document.getElementById("slideNumber").innerHTML = currentSlide; //testing
		}

		function rewind() {
			typeOfCellAudio.playclip();
			$('#return').hide();
			$('*').removeClass('highlight');
			stages(1);
			pause("silent");
		}
		function play (argument) {
			argument = parseInt(argument);
			returnAudio.playclip();
			//Clear for playing
			$('.overlays').hide();
			$('#return').hide();
			$('#play').hide();
			$('#pause').show();
			copyrightHide("silent");

			

			if (currentSlide > 119) { 
				currentSlide = 1;
			};

			timer = setInterval(function() {
				// document.getElementById("slideNumber").innerHTML = currentSlide; //testing
				arrow(currentSlide);
				cellShow(currentSlide);
				//Show checkpoints
				if (currentSlide === 30) {stageText(30)};
				if (currentSlide === 100) {stageText(100)};
				if (currentSlide === 108) {stageText(108)};
				if (currentSlide < 102) {
					$('#interphaseText').addClass('highlight');
					$('#mitosisText').removeClass('highlight');
				} else {
					$('#mitosisText').addClass('highlight');
					$('#interphaseText').removeClass('highlight');
				};
				currentSlide = parseInt(currentSlide) + 1;
				if (currentSlide > 120) {
					currentSlide = 120;
					pause();
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

		function stageText (argument) {
			organellesAudio.playclip();
			stages(argument); //Passes slide number to stages.
			pause("silent");
			if (argument === 30) {
				$('#G1Checkpoint').show();

			} else if (argument === 100) {
				$('#G2Checkpoint').show();
			} else if (argument === 108) {
				$('#MCheckpoint').show();
			};
			currentSlide =currentSlide +1;
			// $('#return').show();
			
		}

		function stageSlide (argument) {
			pause("silent");
			$('.hide').hide();
			$(argument).show();
			$('#return').show();
			organellesAudio.playclip();
		}

		function copyrightHide (argument) {
			$('.overlays, .explanation').hide();
			$('#return').hide();
			cellShow(currentSlide);
			if (argument !== "silent") {
				typeOfCellAudio.playclip();
			};
			
		}

		function cellShow (currentSlide) {
			$('.cell').hide();
			if (currentSlide < 50) { //Static
				$('#slide1').show();
				$('.slides').css('opacity', "1");
			} else if (currentSlide < 62) { // First transition
				var opacityStep = currentSlide - 49;
				var opacitySlide1 = (12 - opacityStep)/12;
				var opacitySlide50 = opacityStep/12;
				$('#slide1').show().css('opacity', opacitySlide1);
				$('#slide50').show().css('opacity', opacitySlide50);

			} else if (currentSlide < 88) { // Static
				$('#slide50').show();
				$('.slides').css('opacity', "1");
			} else if (currentSlide < 101) { // Second transition
				var opacityStep = currentSlide - 88;
				var opacitySlide50 = (12 - opacityStep)/12;
				var opacitySlide100 = opacityStep/12;
				$('#slide50').show().css('opacity', opacitySlide50);
				$('#slide101').show().css('opacity', opacitySlide100);
			} else {
				$('#slide' + currentSlide).show();
				$('.slides').css('opacity', "1");
			};

			
		}



// End Main Functions