let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let allElem = document.querySelectorAll(".submain div");
let winnerDisplay=document.querySelector(".scoreWindow");
let displayBoard=document.querySelector(".display");
let newRoundBtn=document.querySelector(".new-round");
let newGamebtn = document.querySelector(".new-game");
let playBtn = document.querySelector(".play");

let computer = 0;
let player = 0;

function playerValue(){
    let value="";
    displayBoard.style.display="none";
    winnerDisplay.style.display="none";
    allElem.forEach(div=>{
        div.addEventListener("click",()=>{

                if(div.classList.contains("rock")){
                    value = "rock";    
                }
                else if(div.classList.contains("paper")){
                    value = "paper";                
                }
                else if(div.classList.contains("scissors")){
                    value = "scissors";
                }
                
                winnerSelection(value,computerValue());
        });       
    });
      
}

function computerValue(){
    let value2="";
    let list=["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    value2=list[index];
    return value2;  
}

function winnerSelection(playerValue,computerValue){

    if(playerValue===computerValue){
        winnerDisplay.innerText = "Draw This Round";
    }
    else if(computerValue==="paper" && playerValue=="rock" ){
        computer+=1;
        winnerDisplay.innerText = "Computer Win This Round"
        displayBoard.style.display="block";
        winnerDisplay.style.display="block";
    }
    else if(computerValue==="paper" && playerValue=="scissors"){
        player+=1;
        winnerDisplay.innerText = "You Win This Round"
        displayBoard.style.display="block";
        winnerDisplay.style.display="block";
    }
    else if(computerValue==="rock" && playerValue=="scissors" ){
        computer+=1;
        winnerDisplay.innerText = "Computer Win This Round"
        displayBoard.style.display="block";
        winnerDisplay.style.display="block";
    }
    else if(computerValue==="rock" && playerValue=="paper"){
        player+=1;
        winnerDisplay.innerText = "You Win This Round"
        displayBoard.style.display="block";
        winnerDisplay.style.display="block";
    }
    else if(computerValue==="scissors" && playerValue=="paper" ){
        computer+=1;
        winnerDisplay.innerText = "Computer Win This Round"
        displayBoard.style.display="block";
        winnerDisplay.style.display="block";
    }
    else if(computerValue==="scissors" && playerValue=="rock"){
        player+=1;
        winnerDisplay.innerText = "You Win This Round"
        displayBoard.style.display="block";
        winnerDisplay.style.display="block";
    }
    scoreBoard(player, computer);
}

function scoreBoard(player, computer){
    let playerScore = document.querySelector(".player");
    let computerScore = document.querySelector(".computer");
    playerScore.innerText ="Player: " + player;
    computerScore.innerText = "Computer: " + computer;
}

function newRound(){
    newRoundBtn.addEventListener("click",()=>{
        displayBoard.style.display="none";
        winnerDisplay.style.display="none";
    });   
}

function newGame(){
    newGamebtn.addEventListener("click",()=>{
    displayBoard.style.display="none";
    winnerDisplay.style.display="none";
    scoreBoard(0,0);
    

    });
}

function startGame(){
    displayBoard.style.display="none";
    winnerDisplay.style.display="none";
    playBtn.addEventListener("click",()=>{
        playerValue();
        newRound();
        newGame();
        scoreBoard(0,0);

    });
}

startGame();



