class Player {
  constructor(inputName, playerIcon, gameChoice) {
    this.name = inputName,
    this.token = playerIcon,
    this.wins = 0;
    this.gameChoice = gameChoice;
  }
  saveWinsToStorage() {

  }
  retrieveWinsFromStorage() {

  }
  takeTurn(event) {
    humanPlayer.gameChoice = event.target.id;
    hide([playerChoiceRock, playerChoicePaper, playerChoiceScissors, playerChoiceSpock, playerChoiceLizard])
    show([event.target]);
    enableHoverGlow(event.target)
    game.startGame();
    game.decideWinner();
  }
}
