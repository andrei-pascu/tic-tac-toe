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
  historyWinner: 0
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
    allGames[(getCurrentGame)].divs = [];
// Get state of all game divs
      $(this).parents().children('.tic-tac-squares').each(function(n) {
        allGames[(getCurrentGame)].divs.push($(this).attr('state'));
      });
      if (allGames[(getCurrentGame)].divs[0] == 'X' && allGames[(getCurrentGame)].divs[1] == 'X' && allGames[(getCurrentGame)].divs[2] == 'X' ||
          allGames[(getCurrentGame)].divs[3] == 'X' && allGames[(getCurrentGame)].divs[4] == 'X' && allGames[(getCurrentGame)].divs[5] == 'X' ||
          allGames[(getCurrentGame)].divs[6] == 'X' && allGames[(getCurrentGame)].divs[7] == 'X' && allGames[(getCurrentGame)].divs[8] == 'X' ||
          allGames[(getCurrentGame)].divs[0] == 'X' && allGames[(getCurrentGame)].divs[3] == 'X' && allGames[(getCurrentGame)].divs[6] == 'X' ||
          allGames[(getCurrentGame)].divs[1] == 'X' && allGames[(getCurrentGame)].divs[4] == 'X' && allGames[(getCurrentGame)].divs[7] == 'X' ||
          allGames[(getCurrentGame)].divs[2] == 'X' && allGames[(getCurrentGame)].divs[5] == 'X' && allGames[(getCurrentGame)].divs[8] == 'X' ||
          allGames[(getCurrentGame)].divs[2] == 'X' && allGames[(getCurrentGame)].divs[4] == 'X' && allGames[(getCurrentGame)].divs[6] == 'X' ||
          allGames[(getCurrentGame)].divs[0] == 'X' && allGames[(getCurrentGame)].divs[4] == 'X' && allGames[(getCurrentGame)].divs[8] == 'X') {
        $(this).parents().siblings('header').children('.scoreboard-c').children('.winner').append('X wins!').attr('result', 'X wins!');
        //Make Board unclickable
        allGames[(getCurrentGame)].endGame = 1;
        allGames[(getCurrentGame)].scoreboardX = parseInt($(this).parents().siblings('header').children('.scoreboard-c').children('.scoreboard').children('.x-score').attr('score'));
        allGames[(getCurrentGame)].scoreboardX += 1;
        $(this).parents().siblings('header').children('.scoreboard-c').children('.scoreboard').children('.x-score').empty()
          .append('X: ' + allGames[(getCurrentGame)].scoreboardX).attr('score', allGames[(getCurrentGame)].scoreboardX);
      } else if
         (allGames[(getCurrentGame)].divs[0] == 'O' && allGames[(getCurrentGame)].divs[1] == 'O' && allGames[(getCurrentGame)].divs[2] == 'O' ||
          allGames[(getCurrentGame)].divs[3] == 'O' && allGames[(getCurrentGame)].divs[4] == 'O' && allGames[(getCurrentGame)].divs[5] == 'O' ||
          allGames[(getCurrentGame)].divs[6] == 'O' && allGames[(getCurrentGame)].divs[7] == 'O' && allGames[(getCurrentGame)].divs[8] == 'O' ||
          allGames[(getCurrentGame)].divs[0] == 'O' && allGames[(getCurrentGame)].divs[3] == 'O' && allGames[(getCurrentGame)].divs[6] == 'O' ||
          allGames[(getCurrentGame)].divs[1] == 'O' && allGames[(getCurrentGame)].divs[4] == 'O' && allGames[(getCurrentGame)].divs[7] == 'O' ||
          allGames[(getCurrentGame)].divs[2] == 'O' && allGames[(getCurrentGame)].divs[5] == 'O' && allGames[(getCurrentGame)].divs[8] == 'O' ||
          allGames[(getCurrentGame)].divs[2] == 'O' && allGames[(getCurrentGame)].divs[4] == 'O' && allGames[(getCurrentGame)].divs[6] == 'O' ||
          allGames[(getCurrentGame)].divs[0] == 'O' && allGames[(getCurrentGame)].divs[4] == 'O' && allGames[(getCurrentGame)].divs[8] == 'O') {


    $(this).parents().siblings('header').children('.scoreboard-c').children('.winner').append('O wins!').attr('result', 'O wins!');
        //Make Board unclickable
        allGames[(getCurrentGame)].endGame = 1;
        allGames[(getCurrentGame)].scoreboardO = parseInt($(this).parents().siblings('header').children('.scoreboard-c').children('.scoreboard').children('.o-score').attr('score'));
        allGames[(getCurrentGame)].scoreboardO += 1;

        $(this).parents().siblings('header').children('.scoreboard-c').children('.scoreboard').children('.o-score').empty()
          .append('O: ' + allGames[(getCurrentGame)].scoreboardO).attr('score', allGames[(getCurrentGame)].scoreboardO);
      } else if (allGames[(getCurrentGame)].tie == 9) {
        $(this).parents().siblings('header').children('.scoreboard-c').children('.winner').append('Tie').attr('result', 'Tie');
// In case of win at last move
        allGames[(getCurrentGame)].tie += 100;
        allGames[(getCurrentGame)].endGame = 1;
      }
// Add state to stateh attribute
// Add state as text
      $(this).parents().siblings(".history-c")
      .append(
        '<div class="history">'+
          '<div stateh ='+ allGames[(getCurrentGame)].divs[0] + '>' + allGames[(getCurrentGame)].divs[0] + '</div>' +
          '<div stateh ='+ allGames[(getCurrentGame)].divs[1] + '>' + allGames[(getCurrentGame)].divs[1] + '</div>' +
          '<div stateh ='+ allGames[(getCurrentGame)].divs[2] + '>' + allGames[(getCurrentGame)].divs[2] + '</div>' +
          '<div stateh ='+ allGames[(getCurrentGame)].divs[3] + '>' + allGames[(getCurrentGame)].divs[3] + '</div>' +
          '<div stateh ='+ allGames[(getCurrentGame)].divs[4] + '>' + allGames[(getCurrentGame)].divs[4] + '</div>' +
          '<div stateh ='+ allGames[(getCurrentGame)].divs[5] + '>' + allGames[(getCurrentGame)].divs[5] + '</div>' +
          '<div stateh ='+ allGames[(getCurrentGame)].divs[6] + '>' + allGames[(getCurrentGame)].divs[6] + '</div>' +
          '<div stateh ='+ allGames[(getCurrentGame)].divs[7] + '>' + allGames[(getCurrentGame)].divs[7] + '</div>' +
          '<div stateh ='+ allGames[(getCurrentGame)].divs[8] + '>' + allGames[(getCurrentGame)].divs[8] + '</div>' +
        '</div>'
      );
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
              '<div class="nav-items">3x3</div>'+
              '<div class="nav-items">4x4</div>'+
              '<div class="nav-items">5x5</div>'+
              '<div class="nav-items">6x6</div>'+
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
