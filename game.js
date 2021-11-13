class Game {
  constructor(gameChoice) {
    this.numberOfGamesPlayed = 0;
    this.currentGameType = gameChoice;
  }
  decideWinner() {

  }
  resetGame() {

  }
}

var humanPlayer = new Player ('Human', '🤓');
var computerPlayer = new Player ('Computer', '🤖');


// A way to keep track of the selected game type
// A way to reset the Game’s board to begin a new game
