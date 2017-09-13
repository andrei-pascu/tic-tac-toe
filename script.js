






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
    allGames[(getCurrentGame)].divs = [];
// Get state of all game divs
      // if (allGames[(getCurrentGame)].divs[0] == 'X' && allGames[(getCurrentGame)].divs[1] == 'X' && allGames[(getCurrentGame)].divs[2] == 'X' ||
      //     allGames[(getCurrentGame)].divs[3] == 'X' && allGames[(getCurrentGame)].divs[4] == 'X' && allGames[(getCurrentGame)].divs[5] == 'X' ||
      //     allGames[(getCurrentGame)].divs[6] == 'X' && allGames[(getCurrentGame)].divs[7] == 'X' && allGames[(getCurrentGame)].divs[8] == 'X' ||
      //     allGames[(getCurrentGame)].divs[0] == 'X' && allGames[(getCurrentGame)].divs[3] == 'X' && allGames[(getCurrentGame)].divs[6] == 'X' ||
      //     allGames[(getCurrentGame)].divs[1] == 'X' && allGames[(getCurrentGame)].divs[4] == 'X' && allGames[(getCurrentGame)].divs[7] == 'X' ||
      //     allGames[(getCurrentGame)].divs[2] == 'X' && allGames[(getCurrentGame)].divs[5] == 'X' && allGames[(getCurrentGame)].divs[8] == 'X' ||
      //     allGames[(getCurrentGame)].divs[2] == 'X' && allGames[(getCurrentGame)].divs[4] == 'X' && allGames[(getCurrentGame)].divs[6] == 'X' ||
      //     allGames[(getCurrentGame)].divs[0] == 'X' && allGames[(getCurrentGame)].divs[4] == 'X' && allGames[(getCurrentGame)].divs[8] == 'X') {


//for ( var i = 0; i < curntS; i++) {// var logicX = (
// ((    v[i] && v[i+curntS+1] && v[i+curntS+curntS+2]             ) ||
// (    v[i] && v[i+curntS-1] && v[i+curntS+curntS-2]             ) ||
// (    v[i] && v[i+1] && v[i+2]                                  ) ||
// (    v[i] && v[i+curntS] && v[i+(curntS+curntS)]               ))&&
// (    v[i*curntS-1] && v[i*curntS] && v[i*curntS+1]             ) ||
// (    v[i*curntS-2] && v[i*curntS-1] && v[i*curntS]             )
//
//
//
//     );
// var exception = (
//       (v[i*curntS - 1] && v[i*curntS] && v[i*curntS+1]) ||
//       (v[i*curntS - 2] && v[i*curntS-1] && v[i*curntS])
//     );
















const curntS = Math.sqrt(allGames[(getCurrentGame)].actualSize);
// n = curntS
var v = allGames[(getCurrentGame)].divs;
//
//
// // get all divs

      $(this).parents().children('.tic-tac-squares').each(function(n) {
        v.push($(this).attr('state'));
      });
//
var rowsHolder = [];
allGames[(getCurrentGame)].rows = [];
for ( let i = 0; i < curntS; i++) {
    for ( let j = 0; j < curntS; j++) {
      rowsHolder.push(v[i * curntS + j]);
    }

    allGames[(getCurrentGame)].rows.push(rowsHolder);
    rowsHolder = [];
}

var rows = allGames[(getCurrentGame)].rows;
console.log(rows);

