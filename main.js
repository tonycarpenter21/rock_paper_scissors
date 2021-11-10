// var humanPlayer = new Player ('Human', '🤓');
// var computerPlayer = new Player ('Computer', '🤖');
var changeGameButton = document.getElementById('changeGameButton');
var classicGameButton = document.getElementById('classicGameButton');
var advancedGameButton = document.getElementById('advancedGameButton');
var startView = document.getElementById('startView');
var gameView = document.getElementById('gameView');
var choiceRock = document.getElementById('choiceRock');
var choicePaper = document.getElementById('choicePaper');
var choiceScissors = document.getElementById('choiceScissors');
var gameChoice = 'classic'; //THIS IS TEMPORARY
var choiceHumanPlayer;
var choiceComputerPlayer;

changeGameButton.addEventListener('click', changeGameStyle)
classicGameButton.addEventListener('click', startClassicGame)
advancedGameButton.addEventListener('click', startAdvancedGame)
choiceRock.addEventListener('click', chooseRock)
choicePaper.addEventListener('click', choosePaper)
choiceScissors.addEventListener('click', chooseScissors)

function chooseRock() {
  choiceHumanPlayer = 'rock';
  console.log("rock was choosen")
  if (gameChoice === 'classic') {
    computerPlayerChoosesClassic()
    if (choiceComputerPlayer === choiceHumanPlayer) {
      console.log("draw")
    } else if (choiceComputerPlayer === 'paper') {
      console.log("Human loses")
    } else {
      console.log('human wins')
    }
  } else {
    computerPlayerChoosesAdvanced()
  }
}

function choosePaper() {
  choiceHumanPlayer = 'paper';
  console.log("paper was choosen")
  if (gameChoice === 'classic') {
    computerPlayerChoosesClassic()
    if (choiceComputerPlayer === choiceHumanPlayer) {
      console.log("draw")
    } else if (choiceComputerPlayer === 'scissors') {
      console.log("Human loses")
    } else {
      console.log('human wins')
    }
  } else {
    computerPlayerChoosesAdvanced()
  }
}

function chooseScissors() {
  choiceHumanPlayer = 'scissors';
  console.log("scissors was choosen")
  if (gameChoice === 'classic') {
    computerPlayerChoosesClassic()
    if (choiceComputerPlayer === choiceHumanPlayer) {
      console.log("draw")
    } else if (choiceComputerPlayer === 'rock') {
      console.log("Human loses")
    } else {
      console.log('human wins')
    }
  } else {
    computerPlayerChoosesAdvanced()
  }
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
  //model after function above
}

function startClassicGame() {
  hide([startView])
  show([gameView, changeGameButton])
  gameChoice = "classic";
  //hide advanced player choice options incase it's switched from that mode
}

function startAdvancedGame() {
  hide([startView])
  show([gameView, changeGameButton])
  gameChoice = "advanced"
  //show advancted player choice options
}

function changeGameStyle() {
  hide([gameView, changeGameButton])
  show([startView])
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
