var game = new Game(gameChoice);
var gameChoice;
var choiceHumanPlayer;
var choiceComputerPlayer;

var changeGameButton = document.getElementById('changeGameButton');
var howToPlayButton = document.getElementById('howToPlayButton')
var homeButton = document.getElementById('homeButton');
var classicGameButton = document.getElementById('classicGameButton');
var advancedGameButton = document.getElementById('advancedGameButton');
var startView = document.getElementById('startView');
var gameView = document.getElementById('gameView');
var helpView = document.getElementById('helpView')
var choiceRock = document.getElementById('choiceRock');
var choicePaper = document.getElementById('choicePaper');
var choiceScissors = document.getElementById('choiceScissors');
var humanScore = document.getElementById('humanScore');
var humanLosses = document.getElementById('humanLosses');
var humanName = document.getElementById('humanName');
var humanIcon = document.getElementById('humanIcon');
var computerScore = document.getElementById('computerScore');
var computerLosses = document.getElementById('computerLosses');
var computerName = document.getElementById('computerName');
var computerIcon = document.getElementById('computerIcon');
var humanGamesPlayed = document.getElementById('humanGamesPlayed');
var computerGamesPlayed = document.getElementById('computerGamesPlayed');
var computerTies = document.getElementById('computerTies');
var humanTies = document.getElementById('humanTies');
var gameMessage = document.getElementById('gameMessage');
var playerChoiceRock = document.getElementById('choiceRock');
var playerChoicePaper = document.getElementById('choicePaper');
var playerChoiceScissors = document.getElementById('choiceScissors');
var playerChoiceLizard = document.getElementById('choiceLizard');
var playerChoiceSpock = document.getElementById('choiceSpock');
var computerChoiceRock = document.getElementById('computerChoiceRock');
var computerChoicePaper = document.getElementById('computerChoicePaper');
var computerChoiceScissors = document.getElementById('computerChoiceScissors');
var computerChoiceLizard = document.getElementById('computerChoiceLizard');
var computerChoiceSpock = document.getElementById('computerChoiceSpock');
var clearGameHistoryButton = document.getElementById('clearGameHistoryButton');

changeGameButton.addEventListener('click', changeGameStyle);
howToPlayButton.addEventListener('click', showHowToPlay);
homeButton.addEventListener('click', changeGameStyle);
clearGameHistoryButton.addEventListener('click', clearGameHistory);
classicGameButton.addEventListener('click', startClassicGame);
advancedGameButton.addEventListener('click', startAdvancedGame);
choiceRock.addEventListener('click', chooseRock);
choicePaper.addEventListener('click', choosePaper);
choiceScissors.addEventListener('click', chooseScissors);
choiceLizard.addEventListener('click', chooseLizard);
choiceSpock.addEventListener('click', chooseSpock);

// What's the best way to do this line below?
document.addEventListener("DOMContentLoaded", pageLoad);

//if storage is null, it errors out on page load (specifically the computer player info).
function pageLoad() {
  // if (localStorage.getItem('humanPlayer') && localStorage.getItem('computerPlayer') !== null)
  //   humanPlayer = JSON.parse(window.localStorage.getItem('humanPlayer'));
  //   computerPlayer = JSON.parse(window.localStorage.getItem('computerPlayer'));
  //   game.numberOfGamesPlayed = JSON.parse(window.localStorage.getItem('numberOfGamesPlayed'));
}

function clearGameHistory(){
  localStorage.clear();
  humanPlayer.wins = 0
  computerPlayer.wins = 0
  game.numberOfGamesPlayed = 0
  updateScores()
}

function playerInfo() {
  replaceText(humanName, humanPlayer.name);
  replaceText(humanIcon, humanPlayer.token);
  replaceText(computerName, computerPlayer.name);
  replaceText(computerIcon, computerPlayer.token);
}

function showHowToPlay() {
  hide([gameView, startView, howToPlayButton, changeGameButton])
  show([helpView])
}

function changeGameStyle() {
  hide([gameView, helpView, changeGameButton]);
  show([startView, howToPlayButton]);
}

function startClassicGame() {
  gameChoice = "classic";
  setupNewGame();
}

