
// Tic Tac Toe Variables
var tTV = {};
// Is it a 'X' or a 'O'
tTV.state = ($(this).children().attr('state'));
// Array that cointains all 9 game divs
tTV.divs = [];
// Triggers 'Tie' if necessary
tTV.endGame = 0;
// RESET
tTV.reset = 0;
// Scoreboard X
tTV.scoreboardX = 0;
// Scoreboard O
tTV.scoreboardO = 0;

$('#tic-tac-c div').click(function() {
  if(tTV.reset == 0) {


  // 99 is the null state
    if($(this).attr('state') === '?') {
      tTV.endGame += 1;
      tTV.divs = [];
      if (tTV.state == 0) {
        $(this).append('O');
        $(this).attr('state', 0);
        tTV.state = 1;
      } else {
        $(this).append('X');
        $(this).attr('state', 1);
        tTV.state = 0;
      }

    //Iterate through the 9 game divs
      $("#tic-tac-c").children().each(function(n) {
        tTV.divs.push($(this).attr('state'));
      });
      if (tTV.divs[0] == 1 && tTV.divs[1] == 1 && tTV.divs[2] == 1 ||
          tTV.divs[3] == 1 && tTV.divs[4] == 1 && tTV.divs[5] == 1 ||
          tTV.divs[6] == 1 && tTV.divs[7] == 1 && tTV.divs[8] == 1 ||
          tTV.divs[0] == 1 && tTV.divs[3] == 1 && tTV.divs[6] == 1 ||
          tTV.divs[1] == 1 && tTV.divs[4] == 1 && tTV.divs[7] == 1 ||
          tTV.divs[2] == 1 && tTV.divs[5] == 1 && tTV.divs[8] == 1 ||
          tTV.divs[2] == 1 && tTV.divs[4] == 1 && tTV.divs[6] == 1 ||
          tTV.divs[0] == 1 && tTV.divs[4] == 1 && tTV.divs[8] == 1) {
        $('#winner').append('X  wins!');
        //Make Board unclickable
        tTV.reset = 1;
        tTV.scoreboardX += 1;
        $('#scoreboard article').empty().append('X: ' + tTV.scoreboardX);
      } else if
         (tTV.divs[0] == 0 && tTV.divs[1] == 0 && tTV.divs[2] == 0 ||
          tTV.divs[3] == 0 && tTV.divs[4] == 0 && tTV.divs[5] == 0 ||
          tTV.divs[6] == 0 && tTV.divs[7] == 0 && tTV.divs[8] == 0 ||
          tTV.divs[0] == 0 && tTV.divs[3] == 0 && tTV.divs[6] == 0 ||
          tTV.divs[1] == 0 && tTV.divs[4] == 0 && tTV.divs[7] == 0 ||
          tTV.divs[2] == 0 && tTV.divs[5] == 0 && tTV.divs[8] == 0 ||
          tTV.divs[2] == 0 && tTV.divs[4] == 0 && tTV.divs[6] == 0 ||
          tTV.divs[0] == 0 && tTV.divs[4] == 0 && tTV.divs[8] == 0) {
        $('#winner').append('O  wins!');
        //Make Board unclickable
        tTV.reset = 1;
        tTV.scoreboardO += 1;
        $('#scoreboard aside').empty().append('O: ' + tTV.scoreboardO);
      } else if (tTV.endGame == 9) {
        $('#winner').append('Tie');
    // In case of win at last move
        tTV.endGame += 100;
        tTV.reset = 1;
      }
      // console.log(
      //   tTV.divs[0], tTV.divs[1], tTV.divs[2],
      //   tTV.divs[3], tTV.divs[4], tTV.divs[5],
      //   tTV.divs[6], tTV.divs[7], tTV.divs[8]
      // );
      for (let i = 0; i < tTV.divs.length; i++) {
        if (tTV.divs[i] == '?') {
          tTV.divs[i] = '';
        } else if (tTV.divs[i] == 0) {
          tTV.divs[i] = 'O';
        } else if (tTV.divs[i] == 1) {
          tTV.divs[i] = 'X';
        }
      }
    // Get array of game results
      $("#history-c").append(
        '<div class="history">'+
          '<div>' + tTV.divs[0] + '</div>'+
          '<div>' + tTV.divs[1] + '</div>'+
          '<div>' + tTV.divs[2] + '</div>'+
          '<div>' + tTV.divs[3] + '</div>'+
          '<div>' + tTV.divs[4] + '</div>'+
          '<div>' + tTV.divs[5] + '</div>'+
          '<div>' + tTV.divs[6] + '</div>'+
          '<div>' + tTV.divs[7] + '</div>'+
          '<div>' + tTV.divs[8] + '</div>'+
        '</div>'
      );
    }
  }
});
// RESET ALL
$('#button').click(function() {
  $("#tic-tac-c").children().attr('state', '?').empty();
  $("#history-c").empty();
  $('#winner').empty();
  $('#tic-tac-c div').on('click');
  // startGame();
  tTV.reset = 0;
  tTV.endGame = 0;
  tTV.state = 1;
});
