var game = new Game(gameChoice);

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
var gameChoice;
var choiceHumanPlayer;
var choiceComputerPlayer;
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


changeGameButton.addEventListener('click', changeGameStyle);
howToPlayButton.addEventListener('click', showHowToPlay);
homeButton.addEventListener('click', changeGameStyle);
classicGameButton.addEventListener('click', startClassicGame);
advancedGameButton.addEventListener('click', startAdvancedGame);
choiceRock.addEventListener('click', chooseRock);
choicePaper.addEventListener('click', choosePaper);
choiceScissors.addEventListener('click', chooseScissors);
choiceLizard.addEventListener('click', chooseLizard);
choiceSpock.addEventListener('click', chooseSpock);

function playerInfo() {
  humanName.innerText = humanPlayer.name;
  humanIcon.innerText = String.fromCodePoint(0x1F525);
  computerName.innerText = computerPlayer.name;
  computerIcon.innerText = `${computerPlayer.token}`;
}

function showHowToPlay() {
  hide([gameView, startView, howToPlayButton])
  show([helpView])
}

function changeGameStyle() {
  hide([gameView, helpView, changeGameButton]);
  show([startView, howToPlayButton]);
}

function startClassicGame() {
  playerInfo();
  gameChoice = "classic";
  resetGame();
}

function startAdvancedGame() {
  playerInfo();
  gameChoice = "advanced";
  resetGame();
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

function resetGame() {
  hide([startView, helpView, computerChoiceRock, computerChoicePaper, computerChoiceScissors, computerChoiceLizard, computerChoiceSpock, playerChoiceLizard, playerChoiceSpock]);
  enablePlayerButtons([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock, changeGameButton, howToPlayButton]);
  enableShadows([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock]);
  gameMessage.innerText = "Please pick to play:";
  if (gameChoice === "classic") {
    show([gameView, changeGameButton, howToPlayButton, playerChoicePaper, playerChoiceRock, playerChoiceScissors]);
  } else {
    show([gameView, changeGameButton, howToPlayButton, playerChoicePaper, playerChoiceRock, playerChoiceScissors, playerChoiceLizard, playerChoiceSpock]);
  }
}

function startGame() {
  game.numberOfGamesPlayed += 1;
  disablePlayerButtons([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock, changeGameButton, howToPlayButton]);
  disableShadows([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock]);
  hide([playerChoicePaper, playerChoiceScissors, playerChoiceSpock, playerChoiceLizard]);
  updateTiesAndTotalGamesPlayed();
  setTimeout(resetGame, 1000);
}

function chooseRock() {
  choiceHumanPlayer = 'rock';
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
    gameMessage.innerText = "It's a draw!";
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
    gameMessage.innerText = "It's a draw!";
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
    gameMessage.innerText = "It's a draw!";
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
    gameMessage.innerText = "It's a draw!";
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
    gameMessage.innerText = "It's a draw!";
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
    gameMessage.innerText = "It's a draw!";
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
  startGame();
  computerPlayerChoosesAdvanced();
  chooseLizardAdvanced();
}

function chooseLizardAdvanced() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    show([computerChoiceLizard]);
    gameMessage.innerText = "It's a draw!";
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
  startGame();
  computerPlayerChoosesAdvanced();
  chooseSpockAdvanced();
}

function chooseSpockAdvanced() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    show([computerChoiceSpock]);
    gameMessage.innerText = "It's a draw!";
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
  humanScore.innerText = humanPlayer.wins;
  computerLosses.innerText = humanPlayer.wins;
  gameMessage.innerText = "You won!";
}

function computerWins() {
  computerPlayer.wins += 1;
  computerScore.innerText = computerPlayer.wins;
  humanLosses.innerText = computerPlayer.wins;
  gameMessage.innerText = "You lost!";
}

function updateTiesAndTotalGamesPlayed() {
  humanGamesPlayed.innerText = game.numberOfGamesPlayed;
  computerGamesPlayed.innerText = game.numberOfGamesPlayed;
  computerTies.innerText = game.numberOfGamesPlayed - humanPlayer.wins - computerPlayer.wins;
  humanTies.innerText = game.numberOfGamesPlayed - humanPlayer.wins - computerPlayer.wins;
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
    elements[i].classList.add('disableButtons');
  }
}

function enablePlayerButtons(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('disableButtons');
  }
}

function disableShadows(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('disableShadow');
  }
}

function enableShadows(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('disableShadow');
  }
}