function startAdvancedGame() {
  gameChoice = "advanced";
  setupNewGame();
}

function computerPlayerChoosesClassic() {
  var computerChoiceRandomizer = Math.random();
  if (computerChoiceRandomizer > .6666) {
    choiceComputerPlayer = 'rock';
    return;
  } else if (computerChoiceRandomizer > .3333) {
    choiceComputerPlayer = 'paper';
    return;
  } else {
    choiceComputerPlayer = 'scissors';
    return;
  }
}

function  computerPlayerChoosesAdvanced() {
  var computerChoiceRandomizer = Math.random();
  if (computerChoiceRandomizer > .8) {
    choiceComputerPlayer = 'rock';
    return;
  } else if (computerChoiceRandomizer > .6) {
    choiceComputerPlayer = 'paper';
    return;
  } else if (computerChoiceRandomizer > .4) {
    choiceComputerPlayer = 'lizard';
    return;
  } else if (computerChoiceRandomizer > .2) {
    choiceComputerPlayer = 'spock';
    return;
  } else {
    choiceComputerPlayer = 'scissors';
    return;
  }
}

function setupNewGame() {
  playerInfo();
  hide([startView, helpView, computerChoiceRock, computerChoicePaper, computerChoiceScissors, computerChoiceLizard, computerChoiceSpock, playerChoiceLizard, playerChoiceSpock]);
  disableHoverGlow([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock]);
  enablePlayerButtons([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock, changeGameButton, howToPlayButton]);
  enableShadows([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock]);
  replaceText(gameMessage, "Please pick to play:");
  updateScores();
  if (gameChoice === "classic") {
    show([gameView, changeGameButton, howToPlayButton, playerChoicePaper, playerChoiceRock, playerChoiceScissors]);
  } else {
    show([gameView, changeGameButton, howToPlayButton, playerChoicePaper, playerChoiceRock, playerChoiceScissors, playerChoiceLizard, playerChoiceSpock]);
  }
}

function resetGame() {
  setupNewGame();
  window.localStorage.setItem('humanPlayer', JSON.stringify(humanPlayer));
  window.localStorage.setItem('computerPlayer', JSON.stringify(computerPlayer));
  window.localStorage.setItem('numberOfGamesPlayed', JSON.stringify(game.numberOfGamesPlayed));
}

function startGame() {
  game.numberOfGamesPlayed += 1;
  disablePlayerButtons([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock, changeGameButton, howToPlayButton]);
  disableShadows([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock]);
  setTimeout(resetGame, 1500);
}

function chooseRock() {
  choiceHumanPlayer = 'rock';
  enableHoverGlow(playerChoiceRock)
  hide([playerChoicePaper, playerChoiceScissors, playerChoiceSpock, playerChoiceLizard]);
  startGame();
  if (gameChoice === 'classic') {
    computerPlayerChoosesClassic();
    chooseRockClassic();
  } else {
    computerPlayerChoosesAdvanced();
    chooseRockAdvanced();
  }
}

function chooseRockClassic() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    show([computerChoiceRock]);
    replaceText(gameMessage, "It's a draw!");
  } else if (choiceComputerPlayer === 'paper') {
    show([computerChoicePaper]);
    computerWins();
  } else {
    show([computerChoiceScissors]);
    humanWins();
  }
}

function chooseRockAdvanced() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    show([computerChoiceRock]);
    replaceText(gameMessage, "It's a draw!");
  } else if (choiceComputerPlayer === 'paper') {
    show([computerChoicePaper]);
    computerWins();
  } else if (choiceComputerPlayer === 'lizard') {
    show([computerChoiceLizard]);
    humanWins();
  } else if (choiceComputerPlayer === 'spock') {
    show([computerChoiceSpock]);
    computerWins();
  } else {
    show([computerChoiceScissors]);
    humanWins();
  }
}

function choosePaper() {
  choiceHumanPlayer = 'paper';
  enableHoverGlow(playerChoicePaper)
  hide([playerChoiceRock, playerChoiceScissors, playerChoiceSpock, playerChoiceLizard]);
  startGame();
  if (gameChoice === 'classic') {
    computerPlayerChoosesClassic();
    choosePaperClassic();
  } else {
    computerPlayerChoosesAdvanced();
    choosePaperAdvanced();
  }
}

