
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const results = document.querySelector('#results')
const score = document.querySelector('#score')
let playerCounter = 0;
let compCounter = 0;


    function getComputerChoice () {
        const options = ['rock','paper','scissors'];
        return options[Math.floor(Math.random()* 3)];
    }

    function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

    function playRound(playerSelection, computerSelection) {
        const choice = playerSelection.toLowerCase();
        const winner = document.createElement('p');
        results.textContent = (`You chose ${choice} and the computer chose ${computerSelection}`);


        if ((choice === 'rock' && computerSelection === 'scissors') || 
         (choice === 'paper' && computerSelection === 'rock') || 
         (choice === 'scissors' && computerSelection === 'paper')) 
         {winner.innerHTML = `You Win! ${capitalizeFirstLetter(choice)} beats ${computerSelection}.`
        results.appendChild(winner)
    playerCounter++
    score.textContent = `Player score is ${playerCounter} and Computer score is ${compCounter}`;}
        else if ((choice === 'rock' && computerSelection === 'paper') ||
        (choice === 'paper' && computerSelection === 'scissors') ||
        (choice === 'scissors' && computerSelection === 'rock'))
        {winner.innerHTML = `You Lose! ${capitalizeFirstLetter(choice)} beats ${computerSelection}.`
    results.appendChild(winner)
compCounter++
score.textContent = `Player score is ${playerCounter} and Computer score is ${compCounter}`;}
        else if (choice === computerSelection)
        {results.textContent =  "Tie! Please play again."}

        if (playerCounter >= 5) {
            results.textContent = "Player has won! Scores will be reset."
            playerCounter = 0;
            compCounter = 0;
        }

        if (compCounter >= 5) {
            results.textContent = "Computer has won! Scores will be reset."
            playerCounter = 0;
            compCounter = 0;
        }
    }


rock.addEventListener('click', e => playRound('rock', getComputerChoice()))
paper.addEventListener('click', e => playRound('paper', getComputerChoice()))
scissors.addEventListener('click', e => playRound('scissors', getComputerChoice()))

/*
    function game() {
        let playerCounter = 0;
            let compCounter = 0;
        for (let i = 0; i < 5; i++) {
            const round = (playRound(prompt("Select rock, paper, or scissors"), getComputerChoice()))
            if (round.includes("Win")) {
                playerCounter++
            }
            else if (round.includes("Lose")) {
                compCounter++
            }
            else if (round.includes("Tie")) {i--}
            console.log(round)
            console.log(`Player score is ${playerCounter} and Computer score is ${compCounter}`)
            
    }
}

*/