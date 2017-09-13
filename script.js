






// Tic Tac Toe Variables
var grandGame = {
// TUrn container
  state: 'X',
// Array that cointains all 9 game divs
  divs: [],
// Array that cointains all the actual 'X' and 'O' on board
  divsHisS: [],
// // Triggers 'Tie' if necessary
  tie: 0,
// EndGame
  endGame: 0,
// EndGame history
  endGameH: 0,
// Scoreboard cointainer for X wins and O wins
  scoreboardX: parseInt($('.x-score').attr('score')),
  scoreboardO: parseInt($('.o-score').attr('score')),
// History board clicked
  historyClicked: 0,
  currentGame: 0,
  historyWinner: 0,
  actualSize: 9,
  rows: 0
};
// Current number of games
var nrOfBoards = 1;
// First instance of grand game
var newGame = jQuery.extend(true, {}, grandGame);
// All games holder
var allGames = [];
// Add first instance of game logic
allGames.push(newGame);

$('body').on('click', '.tic-tac-squares', function() {
// Get number of game clicked
  var getCurrentGame = parseInt($(this).parents().parents().attr('game'));
// All games
  console.log(allGames);
  if (allGames[(getCurrentGame)].divsHisS.length > 0) {
    allGames[(getCurrentGame)].historyClicked.children().css({'background-color': ''})
    allGames[(getCurrentGame)].historyClicked.nextAll().remove();
    allGames[(getCurrentGame)].divsHisS = [];
  }
  if(allGames[(getCurrentGame)].endGame == 0) {
// Prevent Winner alert to return undifined or x/o winns if allGames[(getCurrentGame)] isn't over
  $(this).parents().siblings('header').children('.scoreboard-c').children('.winner').attr('result', '');
  //   is the null state
    if($(this).attr('state') === '') {
      allGames[(getCurrentGame)].tie += 1;
      allGames[(getCurrentGame)].divs = [];
      if (allGames[(getCurrentGame)].state == 'O') {
        $(this).append('O');
        $(this).attr('state', 'O');
        allGames[(getCurrentGame)].state = 'X';
      } else {
        $(this).append('X');
        $(this).attr('state', 'X');
        allGames[(getCurrentGame)].state = 'O';
      }
// Empty stored info about game
      allGames[(getCurrentGame)].divs = [];
// Calculate length of a row - ex.: Math.sqrt(3*3)
      const curntS = Math.sqrt(allGames[(getCurrentGame)].actualSize);
      var v = allGames[(getCurrentGame)].divs;
// Get state of all divs in board
        $(this).parents().children('.tic-tac-squares').each(function(n) {
          v.push($(this).attr('state'));
        });
// Create temporary row holder
      var rowsHolder = [];
// Set object element to empty array
      allGames[(getCurrentGame)].rows = [];
      for ( let i = 0; i < curntS; i++) {
          for ( let j = 0; j < curntS; j++) {
// Create rows
            rowsHolder.push(v[i * curntS + j]);
          }
// Make array of all rows
          allGames[(getCurrentGame)].rows.push(rowsHolder);
          rowsHolder = [];
      }
// Create shorter version of rows
      var rows = allGames[(getCurrentGame)].rows;
      for ( let i = 0; i < curntS; i++) {
        for ( let j = 0; j < curntS; j++) {
          if ( (j == 0) || (j == (curntS-1))  ) { continue; }
// First row in  IF == check if win on row
// Second row in IF == check if win on column
// Third row in  IF == check if win on left to right diagonal
// Forth row in  IF == check if win on right to left diagonal
          if (  (((rows[i][j-1])   == 'X') && ((rows[i][j]) == 'X') && ((rows[i][j+1])   == 'X')) ||
                (((rows[j-1][i])   == 'X') && ((rows[j][i]) == 'X') && ((rows[j+1][i])   == 'X')) ||
                (((rows[j-1][i-1]) == 'X') && ((rows[j][i]) == 'X') && ((rows[j+1][i+1]) == 'X')) ||
                (((rows[j-1][i+1]) == 'X') && ((rows[j][i]) == 'X') && ((rows[j+1][i-1]) == 'X'))  ) {

            $(this).parents().siblings('header').children('.scoreboard-c').children('.winner').append('X wins!').attr('result', 'X wins!');
            //Make Board unclickable
            allGames[(getCurrentGame)].endGame = 1;
            allGames[(getCurrentGame)].scoreboardX = parseInt($(this).parents().siblings('header').children('.scoreboard-c').children('.scoreboard').children('.x-score').attr('score'));
            allGames[(getCurrentGame)].scoreboardX += 1;
            $(this).parents().siblings('header').children('.scoreboard-c').children('.scoreboard').children('.x-score').empty()
            .append('X: ' + allGames[(getCurrentGame)].scoreboardX).attr('score', allGames[(getCurrentGame)].scoreboardX);
          } else if ( (((rows[i][j-1])   == 'O') && ((rows[i][j]) == 'O') && ((rows[i][j+1]) ==   'O')) ||
                      (((rows[j-1][i])   == 'O') && ((rows[j][i]) == 'O') && ((rows[j+1][i]) ==   'O')) ||
                      (((rows[j-1][i-1]) == 'O') && ((rows[j][i]) == 'O') && ((rows[j+1][i+1]) == 'O')) ||
                      (((rows[j-1][i+1]) == 'O') && ((rows[j][i]) == 'O') && ((rows[j+1][i-1]) == 'O'))  ) {
            $(this).parents().siblings('header').children('.scoreboard-c').children('.winner').append('O wins!').attr('result', 'O wins!');
            //Make Board unclickable
            allGames[(getCurrentGame)].endGame = 1;
            allGames[(getCurrentGame)].scoreboardO = parseInt($(this).parents().siblings('header').children('.scoreboard-c').children('.scoreboard').children('.o-score').attr('score'));
            allGames[(getCurrentGame)].scoreboardO += 1;
            $(this).parents().siblings('header').children('.scoreboard-c').children('.scoreboard').children('.o-score').empty()
            .append('O: ' + allGames[(getCurrentGame)].scoreboardO).attr('score', allGames[(getCurrentGame)].scoreboardO);
          } else if (allGames[(getCurrentGame)].tie == allGames[(getCurrentGame)].actualSize) {
                    $(this).parents().siblings('header').children('.scoreboard-c').children('.winner').append('Tie').attr('result', 'Tie');
            // In case of win at last move
                    allGames[(getCurrentGame)].tie += 100;
                    allGames[(getCurrentGame)].endGame = 1;
          }
        }
      }
    };


    $(this).parents().siblings(".history-c").append('<div class="history"></div>');
    var containerWidth = parseInt($(this).parents().siblings(".history-c").children(".history").css('width'));
    containerWidth = (35 * (Math.sqrt(allGames[(getCurrentGame)].actualSize))) + 'px';
    $(this).parents().siblings(".history-c").children().css({'width': containerWidth });
    // alert(elementsWidth);

    for ( let i = 0; i < allGames[(getCurrentGame)].actualSize; i++ ) {
      $(this).parents().siblings(".history-c").children(':nth-last-child(1)')
      .append('<div stateh ='+ allGames[(getCurrentGame)].divs[i] + '>' + allGames[(getCurrentGame)].divs[i] + '</div>');
    }
  }
});
// RESET ALL
$('body').on('click', '.reset', function() {
  var getCurrentGame = parseInt($(this).parents().parents().parents().attr('game'));
  $(this).parents().parents().siblings('.tic-tac-c').children().attr('state',  '').empty();
  $(this).parents().parents().siblings('.history-c').empty();
  $(this).parents().siblings('.scoreboard-c').children('.winner').empty();
// Disables on click for game divs
  allGames[(getCurrentGame)].endGame = 0;
// Resets tied game calculator
  allGames[(getCurrentGame)].tie = 0;
// First move = X
  allGames[(getCurrentGame)].state = 'X';
});
$('body').on('click', '.history', function(e) {
  var getCurrentGame = parseInt($(this).parents().parents().attr('game'));
  allGames[(getCurrentGame)].historyClicked = $(this, '.history');
  allGames[(getCurrentGame)].tie = 0;
  allGames[(getCurrentGame)].divs = [];
  allGames[(getCurrentGame)].divsHisS = [];
  allGames[(getCurrentGame)].historyClicked.children().css({'background-color': 'turquoise'});
  allGames[(getCurrentGame)].historyClicked.nextAll().children().css({'background-color': 'rgb(255, 151, 61)'});
  allGames[(getCurrentGame)].historyClicked.prevAll().children().css({'background-color': ''});
  for (let i = 0; i < $(this, '.history').children().length; i++) {
    allGames[(getCurrentGame)].divs.push($(this, '.history').children(':nth-child('+ (i+1) +')').attr('stateh'));
    $(this).parents().siblings('.tic-tac-c').children(':nth-child('+ (i+1) +')').empty();
    $(this).parents().siblings('.tic-tac-c').children(':nth-child('+ (i+1) +')').append(allGames[(getCurrentGame)].divs[i]);
    $(this).parents().siblings('.tic-tac-c').children(':nth-child('+ (i+1) +')').attr('state', String(allGames[(getCurrentGame)].divs[i]));
  }
// Get all moves
  for (let i = 0; i < allGames[(getCurrentGame)].divs.length; i++) {
    if (allGames[(getCurrentGame)].divs[i].length == '1') {
      allGames[(getCurrentGame)].tie += 1;
      allGames[(getCurrentGame)].divsHisS.push(i);
    }
  }
// Find out whos turn is next
  if((allGames[(getCurrentGame)].divsHisS.length % 2) == 0) {
    allGames[(getCurrentGame)].state = 'X';
  } else if((allGames[(getCurrentGame)].divsHisS.length % 2) == 1) {
    allGames[(getCurrentGame)].state = 'O';
  }
  allGames[(getCurrentGame)].historyWinner = String($(this).parents().siblings('header').children('.scoreboard-c').children('.winner').attr('result'));
// Update scoreboard selectors
  function changeScoreOnHistoryClick() {
// Empty scoreboard
// Add new scoreboard + result
// Add score value to 'score' attribute
  _this.parents().siblings('header').children('.scoreboard-c')
    .children('.scoreboard').children('.x-score').empty()
      .append('X: ' + allGames[(getCurrentGame)].scoreboardX)
        .attr('score', allGames[(getCurrentGame)].scoreboardX);
  _this.parents().siblings('header').children('.scoreboard-c')
    .children('.scoreboard').children('.o-score').empty()
      .append('O: ' + allGames[(getCurrentGame)].scoreboardO)
        .attr('score', allGames[(getCurrentGame)].scoreboardO);
  }
  var winner = $(this).parents().siblings('header').children('.scoreboard-c').children('.winner');
// On clicking history change victory state and score if necessary
// If game is won disable function for last history element
// endGameH variable that temporarily holds game state
  if (( $ (e.target).is($('.history-c').children().children()
      .not($('.history-c').children(':nth-last-child(1)').children()))) &&
        (allGames[(getCurrentGame)].endGame == 1 || allGames[(getCurrentGame)].endGameH == 0)) {
// Remove winner status
        winner.empty();
        allGames[(getCurrentGame)].endGame = 0;
        allGames[(getCurrentGame)].endGameH = 1;
        if (allGames[(getCurrentGame)].historyWinner == 'X wins!') {
          allGames[(getCurrentGame)].scoreboardX -= 1;
        } else if (allGames[(getCurrentGame)].historyWinner == 'O wins!') {
          allGames[(getCurrentGame)].scoreboardO -= 1;
        }
        var _this = $(this);
        changeScoreOnHistoryClick();
  } else if (($(e.target).is($('.history-c').children(':nth-last-child(1)').children())) &&
      ( (allGames[(getCurrentGame)].endGame == 1 && allGames[(getCurrentGame)].endGameH == 0) || (allGames[(getCurrentGame)].endGame == 0 && allGames[(getCurrentGame)].endGameH == 1) )) {
        winner.empty();
        winner.append(allGames[(getCurrentGame)].historyWinner);
        if (allGames[(getCurrentGame)].historyWinner == 'X wins!' && allGames[(getCurrentGame)].endGameH == 1) {
          allGames[(getCurrentGame)].scoreboardX += 1;
        } else if (allGames[(getCurrentGame)].historyWinner == 'O wins!' && allGames[(getCurrentGame)].endGameH == 1) {
          allGames[(getCurrentGame)].scoreboardO += 1;
        }
        allGames[(getCurrentGame)].endGameH = 0;
        var _this = $(this);
        changeScoreOnHistoryClick();
  }
});

