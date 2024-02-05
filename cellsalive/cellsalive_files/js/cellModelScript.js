$('.hideStart').hide();
$('#unmuteBtn').hide();
//Initialize two sound clips with 1 fallback file each:
var errorAudio = createsoundbite("../audio/error.mp3", "audio/error.wav");
var organellesAudio = createsoundbite("../audio/organelles.mp3", "audio/organelles.wav");
var returnAudio = createsoundbite("../audio/return.mp3", "audio/return.wav");
var typeOfCellAudio = createsoundbite("../audio/typeOfCell.mp3", "audio/typeOfCell.wav");

var slideDelay = 0 // Set on line about 451
var typeOfCell = "intro";
var showingPart = false;

$(document).ready(function() {
	$('.hideStart').hide();
	viewportChange();
	$(window).resize(function() {
		viewportChange();
	});

	$('.menu p').hide(); // Hides organelle on start up.
	$('.copyright').hide();
	$('#unmuteBtn').hide();
	$('img[usemap]').rwdImageMaps(); // Binds map.

	// Binds hover functions

	$('#muteBtn').click(muteButton);
	$('#unmuteBtn').click(unmuteButton);

		$("#areaA1").mouseover(function(event) {
			$('.ACellperoxisomesOverlay').show();
			$('#peroxisomesText').addClass('textHover');
			$('#areaA1').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellperoxisomesOverlay').hide();
			});
			$('#areaA1').click(function(event) {
				partShow('peroxisomes');
			});
		});
		$("#areaA2").mouseover(function(event) {
			$('.ACellvacuoleOverlay').show();
			$('#vacuoleText').addClass('textHover');
			$('#areaA2').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellvacuoleOverlay').hide();
			});
			$('#areaA2').click(function(event) {
				partShow('vacuole');
			});
		});
		$("#areaA3").mouseover(function(event) {
			$('.ACellsmoothEROverlay').show();
			$('#smoothERText').addClass('textHover');
			$('#areaA3').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellsmoothEROverlay').hide();
			});
			$('#areaA3').click(function(event) {
				partShow('smoothER');
			});
		});
		$("#areaA4").mouseover(function(event) {
			$('.ACellroughEROverlay').show();
			$('#roughERText').addClass('textHover');
			$('#areaA4').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellroughEROverlay').hide();
			});
			$('#areaA4').click(function(event) {
				partShow('roughER');
			});
		});
		$("#areaA5").mouseover(function(event) {
			$('.ACellroughEROverlay').show();
			$('#roughERText').addClass('textHover');
			$('#areaA5').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellroughEROverlay').hide();
			});
			$('#areaA5').click(function(event) {
				partShow('roughER');
			});
		});
		$("#areaA6").mouseover(function(event) {
			$('.ACelllysosomeOverlay').show();
			$('#lysosomeText').addClass('textHover');
			$('#areaA6').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACelllysosomeOverlay').hide();
			});
			$('#areaA6').click(function(event) {
				partShow('lysosomes');
			});
		});
		$("#areaA7").mouseover(function(event) {
			$('.ACellmitochondrionOverlay').show();
			$('#mitochondrionText').addClass('textHover');
			$('#areaA7').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellmitochondrionOverlay').hide();
			});
			$('#areaA7').click(function(event) {
				partShow('mitochondrion');
			});
		});
		$("#areaA8").mouseover(function(event) {
			$('.ACellmitochondrionOverlay').show();
			$('#mitochondrionText').addClass('textHover');
			$('#areaA8').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellmitochondrionOverlay').hide();
			});
			$('#areaA8').click(function(event) {
				partShow('mitochondrion');
			});
		});
		$("#areaA9").mouseover(function(event) {
			$('.ACellcentrosomeOverlay').show();
			$('#centrosomeText').addClass('textHover');
			$('#areaA9').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellcentrosomeOverlay').hide();
			});
			$('#areaA9').click(function(event) {
				partShow('centrosome');
			});
		});
		$("#areaA10").mouseover(function(event) {
			$('.ACellgolgiOverlay').show();
			$('#golgiText').addClass('textHover');
			$('#areaA10').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellgolgiOverlay').hide();
			});
			$('#areaA10').click(function(event) {
				partShow('golgi');
			});
		});
		$("#areaA11").mouseover(function(event) {
			$('.ACellsecretoryVesiclesOverlay').show();
			$('#secretoryVesiclesText').addClass('textHover');
			$('#areaA11').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellsecretoryVesiclesOverlay').hide();
			});
			$('#areaA11').click(function(event) {
				partShow('secretoryVesicles');
			});
		});
		$("#areaA12").mouseover(function(event) {
			$('.ACellnucleolusOverlay').show();
			$('#nucleolusText').addClass('textHover');
			$('#areaA12').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellnucleolusOverlay').hide();
			});
			$('#areaA12').click(function(event) {
				partShow('nucleolus');
			});
		});
		$("#areaA13").mouseover(function(event) {
			$('.ACellnucleusOverlay').show();
			$('#nucleusText').addClass('textHover');
			$('#areaA13').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellnucleusOverlay').hide();
			});
			$('#areaA13').click(function(event) {
				partShow('nucleus');
			});
		});
		$("#areaA14").mouseover(function(event) {
			$('.ACellcytosolOverlay').show();
			$('#cytosolText').addClass('textHover');
			$('#areaA14').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellcytosolOverlay').hide();
			});
			$('#areaA14').click(function(event) {
				partShow('cytosol');
			});
		});
		$("#areaA15").mouseover(function(event) {
			$('.ACellcytosolOverlay').show();
			$('#cytosolText').addClass('textHover');
			$('#areaA15').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellcytosolOverlay').hide();
			});
			$('#areaA15').click(function(event) {
				partShow('cytosol');
			});
		});
		$("#areaA16").mouseover(function(event) {
			$('.ACellcytosolOverlay').show();
			$('#cytosolText').addClass('textHover');
			$('#areaA16').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellcytosolOverlay').hide();
			});
			$('#areaA16').click(function(event) {
				partShow('cytosol');
			});
		});
		$("#areaA17").mouseover(function(event) {
			$('.ACellcytoskeletonOverlay').show();
			$('#cytoskeletonText').addClass('textHover');
			$('#areaA17').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellcytoskeletonOverlay').hide();
			});
			$('#areaA17').click(function(event) {
				partShow('cytoskeleton');
			});
		});
		$("#areaA19").mouseover(function(event) {
			$('.ACellcytoskeletonOverlay').show();
			$('#cytoskeletonText').addClass('textHover');
			$('#areaA19').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellcytoskeletonOverlay').hide();
			});
			$('#areaA19').click(function(event) {
				partShow('cytoskeleton');
			});
		});
		$("#areaA20").mouseover(function(event) {
			$('.ACellmembraneOverlay').show();
			$('#membraneText').addClass('textHover');
			$('#areaA20').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ACellmembraneOverlay').hide();
			});
			$('#areaA20').click(function(event) {
				partShow('membrane');
			});
		});

		$("#areaP0").mouseover(function(event) {
			$('.PCellcytosolOverlay').show();
			$('#cytosolText').addClass('textHover');
			$('#areaP0').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellcytosolOverlay').hide();
			});
			$('#areaP0').click(function(event) {
				partShow('cytosol');
			});
		});
		$("#areaP1").mouseover(function(event) {
			$('.PCellsmoothEROverlay').show();
			$('#smoothERText').addClass('textHover');
			$('#areaP1').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellsmoothEROverlay').hide();
			});
			$('#areaP1').click(function(event) {
				partShow('smoothER');
			});
		});
		$("#areaP2").mouseover(function(event) {
			$('.PCellroughEROverlay').show();
			$('#roughERText').addClass('textHover');
			$('#areaP2').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellroughEROverlay').hide();
			});
			$('#areaP2').click(function(event) {
				partShow('roughER');
			});
		});
		$("#areaP3").mouseover(function(event) {
			$('.PCellroughEROverlay').show();
			$('#roughERText').addClass('textHover');
			$('#areaP3').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellroughEROverlay').hide();
			});
			$('#areaP3').click(function(event) {
				partShow('roughER');
			});
		});
		$("#areaP4").mouseover(function(event) {
			$('.PCellcytosolOverlay').show();
			$('#cytosolText').addClass('textHover');
			$('#areaP4').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellcytosolOverlay').hide();
			});
			$('#areaP4').click(function(event) {
				partShow('cytosol');
			});
		});
		$("#areaP5").mouseover(function(event) {
			$('.PCellcentrosomeOverlay').show();
			$('#centrosomeText').addClass('textHover');
			$('#areaP5').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellcentrosomeOverlay').hide();
			});
			$('#areaP5').click(function(event) {
				partShow('centrosome');
			});
		});
		$("#areaP6").mouseover(function(event) {
			$('.PCellmitochondrionOverlay').show();
			$('#mitochondrionText').addClass('textHover');
			$('#areaP6').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellmitochondrionOverlay').hide();
			});
			$('#areaP6').click(function(event) {
				partShow('mitochondrion');
			});
		});
		$("#areaP7").mouseover(function(event) {
			$('.PCellmitochondrionOverlay').show();
			$('#mitochondrionText').addClass('textHover');
			$('#areaP7').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellmitochondrionOverlay').hide();
			});
			$('#areaP7').click(function(event) {
				partShow('mitochondrion');
			});
		});
		$("#areaP8").mouseover(function(event) {
			$('.PCellperoxisomesOverlay').show();
			$('#peroxisomesText').addClass('textHover');
			$('#areaP8').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellperoxisomesOverlay').hide();
			});
			$('#areaP8').click(function(event) {
				partShow('peroxisomes');
			});
		});
		$("#areaP9").mouseover(function(event) {
			$('.PCellgolgiOverlay').show();
			$('#golgiText').addClass('textHover');
			$('#areaP9').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellgolgiOverlay').hide();
			});
			$('#areaP9').click(function(event) {
				partShow('golgi');
			});
		});
		$("#areaP10").mouseover(function(event) {
			$('.PCelllysosomeOverlay').show();
			$('#lysosomeText').addClass('textHover');
			$('#areaP10').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCelllysosomeOverlay').hide();
			});
			$('#areaP10').click(function(event) {
				partShow('lysosomes');
			});
		});
		$("#areaP11").mouseover(function(event) {
			$('.PCellsecretoryVesiclesOverlay').show();
			$('#secretoryVesiclesText').addClass('textHover');
			$('#areaP11').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellsecretoryVesiclesOverlay').hide();
			});
			$('#areaP11').click(function(event) {
				partShow('secretoryVesicles');
			});
		});
		$("#areaP12").mouseover(function(event) {
			$('.PCellchloroplastsOverlay').show();
			$('#chloroplastsText').addClass('textHover');
			$('#areaP12').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellchloroplastsOverlay').hide();
			});
			$('#areaP12').click(function(event) {
				chloroplastShow('chloroplast');
			});
		});
		$("#areaP13").mouseover(function(event) {
			$('.PCellchloroplastsOverlay').show();
			$('#chloroplastsText').addClass('textHover');
			$('#areaP13').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellchloroplastsOverlay').hide();
			});
			$('#areaP13').click(function(event) {
				chloroplastShow('chloroplast');
			});
		});
		$("#areaP14").mouseover(function(event) {
			$('.PCellchloroplastsOverlay').show();
			$('#chloroplastsText').addClass('textHover');
			$('#areaP14').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellchloroplastsOverlay').hide();
			});
			$('#areaP14').click(function(event) {
				chloroplastShow('chloroplast');
			});
		});
		$("#areaP15").mouseover(function(event) {
			$('.PCellchloroplastsOverlay').show();
			$('#chloroplastsText').addClass('textHover');
			$('#areaP15').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellchloroplastsOverlay').hide();
			});
			$('#areaP15').click(function(event) {
				chloroplastShow('chloroplast');
			});
		});
		$("#areaP16").mouseover(function(event) {
			$('.PCellvacuoleOverlay').show();
			$('#vacuoleText').addClass('textHover');
			$('#areaP16').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellvacuoleOverlay').hide();
			});
			$('#areaP16').click(function(event) {
				partShow('vacuole');
			});
		});
		$("#areaP17").mouseover(function(event) {
			$('.PCellnucleolusOverlay').show();
			$('#nucleolusText').addClass('textHover');
			$('#areaP17').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellnucleolusOverlay').hide();
			});
			$('#areaP17').click(function(event) {
				partShow('nucleolus');
			});
		});
		$("#areaP18").mouseover(function(event) {
			$('.PCellnucleusOverlay').show();
			$('#nucleusText').addClass('textHover');
			$('#areaP18').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellnucleusOverlay').hide();
			});
			$('#areaP18').click(function(event) {
				partShow('nucleus');
			});
		});
		$("#areaP19").mouseover(function(event) {
			$('.PCellcytoskeletonOverlay').show();
			$('#cytoskeletonText').addClass('textHover');
			$('#areaP19').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellcytoskeletonOverlay').hide();
			});
			$('#areaP19').click(function(event) {
				partShow('cytoskeleton');
			});
		});
		$("#areaP20").mouseover(function(event) {
			$('.PCellcytoskeletonOverlay').show();
			$('#cytoskeletonText').addClass('textHover');
			$('#areaP20').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellcytoskeletonOverlay').hide();
			});
			$('#areaP20').click(function(event) {
				partShow('cytoskeleton');
			});
		});
		$("#areaP21").mouseover(function(event) {
			$('.PCellcytoskeletonOverlay').show();
			$('#cytoskeletonText').addClass('textHover');
			$('#areaP21').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellcytoskeletonOverlay').hide();
			});
			$('#areaP21').click(function(event) {
				partShow('cytoskeleton');
			});
		});
		$("#areaP22").mouseover(function(event) {
			$('.PCellmembraneOverlay').show();
			$('#membraneText').addClass('textHover');
			$('#areaP22').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellmembraneOverlay').hide();
			});
			$('#areaP22').click(function(event) {
				partShow('membrane');
			});
		});
		$("#areaP23").mouseover(function(event) {
			$('.PCellcellWallOverlay').show();
			$('#cellWallText').addClass('textHover');
			$('#areaP23').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.PCellcellWallOverlay').hide();
			});
			$('#areaP23').click(function(event) {
				partShow('cellWall');
			});
		});
	// End Hover Function Bind

}); // End document ready