function choosePaperClassic() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    show([computerChoicePaper]);
    replaceText(gameMessage, "It's a draw!");
  } else if (choiceComputerPlayer === 'scissors') {
    show([computerChoiceScissors]);
    computerWins();
  } else {
    show([computerChoiceRock]);
    humanWins();
  }
}

function choosePaperAdvanced() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    show([computerChoicePaper]);
    replaceText(gameMessage, "It's a draw!");
  } else if (choiceComputerPlayer === 'scissors') {
    show([computerChoiceScissors]);
    computerWins();
  } else if (choiceComputerPlayer === 'lizard') {
    show([computerChoiceLizard]);
    computerWins();
  } else if (choiceComputerPlayer === 'spock') {
    show([computerChoiceSpock]);
    humanWins();
  } else {
    show([computerChoiceRock]);
    humanWins();
  }
}

function chooseScissors() {
  choiceHumanPlayer = 'scissors';
  enableHoverGlow(playerChoiceScissors)
  hide([playerChoicePaper, playerChoiceRock, playerChoiceSpock, playerChoiceLizard]);
  startGame();
  if (gameChoice === 'classic') {
    computerPlayerChoosesClassic();
    chooseScissorsClassic();
  } else {
    computerPlayerChoosesAdvanced();
    chooseScissorsAdvanced();
  }
}

function chooseScissorsClassic() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    show([computerChoiceScissors]);
    replaceText(gameMessage, "It's a draw!");
  } else if (choiceComputerPlayer === 'rock') {
    show([computerChoiceRock]);
    computerWins();
  } else {
    show([computerChoicePaper]);
    humanWins();
  }
}

function chooseScissorsAdvanced() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    show([computerChoiceScissors]);
    replaceText(gameMessage, "It's a draw!");
  } else if (choiceComputerPlayer === 'rock') {
    show([computerChoiceRock]);
    computerWins();
  } else if (choiceComputerPlayer === 'lizard') {
    show([computerChoiceLizard]);
    humanWins();
  } else if (choiceComputerPlayer === 'spock') {
    show([computerChoiceSpock]);
    computerWins();
  } else {
    show([computerChoicePaper]);
    humanWins();
  }
}

function chooseLizard() {
  choiceHumanPlayer = 'lizard';
  enableHoverGlow(playerChoiceLizard)
  hide([playerChoicePaper, playerChoiceScissors, playerChoiceSpock, playerChoiceRock]);
  startGame();
  computerPlayerChoosesAdvanced();
  chooseLizardAdvanced();
}

function chooseLizardAdvanced() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    show([computerChoiceLizard]);
    replaceText(gameMessage, "It's a draw!");
  } else if (choiceComputerPlayer === 'rock') {
    show([computerChoiceRock]);
    computerWins();
  } else if (choiceComputerPlayer === 'scissors') {
    show([computerChoiceScissors]);
    computerWins();
  } else if (choiceComputerPlayer === 'spock') {
    show([computerChoiceSpock]);
    humanWins();
  } else {
    show([computerChoicePaper]);
    humanWins();
  }
}

function chooseSpock() {
  choiceHumanPlayer = 'spock';
  enableHoverGlow(playerChoiceSpock)
  hide([playerChoicePaper, playerChoiceScissors, playerChoiceRock, playerChoiceLizard]);
  startGame();
  computerPlayerChoosesAdvanced();
  chooseSpockAdvanced();
}

function chooseSpockAdvanced() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    show([computerChoiceSpock]);
    replaceText(gameMessage, "It's a draw!");
  } else if (choiceComputerPlayer === 'rock') {
    show([computerChoiceRock]);
    humanWins();
  } else if (choiceComputerPlayer === 'lizard') {
    show([computerChoiceLizard]);
    computerWins();
  } else if (choiceComputerPlayer === 'scissors') {
    show([computerChoiceScissors]);
    humanWins();
  } else {
    show([computerChoicePaper]);
    computerWins();
  }
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
