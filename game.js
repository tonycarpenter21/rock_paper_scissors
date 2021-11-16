class Game {
  constructor() {
    this.numberOfGamesPlayed = 0;
    this.currentGameType = 'classic';
  }
  startGame() {
    game.numberOfGamesPlayed += 1;
    hideDisableAndRemoveShadows();
    setTimeout(game.resetGame, 1500);
    if (game.currentGameType === 'classic') {
      game.computerPlayerChoosesClassic();
    } else {
      game.computerPlayerChoosesAdvanced();
    }
  }
  computerPlayerChoosesClassic() {
    var computerChoiceRandomizer = Math.random();
    if (computerChoiceRandomizer > .6666) {
      computerPlayer.gameChoice = 'rock';
      show([computerChoiceRock]);
    } else if (computerChoiceRandomizer > .3333) {
      computerPlayer.gameChoice = 'paper';
      show([computerChoicePaper]);
    } else {
      computerPlayer.gameChoice = 'scissors';
      show([computerChoiceScissors]);
    }
  }
  computerPlayerChoosesAdvanced() {
    var computerChoiceRandomizer = Math.random();
    if (computerChoiceRandomizer > .8) {
      computerPlayer.gameChoice = 'rock';
      show([computerChoiceRock]);
    } else if (computerChoiceRandomizer > .6) {
      computerPlayer.gameChoice = 'paper';
      show([computerChoicePaper]);
    } else if (computerChoiceRandomizer > .4) {
      computerPlayer.gameChoice = 'lizard';
      show([computerChoiceLizard]);
    } else if (computerChoiceRandomizer > .2) {
      computerPlayer.gameChoice = 'spock';
      show([computerChoiceSpock]);
    } else {
      computerPlayer.gameChoice = 'scissors';
      show([computerChoiceScissors]);
    }
  }
  decideWinner() {
    if (computerPlayer.gameChoice === humanPlayer.gameChoice) {
      replaceText(gameMessage, "It's a draw!");
    } else if (humanPlayer.gameChoice === 'rock') {
      if (computerPlayer.gameChoice === 'paper' || computerPlayer.gameChoice === 'spock') {
        computerWins();
      } else {
        humanWins();
      }
    } else if (humanPlayer.gameChoice === 'paper') {
      if (computerPlayer.gameChoice === 'scissors' || computerPlayer.gameChoice === 'lizard') {
        computerWins();
      } else {
        humanWins();
      }
    } else if (humanPlayer.gameChoice === 'scissors') {
      if (computerPlayer.gameChoice === 'rock' || computerPlayer.gameChoice === 'spock') {
        computerWins();
      } else {
        humanWins();
      }
    } else if (humanPlayer.gameChoice === 'lizard') {
      if (computerPlayer.gameChoice === 'scissors' || computerPlayer.gameChoice === 'rock') {
          computerWins();
      } else {
        humanWins();
      }
    } else if (humanPlayer.gameChoice === 'spock') {
      if (computerPlayer.gameChoice === 'paper' || computerPlayer.gameChoice === 'lizard') {
          computerWins();
      } else {
        humanWins();
      }
    }
  }
  resetGame() {
    setupNewGame();
    window.localStorage.setItem('humanPlayer', JSON.stringify(humanPlayer));
    window.localStorage.setItem('computerPlayer', JSON.stringify(computerPlayer));
    window.localStorage.setItem('numberOfGamesPlayed', JSON.stringify(game.numberOfGamesPlayed));
  }
  clearGameHistory(){
    localStorage.clear();
    humanPlayer.wins = 0
    computerPlayer.wins = 0
    game.numberOfGamesPlayed = 0
    updateScores()
  }
}

function pageLoad() {
  if (window.localStorage.getItem('humanPlayer') !== null && window.localStorage.getItem('computerPlayer') !== null) {
    console.log("hey")
    humanPlayer = JSON.parse(window.localStorage.getItem('humanPlayer'));
    computerPlayer = JSON.parse(window.localStorage.getItem('computerPlayer'));
    game.numberOfGamesPlayed = JSON.parse(window.localStorage.getItem('numberOfGamesPlayed'));
  }
}

var humanPlayer = new Player ('Human', '🤓');
var computerPlayer = new Player ('Computer', '🤖');