$('.add').click(function() {
// New instance of grandGame
  var newerGame = jQuery.extend(true, {}, grandGame);
// Add new instanceof grandGame to allGames array
  allGames.push(newerGame);
// Game html sctructure
  $('#main').append(
    '<div class="game" game="'+ nrOfBoards +'">'+
      '<header>'+
        '<nav>'+
          '<div class="nav-bar">'+
            '<div class="nav-title">SIZE</div>'+
            '<div class="nav-c nav-c">'+
              '<div class="nav-items" size="3">3x3</div>'+
              '<div class="nav-items" size="4">4x4</div>'+
              '<div class="nav-items" size="5">5x5</div>'+
              '<div class="nav-items" size="6">6x6</div>'+
            '</div>'+
          '</div>'+
          '<div class="button reset">RESET</div>'+
        '</nav>'+
        '<div class="scoreboard-c">'+
          '<div class="winner winner"></div>'+
          '<div class="scoreboard scoreboard">'+
            '<div class="x-score x-score" score=0 >X: 0</div>'+
            '<div class="o-score o-score" score=0 >O: 0</div>'+
          '</div>'+
          '</div>'+
      '</header>'+
      '<div class="tic-tac-c">'+
        '<div class="tic-tac-squares" state=""></div>'+
        '<div class="tic-tac-squares" state=""></div>'+
        '<div class="tic-tac-squares" state=""></div>'+
        '<div class="tic-tac-squares" state=""></div>'+
        '<div class="tic-tac-squares" state=""></div>'+
        '<div class="tic-tac-squares" state=""></div>'+
        '<div class="tic-tac-squares" state=""></div>'+
        '<div class="tic-tac-squares" state=""></div>'+
        '<div class="tic-tac-squares" state=""></div>'+
      '</div>'+
      '<div class="history-c">'+
      '</div>'+
    '</div>');
// Increase game count
    nrOfBoards += 1;
});

