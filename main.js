var game = new Game(gameChoice);
var humanPlayer = new Player ('Human', '🤓');
var computerPlayer = new Player ('Computer', '🤖');
var changeGameButton = document.getElementById('changeGameButton');
var classicGameButton = document.getElementById('classicGameButton');
var advancedGameButton = document.getElementById('advancedGameButton');
var startView = document.getElementById('startView');
var gameView = document.getElementById('gameView');
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
classicGameButton.addEventListener('click', startClassicGame);
advancedGameButton.addEventListener('click', startAdvancedGame);
choiceRock.addEventListener('click', chooseRock);
choicePaper.addEventListener('click', choosePaper);
choiceScissors.addEventListener('click', chooseScissors);
choiceLizard.addEventListener('click', chooseLizard);
choiceSpock.addEventListener('click', chooseSpock);

function playerInfo() {
  humanName.innerText = humanPlayer.name;
  humanIcon.innerText = computerPlayer.token;
  computerName.innerText = computerPlayer.name;
  computerIcon.innerText = computerPlayer.token;
}

function changeGameStyle() {
  hide([gameView, changeGameButton])
  show([startView])
  enablePlayerButtons([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock])
  gameMessage.innerText = "Please pick to play:";
  //move most of this to the class document under reset game^^^^
}

function startClassicGame() {
  playerInfo()
  hide([startView, computerChoiceRock, computerChoicePaper, computerChoiceScissors, computerChoiceLizard, computerChoiceSpock, playerChoiceLizard, playerChoiceSpock])
  show([gameView, changeGameButton, playerChoicePaper, playerChoiceRock, playerChoiceScissors])
  gameChoice = "classic";
}

function startAdvancedGame() {
  playerInfo()
  hide([startView, computerChoiceRock, computerChoicePaper, computerChoiceScissors, computerChoiceLizard, computerChoiceSpock])
  show([gameView, changeGameButton, playerChoicePaper, playerChoiceRock, playerChoiceScissors, playerChoiceLizard, playerChoiceSpock])
  gameChoice = "advanced"
}

function computerPlayerChoosesClassic() {
  var computerChoiceRandomizer = Math.random()
  if (computerChoiceRandomizer > .6666) {
    console.log("rock")
    choiceComputerPlayer = 'rock';
    return
  } else if (computerChoiceRandomizer > .3333) {
    console.log("paper")
    choiceComputerPlayer = 'paper';
    return
  } else {
    console.log("scissors")
    choiceComputerPlayer = 'scissors';
    return
  }
}

function  computerPlayerChoosesAdvanced() {
  var computerChoiceRandomizer = Math.random()
  if (computerChoiceRandomizer > .8) {
    console.log("rock")
    choiceComputerPlayer = 'rock';
    return
  } else if (computerChoiceRandomizer > .6) {
    console.log("paper")
    choiceComputerPlayer = 'paper';
    return
  } else if (computerChoiceRandomizer > .4) {
    console.log("lizard")
    choiceComputerPlayer = 'lizard';
    return
  } else if (computerChoiceRandomizer > .2) {
    console.log("spock")
    choiceComputerPlayer = 'spock';
    return
  } else {
    console.log("scissors")
    choiceComputerPlayer = 'scissors';
    return
  }
}

function chooseRock() {
  choiceHumanPlayer = 'rock';
  game.numberOfGamesPlayed += 1;
  console.log("rock was choosen")
  disablePlayerButtons([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock])
  hide([playerChoicePaper, playerChoiceScissors, playerChoiceSpock, playerChoiceLizard])
  if (gameChoice === 'classic') {
    computerPlayerChoosesClassic()
    chooseRockClassic()
  } else {
    computerPlayerChoosesAdvanced()
    chooseRockAdvanced()
  }
  updateTiesAndTotalGamesPlayed()
}

function chooseRockClassic() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    show([computerChoiceRock])
    gameMessage.innerText = "It's a draw!";
  } else if (choiceComputerPlayer === 'paper') {
    show([computerChoicePaper])
    computerWins()
  } else {
    show([computerChoiceScissors])
    humanWins()
  }
}

function chooseRockAdvanced() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    console.log("draw");
    show([computerChoiceRock])
    gameMessage.innerText = "It's a draw!";
  } else if (choiceComputerPlayer === 'paper') {
    show([computerChoicePaper])
    computerWins()
  } else if (choiceComputerPlayer === 'lizard') {
    show([computerChoiceLizard])
    humanWins()
  } else if (choiceComputerPlayer === 'spock') {
    show([computerChoiceSpock])
    computerWins()
  } else {
    show([computerChoiceScissors])
    humanWins()
  }
}

function choosePaper() {
  choiceHumanPlayer = 'paper';
  game.numberOfGamesPlayed += 1;
  console.log("paper was choosen");
  disablePlayerButtons([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock])
  hide([playerChoiceRock, playerChoiceScissors, playerChoiceSpock, playerChoiceLizard])
  if (gameChoice === 'classic') {
    computerPlayerChoosesClassic()
    choosePaperClassic()
  } else {
    computerPlayerChoosesAdvanced()
    choosePaperAdvanced()
  }
  updateTiesAndTotalGamesPlayed()
}

