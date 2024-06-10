let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let allElem = document.querySelectorAll(".submain div");



function playerValue(){
    let value="";
    allElem.forEach(div=>{
        div.addEventListener("click",()=>{
            if(div.classList.contains("rock")){
                value = "rock";
                console.log(value);
                
            }
            else if(div.classList.contains("paper")){
                value = "paper";
                console.log(value);
            }
            else if(div.classList.contains("scissors")){
                value = "scissors";
                console.log(value);
            
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
        console.log("draw");
    }
    else if(computerValue==="paper" && playerValue=="rock" ){
        console.log("Computer win");
    }
    else if(computerValue==="paper" && playerValue=="scissors"){
        console.log("player win");
    }
    else if(computerValue==="rock" && playerValue=="scissors" ){
        console.log("Computer win");
    }
    else if(computerValue==="rock" && playerValue=="paper"){
        console.log("player win");
    }
    else if(computerValue==="scissors" && playerValue=="paper" ){
        console.log("Computer win");
    }
    else if(computerValue==="scissors" && playerValue=="rock"){
        console.log("player win");
    }

}
playerValue();

