function getComputerChoice() {
  let ranNum = Math.floor((Math.random() * 100)) + 1
  // console.log(ranNum);
  if (ranNum >= 1 && ranNum <= 33) {
    return "rock";
  } else if (ranNum >= 34 && ranNum <= 66) {
    return "paper";
  } else if (ranNum >= 67 && ranNum < 100) {
    return "scissors";
  }
}

function getHumanChoice() {
  return(prompt("Please key in your choice", ""));
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
    
  if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore++;
    console.log("You lose! Rock beats scissors");
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    humanScore++;
    console.log("You win! Paper beats rock");
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    humanScore++;
    console.log("You win! scissors beat paper");
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore++;
    console.log("You lose! Paper beat rock");
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    humanScore++;
    console.log("You win. rock beat scissors");
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore++;
    console.log("You lose! scissors beat paper");
  } else {
      console.log("repeat");
  }
}

function playGame() {
  for (let game = 1; game <= 5; game++) {
    const humanSelection = getHumanChoice();
    console.log(humanSelection);
    const computerSelection = getComputerChoice();
    console.log(computerSelection);

    playRound(humanSelection, computerSelection);
  }
}

playGame();
console.log("Your score - " + humanScore);
console.log("Computer score - " + computerScore);

if (humanScore > computerScore) 
  console.log("You win!!");
else
  console.log("You lose :(");

