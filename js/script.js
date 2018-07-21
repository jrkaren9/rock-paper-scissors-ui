function computerPlay() {
    let random = Math.floor(Math.random()*3);
    if(random == 1) return "Rock";
    if(random == 2) return "Paper";
    else return "Scissors";
}

function playRound(playerSelection, computerSelection){

    if(!playerSelection.localeCompare(computerSelection)) return 0;
    if(!playerSelection.localeCompare('rock')){
        if(!computerSelection.localeCompare('scissors')){
            return 1;
        }
        else{
            return -1;
        }
    }
    else if(!playerSelection.localeCompare('scissors')){
        if(!computerSelection.localeCompare('paper')){
            return 1;
        }
        else{
            return -1;
        }
    }
    else if(!playerSelection.localeCompare('paper')){
        if(!computerSelection.localeCompare('rock')){
            return 1;
        }
        else{
            return -1;
        }
    }
    else{
        return 2;
    }
}

function message(value, playerSelection, computerSelection){
    if(value==0) return "Draw, try again";
    if(value==1) return `You win! ${playerSelection} beats ${computerSelection}`;
    else if(value==2) return "You didn't choose a valid option";
    else return `You lose, ${computerSelection} beats ${playerSelection}`;
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++){
        let playerSelection = prompt("Choose one")
        let player = playerSelection.toLowerCase();
        let computerSelection = computerPlay();
        let computer = computerSelection.toLowerCase();
        let value = playRound(player, computer);
    
        if(value==1){
            playerScore+=1;
        } 
        else if(value==-1){
            computerScore+=1;
        }

        console.log(message(value, playerSelection, computerSelection));  
    }
    if(playerScore>computerScore) console.log("You've won!");
    else if(playerScore==computerScore) console.log("It's a tie");
    else console.log("You've lost :(");
}