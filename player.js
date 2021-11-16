class Player {
  constructor(inputName, playerIcon, gameChoice) {
    this.name = inputName;
    this.token = playerIcon;
    this.wins = 0;
    this.gameChoice = gameChoice;
  }
  saveWinsToStorage() {
    window.localStorage.setItem('humanPlayer', JSON.stringify(humanPlayer));
    window.localStorage.setItem('computerPlayer', JSON.stringify(computerPlayer));
    window.localStorage.setItem('numberOfGamesPlayed', JSON.stringify(game.numberOfGamesPlayed));
  }
  retrieveWinsFromStorage() {
    humanPlayer.wins = JSON.parse(window.localStorage.getItem('humanPlayer')).wins;
    computerPlayer.wins = JSON.parse(window.localStorage.getItem('computerPlayer')).wins;
    game.numberOfGamesPlayed = JSON.parse(window.localStorage.getItem('numberOfGamesPlayed'));
  }
  takeTurn(event) {
    humanPlayer.gameChoice = event.target.id;
    takeTurnHideShowAndGlow(event)
    game.startGame();
    game.decideWinner();
  }
}
