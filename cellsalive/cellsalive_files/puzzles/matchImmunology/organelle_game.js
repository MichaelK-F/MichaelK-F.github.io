$('.hideStart').hide();
$('#unmuteBtn').hide();

//Initialize two sound clips with 1 fallback file each:
var clickAudio = createsoundbite("../audio/click.wav", "audio/click.wav");
var popAudio = createsoundbite("../audio/pop.wav", "audio/pop.wav");
var successAudio = createsoundbite("../audio/success.wav", "audio/success.wav");
var matchAudio = createsoundbite("../audio/typeOfCell.wav", "audio/typeOfCell.wav");
var testForMatch = [];
var matched = false; // Flag for indicating match.
var setsMatched = 0;
var blockFlip = false; // Stops the ability to flip over another card when needed.
var doubleClick; // For detecting and avoiding double click on the same slide.

$(document).ready(function() {
  $('.hideStart').hide();
  $('.match').hide();
  $('#unmuteBtn').hide();
  viewportChange();
  $(window).resize(function() {
    viewportChange();
  });

  // Binds hover functions
  $('#muteBtn').click(muteButton);
  $('#unmuteBtn').click(unmuteButton);
  randomSlides("start"); // Begins game with random slides.

  //Hover effect for restart button.
  $("#replayBtn")
        .mouseover(function() { 
            $(this).attr("src", "../controls/replayMouseover.png");
        })
        .mouseout(function() {
            $(this).attr("src", "../controls/replay.png");
        });


  $('.flipcard').on('click', function(){ //Code to flip cards on click.
    if (blockFlip || $(this).hasClass('matched')) { return;}; // Exits function if flip is blocked.
    var card = $(".back img", this).attr('src'); // Get image name to compare.

    if (card === doubleClick) { return; }; //Exits on double click of same slide.
    doubleClick = card; // Assigns card to doubleClick variable to avoid click on same card.
 
    $(this).addClass('flip');
    $(this).children(".front").hide();
    card = card.replace(/\D/g,''); // remove all characters but number.
    testForMatch.push(card);
    
    // Process match
    if (testForMatch[0] === testForMatch[1]) {
      $('.flip .match').show();
      $('.flip .back').hide();
      $('.flip .front').hide();
      $('.flip .match').parent().addClass('matched');
      matched = true;
      setsMatched = setsMatched + 1; // Used to detect end of game in Audio Fork

    };

    // Audio Fork
    if (setsMatched === 10) {
      successAudio.playclip();
    } else {    
      if (matched) {
        matchAudio.playclip();
      } else {
        clickAudio.playclip();
      };
    };

    if (testForMatch.length > 1) {
      blockFlip = true;
      doubleClick = null; //Resets double Click
      if (!matched) {
        setTimeout(function() {
          $(".flip").children(".front").show(); 
          $('*').removeClass('flip'); 
          testForMatch.length = 0;
          blockFlip = false;
          popAudio.playclip();
          matched = false; // Reset match flag.
        },2000)
      } else {
        $('*').removeClass('flip');
          testForMatch.length = 0;
          blockFlip = false;
          matched = false; // Reset match flag. 
      };
    };
  })
}); // End document ready

// Main Functions
  function viewportChange (argument) {
    var viewportWidth = $(window).width();
    //Sets bezel to correct size
      var bezel = viewportWidth * percentOfScreen;
      if (bezel > 780) {bezel = 780};
      $('.bezel').width(bezel);
    //Resize containModel
      var bezelHeight = bezel * (646 / 780);
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
      var playerWidth = bezel * (30/780);
      $(".player").css("width", playerWidth);
    //Resize slides
      var slideWidth = bezel * (170/780);
      $(".slides").css("width", slideWidth);
      $(".slides").css("height", slideWidth*(104/170));
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

// Places slides on game board in a random order.
  function randomSlides (argument) {
    if (argument !== "start") {
      var areYouSure = confirm("Are you sure you want to reset the board?");
      if (!areYouSure) {return;}; // Cancels action.
    };
    
    setsMatched = 0; // Resets match counter.
    $('*').removeClass('flip');
    $('*').removeClass('matched');
    $('.front').show();
    $('.back').show();
    $('.match').hide();

    var slideList = ["a0","a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "q0", "q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9"];
    var slideIDs = ["#r1c1", "#r1c2", "#r1c3", "#r1c4", "#r2c1", "#r2c2", "#r2c3", "#r2c4", "#r3c1", "#r3c2", "#r3c3", "#r3c4", "#r4c1", "#r4c2", "#r4c3", "#r4c4", "#r5c1", "#r5c2", "#r5c3", "#r5c4"];
    var shuffled = shuffle(slideList);

    for (var i = slideIDs.length - 1; i >= 0; i--) {
      var slide = 'img/' + slideList[i] + '.png';
      $(slideIDs[i]).attr('src', slide);
      var match = 'img/' + slideList[i] + 'm.png'
      var matchID = slideIDs[i] + "m";
      $(matchID).attr('src', match);
    };
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
