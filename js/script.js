let playerScore = 0;
let computerScore = 0;   
let value = null;

const displayPlayer = document.querySelector('#pleft');
const displayComputer = document.querySelector('#pright');
const msg = document.querySelector('#message');
const ppoints = document.querySelector('#ppoints');
const cpoints = document.querySelector('#cpoints');

function computerPlay() {
    let random = Math.floor(Math.random()*3);
    if(random == 1) return "Rock";
    if(random == 2) return "Paper";
    else return "Scissors";
}

function playRound(playerSelection, computerSelection){

    if(!playerSelection.localeCompare(computerSelection)) value = null;
    else if(!playerSelection.localeCompare('Rock'))
        value = (!computerSelection.localeCompare('Scissors'));
    else if(!playerSelection.localeCompare('Scissors'))
        value = (!computerSelection.localeCompare('Paper'));
    else if(!playerSelection.localeCompare('Paper'))
        value = (!computerSelection.localeCompare('Rock'));
        
    if(value==true) playerScore+=1;
    else if(value==false) computerScore+=1;
    msg.textContent = message(value, playerSelection, computerSelection);
}

function message(value, playerSelection, computerSelection){
    if(value==false) return `You lose, ${computerSelection} beats ${playerSelection}`;
    if(value==true) return `You win! ${playerSelection} beats ${computerSelection}`;
    else return `Both picked ${computerSelection}. It's a draw, try again`;
}

function score(playerScore, computerScore){

    ppoints.textContent = playerScore;
    cpoints.textContent = computerScore;

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

    msg.textContent = 'Choose Rock, Paper or Scissors';
}
/* PRUEBAS */

function match(e){
    
    if(playerScore < 5 && computerScore < 5){
        playRound(this.getAttribute('id'), computerPlay());  
    }

    if(score(playerScore, computerScore)){
        start.style.display = 'inline-block';
        displayPlayer.style.display = 'none';
        displayComputer.style.display = 'none';
    }
}

function selection(){
    this.classList.add('selection');
}

function removeTransition(){
    this.classList.remove('selection');
}

function game(){

    start.style.cssText = 'display: none';

    displayPlayer.style.display = 'block';
    displayComputer.style.display = 'block';

    reset();

    const options = document.querySelectorAll('#options div button');

    options.forEach(button => {
        button.addEventListener('mouseover', selection);
        button.addEventListener('focus', selection);
        button.addEventListener('click', match);
        button.addEventListener('focusout', removeTransition);
        button.addEventListener('mouseout', removeTransition);
    });      
}

const start = document.querySelector('#start');
start.addEventListener('click', game);