for ( let i = 0; i < curntS; i++) {
  for ( let j = 0; j < curntS; j++) {
    if ( (j == 0) || (j == (curntS-1))  ) { continue; }
    if (  (((rows[i][j-1]) == 'X') && ((rows[i][j]) == 'X') && ((rows[i][j+1]) == 'X'))  ||
          (((rows[j-1][i]) == 'X') && ((rows[j][i]) == 'X') && ((rows[j+1][i]) == 'X')) ||
          (((rows[j-1][i-1]) == 'X') && ((rows[j][i]) == 'X') && ((rows[j+1][i+1]) == 'X')) ||
          (((rows[j-1][i+1]) == 'X') && ((rows[j][i]) == 'X') && ((rows[j+1][i-1]) == 'X'))  ) {

      $(this).parents().siblings('header').children('.scoreboard-c').children('.winner').append('X wins!').attr('result', 'X wins!');
      //Make Board unclickable
      allGames[(getCurrentGame)].endGame = 1;
      allGames[(getCurrentGame)].scoreboardX = parseInt($(this).parents().siblings('header').children('.scoreboard-c').children('.scoreboard').children('.x-score').attr('score'));
      allGames[(getCurrentGame)].scoreboardX += 1;
      $(this).parents().siblings('header').children('.scoreboard-c').children('.scoreboard').children('.x-score').empty()
      .append('X: ' + allGames[(getCurrentGame)].scoreboardX).attr('score', allGames[(getCurrentGame)].scoreboardX);
      // i = allGames[(getCurrentGame)].actualSize;




    } else if ( (((rows[i][j-1]) == 'O')   && ((rows[i][j]) == 'O') && ((rows[i][j+1]) == 'O'))   ||
                (((rows[j-1][i]) == 'O')   && ((rows[j][i]) == 'O') && ((rows[j+1][i]) == 'O'))   ||
                (((rows[j-1][i-1]) == 'O') && ((rows[j][i]) == 'O') && ((rows[j+1][i+1]) == 'O')) ||
                (((rows[j-1][i+1]) == 'O') && ((rows[j][i]) == 'O') && ((rows[j+1][i-1]) == 'O'))  ) {

      $(this).parents().siblings('header').children('.scoreboard-c').children('.winner').append('O wins!').attr('result', 'O wins!');
      //Make Board unclickable
      allGames[(getCurrentGame)].endGame = 1;
      allGames[(getCurrentGame)].scoreboardO = parseInt($(this).parents().siblings('header').children('.scoreboard-c').children('.scoreboard').children('.o-score').attr('score'));
      allGames[(getCurrentGame)].scoreboardO += 1;

      $(this).parents().siblings('header').children('.scoreboard-c').children('.scoreboard').children('.o-score').empty()
      .append('O: ' + allGames[(getCurrentGame)].scoreboardO).attr('score', allGames[(getCurrentGame)].scoreboardO);
      // i = allGames[(getCurrentGame)].actualSize;
    } else if (allGames[(getCurrentGame)].tie == allGames[(getCurrentGame)].actualSize) {
              $(this).parents().siblings('header').children('.scoreboard-c').children('.winner').append('Tie').attr('result', 'Tie');
      // In case of win at last move
              allGames[(getCurrentGame)].tie += 100;
              allGames[(getCurrentGame)].endGame = 1;
    }
  }
}
//  if (currRow[c] == 0)  // we don't care about empty cells
//      continue;
//  toTheLeft  = c - 1;
//  toTheRight = c + 1;
//  if (toTheLeft < 0 || toTheRight >= n)
//      continue;   // out of bounds
//  if(currRow[c] == currRow[toTheLeft] && currRow[c] == currRow[toTheRight])
//      console.log(currRow[c], 'wins, at position', r, c);


//}
//for ( var i = 0; i < n*n; i++ ) {
//	v.push(i*n + );

//}
// var boards = [];
// // create matrix
// for ( var i = 0; i < curntS; i++) {
// 	boards.push(i*curntS, i*curntS+1, i*curntS)
// }
//
//

//v = [
  //[0, 0, 0, 0, 0, 0],
 // [0, 1, 1, 1, 0, 0],
 // [0, 0, 0, 0, 0, 0],
  //[0, 0, 0, 0, 1, 0],
 // [0, 0, 0, 0, 1, 0],
 // [0, 0, 0, 0, 1, 0],
//]
// s = ""
// for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; j++)
//         s += v[i][j] + " "
//     s += "\n"
// }
// console.log(s)
//
// for (var r = 0; r < n; r++) {
//
//
//     for (var c = 0; c < n; c++)  currRow = board[r];
//
//
//
//





// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// incearca s-o pui intr-o function si sa pui ca argument 'X', si s-o chemi in if
//var logicX = (
//     (v[i]=== 'X' && v[curntS+i]=== 'X' && v[curntS+curntS+i]=== 'X')         ||
//     (v[i*curntS]=== 'X' && v[i*curntS + 1]=== 'X' && v[i*curntS + 2]=== 'X') ||
//      (v[0]=== 'X' && v[4]=== 'X' && v[8]=== 'X')          ||
//      (v[2]=== 'X' && v[4]=== 'X' && v[6]=== 'X') );

// alert(i);
// console.log('Column: '+v[i] + ', '+ v[curntS+i] + ', '+v[curntS+curntS+i]);
// console.log('Row: '+v[i*curntS] + ', '+ v[i*curntS + 1] + ', '+v[i*curntS + 2]);


// console.log('Diagonal to right : '+v[0] + ', '+ v[curntS - 1] + ', '+v[curntS*2 + 2]);
// console.log('Diagonal to left : '+v[curntS - 1] + ', '+ v[curntS + 1] + ', '+v[curntS*2]);

// var logicX;
//
//
//         if ( logicX   ) {
//   // alert('X');
//
//       } else if (logicX === 'O') {
// alert('O');
//
//
//       } else if (allGames[(getCurrentGame)].tie == allGames[(getCurrentGame)].actualSize) {
//
//       }

};
// Add state to stateh attribute
// Add state as text


  $(this).parents().siblings(".history-c").append('<div class="history"></div>');
  var containerWidth = parseInt($(this).parents().siblings(".history-c").children(".history").css('width'));
  containerWidth = (35 * (Math.sqrt(allGames[(getCurrentGame)].actualSize))) + 'px';
  $(this).parents().siblings(".history-c").children().css({'width': containerWidth });
  // alert(elementsWidth);

  for ( let i = 0; i < allGames[(getCurrentGame)].actualSize; i++ ) {
    $(this).parents().siblings(".history-c").children(':nth-last-child(1)')
    .append('<div stateh ='+ allGames[(getCurrentGame)].divs[i] + '>' + allGames[(getCurrentGame)].divs[i] + '</div>');
  }
      // $(this).parents().siblings(".history-c")
      // .append(
      //     '<div stateh ='+ allGames[(getCurrentGame)].divs[0] + '>' + allGames[(getCurrentGame)].divs[0] + '</div>' +
      //     '<div stateh ='+ allGames[(getCurrentGame)].divs[1] + '>' + allGames[(getCurrentGame)].divs[1] + '</div>' +
      //     '<div stateh ='+ allGames[(getCurrentGame)].divs[2] + '>' + allGames[(getCurrentGame)].divs[2] + '</div>' +
      //     '<div stateh ='+ allGames[(getCurrentGame)].divs[3] + '>' + allGames[(getCurrentGame)].divs[3] + '</div>' +
      //     '<div stateh ='+ allGames[(getCurrentGame)].divs[4] + '>' + allGames[(getCurrentGame)].divs[4] + '</div>' +
      //     '<div stateh ='+ allGames[(getCurrentGame)].divs[5] + '>' + allGames[(getCurrentGame)].divs[5] + '</div>' +
      //     '<div stateh ='+ allGames[(getCurrentGame)].divs[6] + '>' + allGames[(getCurrentGame)].divs[6] + '</div>' +
      //     '<div stateh ='+ allGames[(getCurrentGame)].divs[7] + '>' + allGames[(getCurrentGame)].divs[7] + '</div>' +
      //     '<div stateh ='+ allGames[(getCurrentGame)].divs[8] + '>' + allGames[(getCurrentGame)].divs[8] + '</div>'
      // );
    }
//  }
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
  var containerAdjustedWidth = size * containerWidth;
  gameContainer.empty();
  gameContainer.css({'width': containerAdjustedWidth})
  for (var i = 0; i < allGames[(getCurrentGame)].actualSize; i++) {
    gameContainer.append('<div class="tic-tac-squares" state=""></div>');
  }
});