$('body').on('click', '.nav-items', function() {
//reset
  var gameLevelParents = $(this).parents().parents().parents();


  var getCurrentGame = gameLevelParents.parents().parents().attr('game');
  gameLevelParents.parents().siblings('.tic-tac-c').children().attr('state',  '').empty();
  gameLevelParents.parents().siblings('.history-c').empty();
  gameLevelParents.siblings('.scoreboard-c').children('.winner').empty();
  // gameLevelParents.siblings('.scoreboard-c').children('.scoreboard').children('.x-score').empty().append('X: 0');
  // gameLevelParents.siblings('.scoreboard-c').children('.scoreboard').children('.o-score').empty().append('O: 0');
  allGames[(getCurrentGame)].endGame = 0;
  allGames[(getCurrentGame)].tie = 0;
  allGames[(getCurrentGame)].state = 'X';


  var size = $(this).attr('size');
  allGames[(getCurrentGame)].actualSize = size * size;
  var gameContainer = gameLevelParents.siblings('.tic-tac-c');
  var containerWidth = parseInt($('.tic-tac-c').children().css('width'));
  console.log(size);
  console.log(containerWidth);

  var containerAdjustedWidth = size * containerWidth;
  gameContainer.empty();
  gameContainer.css({'width': containerAdjustedWidth})
  for (var i = 0; i < allGames[(getCurrentGame)].actualSize; i++) {
    gameContainer.append('<div class="tic-tac-squares" state=""></div>');
  }
});