function choosePaperClassic() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    show([computerChoicePaper])
    gameMessage.innerText = "It's a draw!";
  } else if (choiceComputerPlayer === 'scissors') {
    show([computerChoiceScissors])
    computerWins()
  } else {
    show([computerChoiceRock])
    humanWins()
  }
}

function choosePaperAdvanced() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    console.log("draw");
    show([computerChoicePaper])
    gameMessage.innerText = "It's a draw!";
  } else if (choiceComputerPlayer === 'scissors') {
    show([computerChoiceScissors])
    computerWins()
  } else if (choiceComputerPlayer === 'lizard') {
    show([computerChoiceLizard])
    computerWins()
  } else if (choiceComputerPlayer === 'spock') {
    show([computerChoiceSpock])
    humanWins()
  } else {
    show([computerChoiceRock])
    humanWins()
  }
}

function chooseScissors() {
  choiceHumanPlayer = 'scissors';
  game.numberOfGamesPlayed += 1;
  console.log("scissors was choosen");
  disablePlayerButtons([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock])
  hide([playerChoicePaper, playerChoiceRock, playerChoiceSpock, playerChoiceLizard])
  if (gameChoice === 'classic') {
    computerPlayerChoosesClassic()
    chooseScissorsClassic()
  } else {
    computerPlayerChoosesAdvanced()
    chooseScissorsAdvanced()
  }
  updateTiesAndTotalGamesPlayed()
}

function chooseScissorsClassic() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    console.log("draw");
    show([computerChoiceScissors])
    gameMessage.innerText = "It's a draw!";
  } else if (choiceComputerPlayer === 'rock') {
    show([computerChoiceRock])
    computerWins()
  } else {
    show([computerChoicePaper])
    humanWins()
  }
}

function chooseScissorsAdvanced() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    console.log("draw");
    show([computerChoiceScissors])
    gameMessage.innerText = "It's a draw!";
  } else if (choiceComputerPlayer === 'rock') {
    show([computerChoiceRock])
    computerWins()
  } else if (choiceComputerPlayer === 'lizard') {
    show([computerChoiceLizard])
    humanWins()
  } else if (choiceComputerPlayer === 'spock') {
    show([computerChoiceSpock])
    computerWins()
  } else {
    show([computerChoicePaper])
    humanWins()
  }
}

function chooseLizard() {
  choiceHumanPlayer = 'lizard';
  game.numberOfGamesPlayed += 1;
  console.log("lizard was choosen");
  disablePlayerButtons([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock])
  hide([playerChoicePaper, playerChoiceScissors, playerChoiceSpock, playerChoiceRock])
  computerPlayerChoosesAdvanced()
  chooseLizardAdvanced()
  updateTiesAndTotalGamesPlayed()
}

function chooseLizardAdvanced() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    console.log("draw");
    show([computerChoiceLizard])
    gameMessage.innerText = "It's a draw!";
  } else if (choiceComputerPlayer === 'rock') {
    show([computerChoiceRock])
    computerWins()
  } else if (choiceComputerPlayer === 'scissors') {
    show([computerChoiceScissors])
    computerWins()
  } else if (choiceComputerPlayer === 'spock') {
    show([computerChoiceSpock])
    humanWins()
  } else {
    show([computerChoicePaper])
    humanWins()
  }
}

function chooseSpock() {
  choiceHumanPlayer = 'spock';
  game.numberOfGamesPlayed += 1;
  console.log("spock was choosen");
  disablePlayerButtons([playerChoiceRock, playerChoiceScissors, playerChoicePaper, playerChoiceLizard, playerChoiceSpock])
  hide([playerChoicePaper, playerChoiceScissors, playerChoiceRock, playerChoiceLizard])
  computerPlayerChoosesAdvanced()
  chooseSpockAdvanced()
  updateTiesAndTotalGamesPlayed()
}

function chooseSpockAdvanced() {
  if (choiceComputerPlayer === choiceHumanPlayer) {
    console.log("draw");
    show([computerChoiceSpock])
    gameMessage.innerText = "It's a draw!";
  } else if (choiceComputerPlayer === 'rock') {
    show([computerChoiceRock])
    humanWins()
  } else if (choiceComputerPlayer === 'lizard') {
    show([computerChoiceLizard])
    computerWins()
  } else if (choiceComputerPlayer === 'scissors') {
    show([computerChoiceScissors])
    humanWins()
  } else {
    show([computerChoicePaper])
    computerWins()
  }
}

function humanWins() {
  humanPlayer.wins += 1;
  humanScore.innerText = humanPlayer.wins;
  computerLosses.innerText = humanPlayer.wins;
  gameMessage.innerText = "You won!";
  console.log('Human wins!');
}

function computerWins() {
  computerPlayer.wins += 1;
  computerScore.innerText = computerPlayer.wins;
  humanLosses.innerText = computerPlayer.wins;
  //gamesPlayed.innerText = game.numberOfGamesPlayed;
  gameMessage.innerText = "You lost!";
  console.log('Computer wins!');
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
