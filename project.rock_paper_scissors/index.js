let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

let getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord (letter) {
  if (letter === "rock") return "Rock";
  if (letter === "paper") return "Paper";
  if (letter === "scissors") return "Scissors";

}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You won!";
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You lost!";
}

let draw = () => {
  console.log("It's a tie!")
}


function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      console.log("You Win!");
      win(userChoice, computerChoice);
      break;
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      console.log("Computer Win!");
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      console.log("It's a tie!");

      break;
  }
  }

game();

function main() {
rock_div.addEventListener('click', function() {
  game("rock");
})

paper_div.addEventListener('click', function() {
  game("paper");
})

scissors_div.addEventListener('click', function() {
  game("scissors");
})
}

main();
