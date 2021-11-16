var game = new Game();
var buttonChangeGame = document.getElementById('buttonChangeGame');
var buttonHowToPlay = document.getElementById('buttonHowToPlay');
var buttonHome = document.getElementById('buttonHome');
var buttonClassicGame = document.getElementById('buttonClassicGame');
var buttonAdvancedGame = document.getElementById('buttonAdvancedGame');
var buttonClearGameHistory = document.getElementById('buttonClearGameHistory');
var viewStart = document.getElementById('viewStart');
var viewGame = document.getElementById('viewGame');
var viewHelp = document.getElementById('viewHelp');
var gameMessage = document.getElementById('gameMessage');
var playerChoiceRock = document.getElementById('choiceRock');
var playerChoicePaper = document.getElementById('choicePaper');
var playerChoiceScissors = document.getElementById('choiceScissors');
var playerChoiceLizard = document.getElementById('choiceLizard');
var playerChoiceSpock = document.getElementById('choiceSpock');
var humanScore = document.getElementById('humanScore');
var humanLosses = document.getElementById('humanLosses');
var humanName = document.getElementById('humanName');
var humanIcon = document.getElementById('humanIcon');
var humanGamesPlayed = document.getElementById('humanGamesPlayed');
var humanTies = document.getElementById('humanTies');
var computerScore = document.getElementById('computerScore');
var computerLosses = document.getElementById('computerLosses');
var computerName = document.getElementById('computerName');
var computerIcon = document.getElementById('computerIcon');
var computerGamesPlayed = document.getElementById('computerGamesPlayed');
var computerTies = document.getElementById('computerTies');
var computerChoiceRock = document.getElementById('computerChoiceRock');
var computerChoicePaper = document.getElementById('computerChoicePaper');
var computerChoiceScissors = document.getElementById('computerChoiceScissors');
var computerChoiceLizard = document.getElementById('computerChoiceLizard');
var computerChoiceSpock = document.getElementById('computerChoiceSpock');

buttonChangeGame.addEventListener('click', changeGameStyle);
buttonHowToPlay.addEventListener('click', showHowToPlay);
buttonHome.addEventListener('click', changeGameStyle);
buttonClearGameHistory.addEventListener('click', game.clearGameHistory);
buttonClassicGame.addEventListener('click', startClassicGame);
buttonAdvancedGame.addEventListener('click', startAdvancedGame);
choiceRock.addEventListener('click', chooseRock);
choicePaper.addEventListener('click', choosePaper);
choiceScissors.addEventListener('click', chooseScissors);
choiceLizard.addEventListener('click', chooseLizard);
choiceSpock.addEventListener('click', chooseSpock);

window.onload = function() {
  pageLoad();
};

function playerInfo() {
  replaceText(humanName, humanPlayer.name);
  replaceText(humanIcon, humanPlayer.token);
  replaceText(computerName, computerPlayer.name);
  replaceText(computerIcon, computerPlayer.token);
}

function showHowToPlay() {
  hide([viewGame, viewStart, buttonHowToPlay, buttonChangeGame]);
  show([viewHelp]);
}

function changeGameStyle() {
  hide([viewGame, viewHelp, buttonChangeGame]);
  show([viewStart, buttonHowToPlay]);
}

function startClassicGame() {
  game.currentGameType = "classic";
  setupNewGame();
}

function startAdvancedGame() {
  game.currentGameType = "advanced";
  setupNewGame();
}

function setupNewGame() {
  playerInfo();
  hide([viewStart, viewHelp, computerChoiceRock, computerChoicePaper, computerChoiceScissors, computerChoiceLizard, computerChoiceSpock, playerChoiceLizard, playerChoiceSpock]);
  disableHoverGlow([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock]);
  enablePlayerButtons([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock, buttonChangeGame, buttonHowToPlay]);
  enableShadows([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock]);
  removeButtonGray([buttonChangeGame, buttonHowToPlay]);
  replaceText(gameMessage, "Please pick to play:");
  updateScores();
  if (game.currentGameType === "classic") {
    show([viewGame, buttonChangeGame, buttonHowToPlay, playerChoicePaper, playerChoiceRock, playerChoiceScissors]);
  } else {
    show([viewGame, buttonChangeGame, buttonHowToPlay, playerChoicePaper, playerChoiceRock, playerChoiceScissors, playerChoiceLizard, playerChoiceSpock]);
  }
}

function chooseRock() {
  humanPlayer.gameChoice = 'rock';
  enableHoverGlow(playerChoiceRock);
  hide([playerChoicePaper, playerChoiceScissors, playerChoiceSpock, playerChoiceLizard]);
  game.startGame();
  game.decideWinner();
}

function choosePaper() {
  humanPlayer.gameChoice = 'paper';
  enableHoverGlow(playerChoicePaper);
  hide([playerChoiceRock, playerChoiceScissors, playerChoiceSpock, playerChoiceLizard]);
  game.startGame();
  game.decideWinner();
}

function chooseScissors() {
  humanPlayer.gameChoice = 'scissors';
  enableHoverGlow(playerChoiceScissors);
  hide([playerChoicePaper, playerChoiceRock, playerChoiceSpock, playerChoiceLizard]);
  game.startGame();
  game.decideWinner();
}

function chooseLizard() {
  humanPlayer.gameChoice = 'lizard';
  enableHoverGlow(playerChoiceLizard);
  hide([playerChoicePaper, playerChoiceScissors, playerChoiceSpock, playerChoiceRock]);
  game.startGame();
  game.decideWinner();
}

function chooseSpock() {
  humanPlayer.gameChoice = 'spock';
  enableHoverGlow(playerChoiceSpock);
  hide([playerChoicePaper, playerChoiceScissors, playerChoiceRock, playerChoiceLizard]);
  game.startGame();
  game.decideWinner();
}

function hideDisableAndRemoveShadows() {
  disablePlayerButtons([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock, buttonChangeGame, buttonHowToPlay]);
  disableShadows([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock]);
  turnButtonGray([buttonChangeGame, buttonHowToPlay]);
}

function humanWins() {
  humanPlayer.wins += 1;
  replaceText(gameMessage, "You won!");
}

function computerWins() {
  computerPlayer.wins += 1;
  replaceText(gameMessage, "You lost!");
}

function updateScores() {
  replaceText(humanGamesPlayed, game.numberOfGamesPlayed);
  replaceText(computerGamesPlayed, game.numberOfGamesPlayed);
  replaceText(computerTies, (game.numberOfGamesPlayed - (humanPlayer.wins + computerPlayer.wins)));
  replaceText(humanTies, (game.numberOfGamesPlayed - (humanPlayer.wins + computerPlayer.wins)));
  replaceText(computerScore, computerPlayer.wins);
  replaceText(humanLosses, computerPlayer.wins);
  replaceText(humanScore, humanPlayer.wins);
  replaceText(computerLosses, humanPlayer.wins);
}

function show(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('hidden');
  }
}

function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('hidden');
  }
}

function disablePlayerButtons(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('disable-buttons');
  }
}

function enablePlayerButtons(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('disable-buttons');
  }
}

function disableShadows(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('disable-shadow');
  }
}

function enableShadows(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('disable-shadow');
  }
}

function enableHoverGlow(element) {
  element.classList.add('current-player-choice');
}

function disableHoverGlow(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('current-player-choice');
  }
}

function replaceText(element, input) {
  element.innerText = input;
}

function turnButtonGray(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('gray-button');
  }
}

function removeButtonGray(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('gray-button');
  }
}
