
// Tic Tac Toe Variables
var game = {};
// Is it a 'X' or a 'O'
game.state = 'X';
// Array that cointains all 9 game divs
game.divs = [];
// Array that cointains all the actual 'X' and 'O'
game.divsHisS = [];
// Triggers 'Tie' if necessary
game.tie = 0;
// EndGame
game.endGame = 0;
// EndGame history
game.endGameH = 0;
// Scoreboard X
game.scoreboardX = 0;
// Scoreboard O
game.scoreboardO = 0;
// Clicked history board
game.historyClicked = 0;


game.scoreboardX = parseInt($('#scoreboard article').attr('score'));
game.scoreboardO = parseInt($('#scoreboard aside').attr('score'));



$('#tic-tac-c div').click(function() {
  if (game.divsHisS.length > 0) {
    game.historyClicked.children().css({'background-color': ''})
    game.historyClicked.nextAll().remove();
    game.divsHisS = [];
  }
  if(game.endGame == 0) {


  //   is the null state
    if($(this).attr('state') === '') {
      game.tie += 1;
      game.divs = [];
      if (game.state == 'O') {
        $(this).append('O');
        $(this).attr('state', 'O');
        game.state = 'X';
      } else {
        $(this).append('X');
        $(this).attr('state', 'X');
        game.state = 'O';
      }

    //Iterate through the 9 game divs
      $("#tic-tac-c").children().each(function(n) {
        game.divs.push($(this).attr('state'));
      });
      if (game.divs[0] == 'X' && game.divs[1] == 'X' && game.divs[2] == 'X' ||
          game.divs[3] == 'X' && game.divs[4] == 'X' && game.divs[5] == 'X' ||
          game.divs[6] == 'X' && game.divs[7] == 'X' && game.divs[8] == 'X' ||
          game.divs[0] == 'X' && game.divs[3] == 'X' && game.divs[6] == 'X' ||
          game.divs[1] == 'X' && game.divs[4] == 'X' && game.divs[7] == 'X' ||
          game.divs[2] == 'X' && game.divs[5] == 'X' && game.divs[8] == 'X' ||
          game.divs[2] == 'X' && game.divs[4] == 'X' && game.divs[6] == 'X' ||
          game.divs[0] == 'X' && game.divs[4] == 'X' && game.divs[8] == 'X') {
        $('#winner').append('X wins!').attr('result', 'X wins!');
        //Make Board unclickable
        game.endGame = 1;
        game.scoreboardX = parseInt($('#scoreboard article').attr('score'));
        game.scoreboardX += 1;
        $('#scoreboard article').empty()
          .append('X: ' + game.scoreboardX).attr('score', game.scoreboardX);
      } else if
         (game.divs[0] == 'O' && game.divs[1] == 'O' && game.divs[2] == 'O' ||
          game.divs[3] == 'O' && game.divs[4] == 'O' && game.divs[5] == 'O' ||
          game.divs[6] == 'O' && game.divs[7] == 'O' && game.divs[8] == 'O' ||
          game.divs[0] == 'O' && game.divs[3] == 'O' && game.divs[6] == 'O' ||
          game.divs[1] == 'O' && game.divs[4] == 'O' && game.divs[7] == 'O' ||
          game.divs[2] == 'O' && game.divs[5] == 'O' && game.divs[8] == 'O' ||
          game.divs[2] == 'O' && game.divs[4] == 'O' && game.divs[6] == 'O' ||
          game.divs[0] == 'O' && game.divs[4] == 'O' && game.divs[8] == 'O') {
        $('#winner').append('O wins!').attr('result', 'O wins!');
        //Make Board unclickable
        game.endGame = 1;
        game.scoreboardO = parseInt($('#scoreboard aside').attr('score'));
        game.scoreboardO += 1;
        $('#scoreboard aside').empty()
          .append('O: ' + game.scoreboardO).attr('score', game.scoreboard0);
      } else if (game.tie == 9) {
        $('#winner').append('Tie').attr('result', 'Tie');
    // In case of win at last move
        game.tie += 100;
        game.endGame = 1;
      }
      // console.log(
      //   game.divs[0], game.divs[1], game.divs[2],
      //   game.divs[3], game.divs[4], game.divs[5],
      //   game.divs[6], game.divs[7], game.divs[8]
      // );
// Replace 1 / 0 /  '' with X / O / ''
      for (let i = 0; i < game.divs.length; i++) {
        if (game.divs[i] ==  '') {
          game.divs[i] = '';
        } else if (game.divs[i] == 'O') {
          game.divs[i] = 'O';
        } else if (game.divs[i] == 'X') {
          game.divs[i] = 'X';
        }
      }
    // Get array of game results
      $("#history-c").append(
        '<div class="history">'+
          '<div stateh ='+ game.divs[0] + '>' + game.divs[0] + '</div>' +
          '<div stateh ='+ game.divs[1] + '>' + game.divs[1] + '</div>' +
          '<div stateh ='+ game.divs[2] + '>' + game.divs[2] + '</div>' +
          '<div stateh ='+ game.divs[3] + '>' + game.divs[3] + '</div>' +
          '<div stateh ='+ game.divs[4] + '>' + game.divs[4] + '</div>' +
          '<div stateh ='+ game.divs[5] + '>' + game.divs[5] + '</div>' +
          '<div stateh ='+ game.divs[6] + '>' + game.divs[6] + '</div>' +
          '<div stateh ='+ game.divs[7] + '>' + game.divs[7] + '</div>' +
          '<div stateh ='+ game.divs[8] + '>' + game.divs[8] + '</div>' +
        '</div>'
      );
    }
  }
});
// RESET ALL
$('#button').click(function() {
  $("#tic-tac-c").children().attr('state',  '').empty();
  $("#history-c").empty();
  $('#winner').empty();
  $('#tic-tac-c div').on('click');
  // startGame();
  game.endGame = 0;
  game.tie = 0;
  game.state = 'X';
});
//
$('#history-c').on('click', '.history', function(e) {

  game.historyClicked = $(this, '.history');
  game.tie = 0;
  game.divs = [];
  game.divsHisS = [];
  game.historyClicked.children().css({'background-color': 'turquoise'});
  game.historyClicked.nextAll().children().css({'background-color': 'rgb(255, 151, 61)'});
  game.historyClicked.prevAll().children().css({'background-color': ''});
  for (let i = 0; i < $(this, '.history').children().length; i++) {
    // console.log(i);
    game.divs.push($(this, '.history').children(':nth-child('+ (i+1) +')').attr('stateh'));
    // console.log(game.divs[i]);
    $('#tic-tac-c').children(':nth-child('+ (i+1) +')').empty();
    $('#tic-tac-c').children(':nth-child('+ (i+1) +')').append(game.divs[i]);
    $('#tic-tac-c').children(':nth-child('+ (i+1) +')').attr('state', String(game.divs[i]));
  }

//GET game.state, who's turn is it
  for (let i = 0; i < game.divs.length; i++) {
    if (game.divs[i].length == '1') {
      game.tie += 1;
      game.divsHisS.push(i);
    }
  }
  if((game.divsHisS.length % 2) == 0) {
    game.state = 'X';
  } else if((game.divsHisS.length % 2) == 1) {
    game.state = 'O';
  }









var historyWinner = String($('#winner').attr('result'));
  console.log(historyWinner);
  console.log(game.scoreboardX);
  console.log(game.scoreboardO);
// all history boards instead of the last winning move
  if (( $ (e.target).is($('#history-c').children().children()
      .not($('#history-c').children(':nth-last-child(1)').children()))) &&
        (game.endGame == 1 || game.endGameH == 0)) {
        $('#winner').empty();
        game.endGame = 0;
        game.endGameH = 1;
        if (historyWinner == 'X wins!') {
          game.scoreboardX -= 1;
        } else if (historyWinner == 'O wins!') {
          game.scoreboardO -= 1;
        }
        $('#scoreboard article').empty();
        $('#scoreboard aside').empty();
        $('#scoreboard article').append('X: ' + game.scoreboardX).attr('score', game.scoreboardX);
        $('#scoreboard aside').append('O: ' + game.scoreboardO).attr('score', game.scoreboardO);
        // alert(historyWinner);
// winning move history board
  } else if (($(e.target).is($('#history-c')
      .children(':nth-last-child(1)').children())) &&
      (game.endGame == 1 || game.endGameH == 1)) {
        $('#winner').empty();
        $('#winner').append(historyWinner);
        if (historyWinner == 'X wins!' && game.endGameH == 1) {
          game.scoreboardX += 1;
        } else if (historyWinner == 'O wins!' && game.endGameH == 1) {
          game.scoreboardO += 1;
        }
        game.endGameH = 0;
        $('#scoreboard article').empty();
        $('#scoreboard aside').empty();
        $('#scoreboard article').append('X: ' + game.scoreboardX).attr('score', game.scoreboardX);
        $('#scoreboard aside').append('O: ' + game.scoreboardO).attr('score', game.scoreboardO);
  }
});

 // $(this, '.history').children(':nth-child('i')');
