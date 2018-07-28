let playerScore = 0;
let computerScore = 0;   
let value = null;

function computerPlay() {
    let random = Math.floor(Math.random()*3);
    if(random == 1) return "Rock";
    if(random == 2) return "Paper";
    else return "Scissors";
}

function playRound(playerSelection, computerSelection){
    if(!playerSelection.localeCompare(computerSelection)) return value = null;
    if(!playerSelection.localeCompare('Rock'))
        return value = (!computerSelection.localeCompare('Scissors'));
    else if(!playerSelection.localeCompare('Scissors'))
        return value = (!computerSelection.localeCompare('Paper'));
    else if(!playerSelection.localeCompare('Paper'))
        return value = (!computerSelection.localeCompare('Rock'));
}

function message(value, playerSelection, computerSelection){
    if(value==false) return `You lose, ${computerSelection} beats ${playerSelection}`;
    if(value==true) return `You win! ${playerSelection} beats ${computerSelection}`;
    else return 'Draw, try again';
}

function score(playerScore, computerScore){

    ppoints.textContent = playerScore;
    cpoints.textContent = computerScore;

    const msg = document.querySelector('#message');

    if(playerScore == 5 || computerScore == 5){
        if(playerScore>computerScore){
            msg.textContent = 'YOU WIN. Wanna play again?';
        }
        else{
            msg.textContent = 'You lose. Wanna play again?';
        }
        return true;
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;

    ppoints.textContent = playerScore;
    cpoints.textContent = computerScore;

    const msg = document.querySelector('#message');
    msg.textContent = 'Choose Rock, Paper or Scissors';
}
/* PRUEBAS */

function game(){

    start.style.cssText = 'display: none';
    const displayPlayer = document.querySelector('#pleft');
    const displayComputer = document.querySelector('#pright');
    displayPlayer.style.display = 'block';
    displayComputer.style.display = 'block';

    const msg = document.querySelector('#message');

    const ppoints = document.querySelector('#ppoints');
    const cpoints = document.querySelector('#cpoints');

    reset();

    const options = document.querySelectorAll('#options div');
    options.forEach((div) => {
        div.addEventListener('click', function(e){
   
            playRound(e.target.getAttribute('id'), computerPlay());

            if(value==true) playerScore+=1;
            else if(value==false) computerScore+=1;

            if(playerScore < 5 && computerScore < 5)
                msg.textContent = message(value, e.target.getAttribute('id'), computerPlay());

            if(score(playerScore, computerScore)){
                start.style.display = 'inline-block';
                displayPlayer.style.display = 'none';
                displayComputer.style.display = 'none';
            }
        });
    });
}

const start = document.querySelector('#start');
start.addEventListener('click', game);

