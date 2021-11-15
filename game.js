class Game {
  constructor(gameChoice) {
    this.numberOfGamesPlayed = 0;
    this.currentGameType = gameChoice;
  }
  startGame() {
    game.numberOfGamesPlayed += 1;
    disablePlayerButtons([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock, changeGameButton, howToPlayButton]);
    disableShadows([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock]);
    setTimeout(game.resetGame, 1500);
    if (gameChoice === 'classic') {
      computerPlayerChoosesClassic();
    } else {
      computerPlayerChoosesAdvanced();
    }
  }
  decideWinner() {
    if (choiceComputerPlayer === choiceHumanPlayer) {
      replaceText(gameMessage, "It's a draw!");
    } else if (choiceHumanPlayer === 'rock') {
      if (choiceComputerPlayer === 'paper' || choiceComputerPlayer === 'spock') {
        computerWins();
      } else {
        humanWins();
      }
    } else if (choiceHumanPlayer === 'paper') {
      if (choiceComputerPlayer === 'scissors' || choiceComputerPlayer === 'lizard') {
        computerWins();
      } else {
        humanWins();
      }
    } else if (choiceHumanPlayer === 'scissors') {
      if (choiceComputerPlayer === 'rock' || choiceComputerPlayer === 'spock') {
        computerWins();
      } else {
        humanWins();
      }
    } else if (choiceHumanPlayer === 'lizard') {
      if (choiceComputerPlayer === 'scissors' || choiceComputerPlayer === 'rock') {
          computerWins();
      } else {
        humanWins();
      }
    } else if (choiceHumanPlayer === 'spock') {
      if (choiceComputerPlayer === 'paper' || choiceComputerPlayer === 'lizard') {
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
