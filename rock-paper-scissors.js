let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let ranNum = Math.floor((Math.random() * 100)) + 1
  // console.log(ranNum);
  if (ranNum >= 1 && ranNum <= 33) {
    return "Rock";
  } else if (ranNum >= 34 && ranNum <= 66) {
    return "Paper";
  } else if (ranNum >= 67 && ranNum < 100) {
    return "Scissors";
  }
}

// console.log(getComputerChoice());

function getHumanChoice() {
  return(prompt("Please key in your choice", ""));
}

console.log(getHumanChoice());



