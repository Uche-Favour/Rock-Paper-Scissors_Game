
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let playerCount = 0;
let computerCount = 0;
const refreshButton = document.getElementById("refresh_button");


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT IS A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
               result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOOSE";
               break;
            case "paper":
               result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOOSE";
               break;

            case "scissors":
               result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOOSE";
               break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    //to remove the classes from the classList in each new game play
    resultDisplay.classList.remove("greenText", "redText");
    

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerCount++;
            break;
        case "YOU LOOSE":
            resultDisplay.classList.add("redText");
            computerCount++;
            break;
    }

    playerScore.textContent = playerCount;
    computerScore.textContent = computerCount;

    refreshButton.addEventListener('click', event => {
        window.location.reload();
    })
}



