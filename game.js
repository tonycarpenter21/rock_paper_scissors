var humanPlayer = new Player ('Human', '🤓');
var computerPlayer = new Player ('Computer', '🤖');

class Game {
  constructor() {
    this.numberOfGamesPlayed = 0;
    this.currentGameType = 'classic';
  }
  startGame() {
    game.numberOfGamesPlayed += 1;
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
      computerPlayer.gameChoice = 'choiceRock';
      show([computerChoiceRock]);
    } else if (computerChoiceRandomizer > .3333) {
      computerPlayer.gameChoice = 'choicePaper';
      show([computerChoicePaper]);
    } else {
      computerPlayer.gameChoice = 'choiceScissors';
      show([computerChoiceScissors]);
    }
  }
  computerPlayerChoosesAdvanced() {
    var computerChoiceRandomizer = Math.random();
    if (computerChoiceRandomizer > .8) {
      computerPlayer.gameChoice = 'choiceRock';
      show([computerChoiceRock]);
    } else if (computerChoiceRandomizer > .6) {
      computerPlayer.gameChoice = 'choicePaper';
      show([computerChoicePaper]);
    } else if (computerChoiceRandomizer > .4) {
      computerPlayer.gameChoice = 'choiceScissors';
      show([computerChoiceScissors]);
    } else if (computerChoiceRandomizer > .2) {
      computerPlayer.gameChoice = 'choiceSpock';
      show([computerChoiceSpock]);
    } else {
      computerPlayer.gameChoice = 'choiceLizard';
      show([computerChoiceLizard]);
    }
  }
  decideWinner() {
    if (computerPlayer.gameChoice === humanPlayer.gameChoice) {
      replaceText(gameMessage, 'It\'s a draw!');
    } else if (humanPlayer.gameChoice === 'choiceRock') {
      if (computerPlayer.gameChoice === 'choicePaper' || computerPlayer.gameChoice === 'choiceSpock') {
        computerWins();
      } else {
        humanWins();
      }
    } else if (humanPlayer.gameChoice === 'choicePaper') {
      if (computerPlayer.gameChoice === 'choiceScissors' || computerPlayer.gameChoice === 'choiceLizard') {
        computerWins();
      } else {
        humanWins();
      }
    } else if (humanPlayer.gameChoice === 'choiceScissors') {
      if (computerPlayer.gameChoice === 'choiceRock' || computerPlayer.gameChoice === 'choiceSpock') {
        computerWins();
      } else {
        humanWins();
      }
    } else if (humanPlayer.gameChoice === 'choiceLizard') {
      if (computerPlayer.gameChoice === 'choiceScissors' || computerPlayer.gameChoice === 'choiceRock') {
        computerWins();
      } else {
        humanWins();
      }
    } else if (humanPlayer.gameChoice === 'choiceSpock') {
      if (computerPlayer.gameChoice === 'choicePaper' || computerPlayer.gameChoice === 'choiceLizard') {
        computerWins();
      } else {
        humanWins();
      }
    }
  }
  resetGame() {
    setupNewGame();
    humanPlayer.saveWinsToStorage();
  }
  clearGameHistory(){
    localStorage.clear();
    humanPlayer.wins = 0;
    computerPlayer.wins = 0;
    game.numberOfGamesPlayed = 0;
    updateScores();
  }
}
