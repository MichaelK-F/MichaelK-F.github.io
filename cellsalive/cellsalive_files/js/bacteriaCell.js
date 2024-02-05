$('.hideStart').hide();
$('#unmuteBtn').hide();
//Initialize two sound clips with 1 fallback file each:
var errorAudio = createsoundbite("../audio/error.mp3", "audio/error.wav");
var organellesAudio = createsoundbite("../audio/organelles.mp3", "audio/organelles.wav");
var returnAudio = createsoundbite("../audio/return.mp3", "audio/return.wav");
var typeOfCellAudio = createsoundbite("../audio/typeOfCell.mp3", "audio/typeOfCell.wav");

var slideDelay = 0 // Set on line about 451
var typeOfMenu = "main";
var showingPart = false;
var showingEnvelopePart = false;

$(document).ready(function() {
	$('.hideStart').hide();
	$('#unmuteBtn').hide();
	viewportChange();
	$(window).resize(function() {
		viewportChange();
	});

	$('img[usemap]').rwdImageMaps(); // Binds map.

	// Binds hover functions
	$('#muteBtn').click(muteButton);
	$('#unmuteBtn').click(unmuteButton);

		$("#cap").mouseover(function(event) {
			$('.capsuleOverlay').show();
			$('#capsuleText').addClass('textHover');
			$('#cap').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.capsuleOverlay').hide();
			});
			$('#cap').click(function(event) {
				partShow('capsule');
			});
		});
		$("#cellE").mouseover(function(event) {
			$('.cellEnvelopeOverlay').show();
			$('#cellEnvelopeText').addClass('textHover');
			$('#cellE').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.cellEnvelopeOverlay').hide();
			});
			$('#cellE').click(function(event) {
				envelopeShow();
			});
		});
		$("#flag1").mouseover(function(event) {
			$('.flagellaOverlay').show();
			$('#flagellaText').addClass('textHover');
			$('#flag1').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.flagellaOverlay').hide();
			});
			$('#flag1').click(function(event) {
				partShow('flagella');
			});
		});
		$("#flag2").mouseover(function(event) {
			$('.flagellaOverlay').show();
			$('#flagellaText').addClass('textHover');
			$('#flag2').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.flagellaOverlay').hide();
			});
			$('#flag2').click(function(event) {
				partShow('flagella');
			});
		});
		$("#flag3").mouseover(function(event) {
			$('.flagellaOverlay').show();
			$('#flagellaText').addClass('textHover');
			$('#flag3').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.flagellaOverlay').hide();
			});
			$('#flag3').click(function(event) {
				partShow('flagella');
			});
		});
		$("#flag4").mouseover(function(event) {
			$('.flagellaOverlay').show();
			$('#flagellaText').addClass('textHover');
			$('#flag4').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.flagellaOverlay').hide();
			});
			$('#flag4').click(function(event) {
				partShow('flagella');
			});
		});
		$("#flag5").mouseover(function(event) {
			$('.flagellaOverlay').show();
			$('#flagellaText').addClass('textHover');
			$('#flag5').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.flagellaOverlay').hide();
			});
			$('#flag5').click(function(event) {
				partShow('flagella');
			});
		});
		$("#cyto").mouseover(function(event) {
			$('.cytoplasmOverlay').show();
			$('#cytoplasmText').addClass('textHover');
			$('#cyto').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.cytoplasmOverlay').hide();
			});
			$('#cyto').click(function(event) {
				partShow('cytoplasm');
			});
		});
		$("#nuc").mouseover(function(event) {
			$('.nucleoidOverlay').show();
			$('#nucleoidText').addClass('textHover');
			$('#nuc').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.nucleoidOverlay').hide();
			});
			$('#nuc').click(function(event) {
				partShow('nucleoid');
			});
		});
		$("#rib1").mouseover(function(event) {
			$('.ribosomesOverlay').show();
			$('#ribosomesText').addClass('textHover');
			$('#rib1').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ribosomesOverlay').hide();
			});
			$('#rib1').click(function(event) {
				partShow('ribosomes');
			});
		});
		$("#rib2").mouseover(function(event) {
			$('.ribosomesOverlay').show();
			$('#ribosomesText').addClass('textHover');
			$('#rib2').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.ribosomesOverlay').hide();
			});
			$('#rib2').click(function(event) {
				partShow('ribosomes');
			});
		});
		$("#plas1").mouseover(function(event) {
			$('.plasmidOverlay').show();
			$('#plasmidText').addClass('textHover');
			$('#plas1').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.plasmidOverlay').hide();
			});
			$('#plas1').click(function(event) {
				partShow('plasmid');
			});
		});
		$("#plas2").mouseover(function(event) {
			$('.plasmidOverlay').show();
			$('#plasmidText').addClass('textHover');
			$('#plas2').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.plasmidOverlay').hide();
			});
			$('#plas2').click(function(event) {
				partShow('plasmid');
			});
		});
		$("#storeG1").mouseover(function(event) {
			$('.storageGranuleOverlay').show();
			$('#storageGranuleText').addClass('textHover');
			$('#storeG1').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.storageGranuleOverlay').hide();
			});
			$('#storeG1').click(function(event) {
				partShow('storageGranule');
			});
		});
		$("#storeG2").mouseover(function(event) {
			$('.storageGranuleOverlay').show();
			$('#storageGranuleText').addClass('textHover');
			$('#storeG2').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.storageGranuleOverlay').hide();
			});
			$('#storeG2').click(function(event) {
				partShow('storageGranule');
			});
		});
		$("#storeG3").mouseover(function(event) {
			$('.storageGranuleOverlay').show();
			$('#storageGranuleText').addClass('textHover');
			$('#storeG3').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.storageGranuleOverlay').hide();
			});
			$('#storeG3').click(function(event) {
				partShow('storageGranule');
			});
		});
		$("#geno1").mouseover(function(event) {
			$('.genophoreOverlay').show();
			$('#genophoreText').addClass('textHover');
			$('#geno1').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.genophoreOverlay').hide();
			});
			$('#geno1').click(function(event) {
				partShow('genophore');
			});
		});
		$("#geno2").mouseover(function(event) {
			$('.genophoreOverlay').show();
			$('#genophoreText').addClass('textHover');
			$('#geno2').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.genophoreOverlay').hide();
			});
			$('#geno2').click(function(event) {
				partShow('genophore');
			});
		});
		$("#pili1").mouseover(function(event) {
			$('.piliOverlay').show();
			$('#piliText').addClass('textHover');
			$('#pili1').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.piliOverlay').hide();
			});
			$('#pili1').click(function(event) {
				partShow('pili');
			});
		});

		$("#pili2").mouseover(function(event) {
			$('.piliOverlay').show();
			$('#piliText').addClass('textHover');
			$('#pili2').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.piliOverlay').hide();
			});
			$('#pili2').click(function(event) {
				partShow('pili');
			});
		});
		$("#pili3").mouseover(function(event) {
			$('.piliOverlay').show();
			$('#piliText').addClass('textHover');
			$('#pili3').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.piliOverlay').hide();
			});
			$('#pili3').click(function(event) {
				partShow('pili');
			});
		});
		$("#pili4").mouseover(function(event) {
			$('.piliOverlay').show();
			$('#piliText').addClass('textHover');
			$('#pili4').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.piliOverlay').hide();
			});
			$('#pili4').click(function(event) {
				partShow('pili');
			});
		});
		$("#pili5").mouseover(function(event) {
			$('.piliOverlay').show();
			$('#piliText').addClass('textHover');
			$('#pili5').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.piliOverlay').hide();
			});
			$('#pili5').click(function(event) {
				partShow('pili');
			});
		});
		$("#pili6").mouseover(function(event) {
			$('.piliOverlay').show();
			$('#piliText').addClass('textHover');
			$('#pili6').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.piliOverlay').hide();
			});
			$('#pili6').click(function(event) {
				partShow('pili');
			});
		});
		$("#pili7").mouseover(function(event) {
			$('.piliOverlay').show();
			$('#piliText').addClass('textHover');
			$('#pili7').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.piliOverlay').hide();
			});
			$('#pili7').click(function(event) {
				partShow('pili');
			});
		});
		$("#pili8").mouseover(function(event) {
			$('.piliOverlay').show();
			$('#piliText').addClass('textHover');
			$('#pili8').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.piliOverlay').hide();
			});
			$('#pili8').click(function(event) {
				partShow('pili');
			});
		});
		$("#pili9").mouseover(function(event) {
			$('.piliOverlay').show();
			$('#piliText').addClass('textHover');
			$('#pili9').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.piliOverlay').hide();
			});
			$('#pili9').click(function(event) {
				partShow('pili');
			});
		});
		$("#pili10").mouseover(function(event) {
			$('.piliOverlay').show();
			$('#piliText').addClass('textHover');
			$('#pili10').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.piliOverlay').hide();
			});
			$('#pili10').click(function(event) {
				partShow('pili');
			});
		});
		$("#pili11").mouseover(function(event) {
			$('.piliOverlay').show();
			$('#piliText').addClass('textHover');
			$('#pili11').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.piliOverlay').hide();
			});
			$('#pili11').click(function(event) {
				partShow('pili');
			});
		});
		$("#pili12").mouseover(function(event) {
			$('.piliOverlay').show();
			$('#piliText').addClass('textHover');
			$('#pili12').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.piliOverlay').hide();
			});
			$('#pili12').click(function(event) {
				partShow('pili');
			});
		});
		$("#pili13").mouseover(function(event) {
			$('.piliOverlay').show();
			$('#piliText').addClass('textHover');
			$('#pili13').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.piliOverlay').hide();
			});
			$('#pili13').click(function(event) {
				partShow('pili');
			});
		});
		$("#pili14").mouseover(function(event) {
			$('.piliOverlay').show();
			$('#piliText').addClass('textHover');
			$('#pili14').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.piliOverlay').hide();
			});
			$('#pili14').click(function(event) {
				partShow('pili');
			});
		});
		$("#pili15").mouseover(function(event) {
			$('.piliOverlay').show();
			$('#piliText').addClass('textHover');
			$('#pili15').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.piliOverlay').hide();
			});
			$('#pili15').click(function(event) {
				partShow('pili');
			});
		});

	// Map for Envelope
		$("#gramP").mouseover(function(event) {
			$('.GramPosCellWallOverlay').show();
			$('#GramPosCellWallText').addClass('textHover');
			$('#gramP').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.GramPosCellWallOverlay').hide();
			});
			$('#gramP').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('GramPosCellWall');
			});
		});
		$("#OuterM").mouseover(function(event) {
			$('.outerMembraneOverlay').show();
			$('#outerMembraneText').addClass('textHover');
			$('#OuterM').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.outerMembraneOverlay').hide();
			});
			$('#OuterM').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('outerMembrane');
			});
		});
		$("#gramN").mouseover(function(event) {
			$('.GramNegCellWallOverlay').show();
			$('#GramNegCellWallText').addClass('textHover');
			$('#gramN').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.GramNegCellWallOverlay').hide();
			});
			$('#gramN').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('GramNegCellWall');
			});
		});
		$("#cyto1").mouseover(function(event) {
			$('.cytoplasmicMembraneOverlay').show();
			$('#cytoplasmicMembraneText').addClass('textHover');
			$('#cyto1').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.cytoplasmicMembraneOverlay').hide();
			});
			$('#cyto1').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('cytoplasmicMembrane');
			});
		});
		$("#cyto2").mouseover(function(event) {
			$('.cytoplasmicMembraneOverlay').show();
			$('#cytoplasmicMembraneText').addClass('textHover');
			$('#cyto2').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.cytoplasmicMembraneOverlay').hide();
			});
			$('#cyto2').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('cytoplasmicMembrane');
			});
		});
		$("#porin").mouseover(function(event) {
			$('.porinOverlay').show();
			$('#porinText').addClass('textHover');
			$('#porin').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.porinOverlay').hide();
			});
			$('#porin').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('porin');
			});
		});
		$("#mp1").mouseover(function(event) {
			$('.membraneProteinsOverlay').show();
			$('#membraneProteinsText').addClass('textHover');
			$('#mp1').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.membraneProteinsOverlay').hide();
			});
			$('#mp1').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('membraneProteins');
			});
		});
		$("#mp2").mouseover(function(event) {
			$('.membraneProteinsOverlay').show();
			$('#membraneProteinsText').addClass('textHover');
			$('#mp2').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.membraneProteinsOverlay').hide();
			});
			$('#mp2').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('membraneProteins');
			});
		});
		$("#mp3").mouseover(function(event) {
			$('.membraneProteinsOverlay').show();
			$('#membraneProteinsText').addClass('textHover');
			$('#mp3').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.membraneProteinsOverlay').hide();
			});
			$('#mp3').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('membraneProteins');
			});
		});
		$("#mp4").mouseover(function(event) {
			$('.membraneProteinsOverlay').show();
			$('#membraneProteinsText').addClass('textHover');
			$('#mp4').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.membraneProteinsOverlay').hide();
			});
			$('#mp4').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('membraneProteins');
			});
		});
		$("#mp5").mouseover(function(event) {
			$('.membraneProteinsOverlay').show();
			$('#membraneProteinsText').addClass('textHover');
			$('#mp5').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.membraneProteinsOverlay').hide();
			});
			$('#mp5').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('membraneProteins');
			});
		});
		$("#mp6").mouseover(function(event) {
			$('.membraneProteinsOverlay').show();
			$('#membraneProteinsText').addClass('textHover');
			$('#mp6').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.membraneProteinsOverlay').hide();
			});
			$('#mp6').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('membraneProteins');
			});
		});
		$("#mp7").mouseover(function(event) {
			$('.membraneProteinsOverlay').show();
			$('#membraneProteinsText').addClass('textHover');
			$('#mp7').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.membraneProteinsOverlay').hide();
			});
			$('#mp7').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('membraneProteins');
			});
		});
		$("#mp8").mouseover(function(event) {
			$('.membraneProteinsOverlay').show();
			$('#membraneProteinsText').addClass('textHover');
			$('#mp8').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.membraneProteinsOverlay').hide();
			});
			$('#mp8').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('membraneProteins');
			});
		});
		$("#mp9").mouseover(function(event) {
			$('.membraneProteinsOverlay').show();
			$('#membraneProteinsText').addClass('textHover');
			$('#mp9').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.membraneProteinsOverlay').hide();
			});
			$('#mp9').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('membraneProteins');
			});
		});
		$("#mp10").mouseover(function(event) {
			$('.membraneProteinsOverlay').show();
			$('#membraneProteinsText').addClass('textHover');
			$('#mp10').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.membraneProteinsOverlay').hide();
			});
			$('#mp10').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('membraneProteins');
			});
		});
		$("#mp11").mouseover(function(event) {
			$('.membraneProteinsOverlay').show();
			$('#membraneProteinsText').addClass('textHover');
			$('#mp11').mouseleave(function(event) {
				$('*').removeClass('textHover');
				$('.membraneProteinsOverlay').hide();
			});
			$('#mp11').click(function(event) {
				$(this).off("mouseleave");
				envelopePartShow('membraneProteins');
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
	//Changes menu to Envelope Menu
	function envelopeShow (argument) {
		showingPart = false; // Allows overlays
		organellesAudio.playclip();
		
		var part = "." + argument;
			 setTimeout(function() {
			 	$('.hideStart').hide();
				$('.menu').hide();
				$('.map1').hide();
			 	$('.copyright').show();
				$('.menu2').show();
				$('.cellEnvelope').show();
				$('.return').show();
				$('.map2').show(); // Active envelope map
			 }, slideDelay);
	}
	//Shows the envelope part when clicked on.
	function envelopePartShow (argument) {
		showingPart = true;
		showingEnvelopePart = true; // Allows overlays
		organellesAudio.playclip();
		$('.hideStart, .bacteriaLayout, .menu').hide();
		// alert('test');
		$('.copyright').show();
		$('.map2').hide();
		$('.menu2').show();
		$(".return2").show();
		var part = "." + argument + "Overlay";
			$(part).show();
	}
	//Makes the copyright work on the menu2, or envelope menu.
	function menu2Copyright () {
		showingPart = false; // Allows overlays
		organellesAudio.playclip();
		$('.hideStart').hide();
		$('.menu').hide();
		$('.copyright').show();
		typeOfMenu = "envelope";
		$('.menu2').show();
		$('.copyrightSlide').show();
		$('.return2').show();
	}
	//Returns from envelope menu to main bacteria cell menu.
	function envelopeExit () {
		showingPart = false; // Allows overlays
		if (!showingEnvelopePart) {
			$(".hideStart").hide();
			$('.cellEnvelope').show();
			$('.menu2').show();
			$('.return').show();
			$('.map2').show(); // Active envelope map
		};
	}
	//Shows part for main bacteria menu
	function partShow (argument) {
		showingPart = true;  // Stops overlays
		organellesAudio.playclip();
		hoverShow(argument);
		$('.map').hide(); //Hides overlays

		var part = "." + argument;
			 setTimeout(function() {
			 	$(".hideStart").hide();
				$(part).show();
				$(".return").show();
			 }, slideDelay);
	}
	// Shows the correct overlay when image map is hovered over.
	function hoverShow (argument) {
		if (showingPart === false && showingEnvelopePart === false) {
			var part = "." + argument + "Overlay";
			$(part).show();
		};
	}
	// Clears the overlay and menu highlight when mouse
	function clearOverlays (argument) {
		$('.overlay').hide();
		$('*').removeClass('textHover');
	}

	// Hides bacteria part slide when "Return to Cell Diagram" is clicked.
	function partHide (argument) { 
		showingPart = false; // Allows overlays
		showingEnvelopePart = false; 
		returnAudio.playclip();
		$(".hideStart").hide();
		$('*').removeClass('textHover');
		if (argument === "2") { 
			$('.envelopeLayout').show();
			$(".bacteriaLayout").hide();
			$(".menu2").show();
			$(".return").show();
			$(".map2").show();
		} else { 
			$('.envelopeLayout').hide();
			$(".bacteriaLayout").show();
			$(".menu1").show();
			$(".map1").show();
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