// Main Functions
	function viewportChange (argument) {
		var viewportWidth = $(window).width();
		//Sets bezel to correct size
			var bezel = viewportWidth * percentOfScreen;
			if (bezel > 760) {bezel = 760};
			$('.bezel').width(bezel);
		//Resize containModel
			var bezelHeight = bezel * (600 / 760);
			$('.containModel').width(bezel);
			$('.containModel').height(bezelHeight);
		//Resize background images.
			var backgroundOffsetLeft = bezel * 0.03421;
			var backgroundOffsetTop = bezel * 0.05508; 
			var backgroundWidth = bezel * 0.93158;
			backgroundWidth = Math.floor(backgroundWidth);
			backgroundOffsetLeft = Math.floor(backgroundOffsetLeft);
			backgroundOffsetTop = Math.floor(backgroundOffsetTop);
			$(".backgrounds").css("left", backgroundOffsetLeft);
			$(".backgrounds").css("top", backgroundOffsetTop);
			$(".backgrounds").css("width", backgroundWidth);
		//Resizes menu panel
			$(".menu").css("width", bezel);
			var menuHeight = Math.floor(bezel * 0.16447);
			var menuTop = Math.floor(bezel * 0.62632);
			$(".menu").css("width", bezel);
			$(".menu").css("height", menuHeight);
			$(".menu").css("top", menuTop);
			var playerWidth = bezel * (36/760);
			$(".player").css("width", playerWidth);
		// Sizes and places Animal and Plant cell buttons
			var mainButtonWidth = Math.floor(bezel * 0.15789);
			var mainButtonHeight = Math.floor(bezel * 0.0315789);
			$(".mainButtons").css("width", mainButtonWidth);
			$(".mainButtons").css("height", mainButtonHeight);
		// Adjusts font for different screen widths
			var fontSize = bezel / 42;
			$(".containModel").css("font-size", fontSize);		
		// Sets heading width
			$(".heading").css("width", bezel);
		// Sets delay for mobile
			if (viewportWidth < 768) {
				slideDelay = 2000; // Delay in milliseconds for mobile
			} else {
				slideDelay = 0;
			};
	}

	function animalCell (argument) {
		showingPart = false; // Allows overlays
		if (argument != 'silent') {typeOfCellAudio.playclip();};
		$('.hideStart').hide();
		$('.animalCell').show();
		$('.copyright').show();
		typeOfCell = "animal";
		$('.animalButton').addClass('selected');
		$('.plantButton').removeClass('selected');
		$('.menu p').show();
	}

	function plantCell (argument) {
		showingPart = false; // Allows overlays
		if (argument != 'silent') {typeOfCellAudio.playclip();};
		$('.hideStart').hide();
		$('.plantCell').show();
		$('.copyright').show();
		typeOfCell = "plant";
		$('.plantButton').addClass('selected');
		$('.animalButton').removeClass('selected');
		$('.menu p').show();
	}

	function partShow (argument) {
		showingPart = true;  // Stops overlays
		organellesAudio.playclip();
		hoverShow(argument);

		var part = "." + argument;
			 setTimeout(function() {
			 	$(".hideStart").hide();
				$(part).show();
				$(".return").show();
			 }, slideDelay);
	}

	function hoverShow (argument) {
		// var text = "#" + argument + "Text";
		// $(text).addClass('textHover');
		if (typeOfCell === "animal" && showingPart === false) {
			var animal = ".ACell" + argument + "Overlay";
			$(animal).show();
		} else if (typeOfCell === "plant" && showingPart === false) {
			var plant = ".PCell" + argument + "Overlay";
			$(plant).show();
		};
	}

	function clearOverlays (argument) {
		$('.overlay').hide();
		$('*').removeClass('textHover');
	}

	function chloroplastShow (argument) {
		showingPart = true;  // Stops overlays
		var part = "." + argument;
		if (typeOfCell === "animal") {
			errorAudio.playclip();
			$(".hideStart").hide();
			$(".chloroplastUhOh").show();
			$(".return").show();
		} else {
			partShow('chloroplast');
		}
		
	}

	function cellWallShow (argument) {
		showingPart = true;  // Stops overlays
		var part = "." + argument;

		if (typeOfCell === "animal") {
			errorAudio.playclip();
			$(".hideStart").hide();
			$(".ACellNoCellWall").show();
			$(".return").show();
		} else {
			partShow('cellWall');
		}
		
	}

	function centrioleShow (argument) {
		showingPart = true;  // Stops overlays
		var part = "." + argument;

		if (typeOfCell === "plant") {
			errorAudio.playclip();
			$(".hideStart").hide();
			$(".PCellNoCentriole").show();
			$(".return").show();
		} else {
			partShow('centriole');
		}
		
	}

	function partHide (argument) {
		showingPart = false; // Allows overlays
		returnAudio.playclip();
		if (typeOfCell === "plant") {
			plantCell('silent');
		} else if (typeOfCell === "animal"){
			animalCell('silent');
		} else {
			$(".hideStart").hide();
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