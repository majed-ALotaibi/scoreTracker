const Player1btn = document.querySelector("#Player1btn");
const Player2btn = document.querySelector("#Player2btn");
const rest = document.querySelector("#rest");
let player1Result = parseInt(document.querySelector("#player1").innerText);
let player2Result = parseInt(document.querySelector("#player2").innerText);
let winingScore =  document.querySelector("#winingScore");
let maxScore = parseInt(winingScore.value);

Player1btn.addEventListener("click",(e)=>{
    
    if (player1Result == maxScore-1){
        player1Result++;
        document.querySelector("#player1").innerText = player1Result;
        Player2btn.disabled ="true";
        Player1btn.disabled ="true";

    }else {
         player1Result=player1Result +1 ;
        document.querySelector("#player1").innerText = player1Result;
    }
})

Player2btn.addEventListener("click",(e)=>{
    
    if (player2Result == maxScore-1){
        player2Result++;
        document.querySelector("#player2").innerText = player2Result;
        Player2btn.disabled ="true";
        Player1btn.disabled ="true";

    }else {
        player2Result++;
        document.querySelector("#player2").innerText = player2Result;
    }
})

winingScore.addEventListener("change",()=>{
    maxScore = parseInt(winingScore.value);
})

rest.addEventListener("click",()=>{
    Player2btn.disabled = 0;
    Player1btn.disabled = 0;
    player2Result = 0;
    player1Result =0;
    document.querySelector("#player1").innerText=0;
    document.querySelector("#player2").innerText=0
})