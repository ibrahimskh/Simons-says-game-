let userSeq=[];
let gameSeq=[];

let btns =["yellow","red","purple","green"];

let started = false;
let level=0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
    
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
h2.innerText=`level ${level}`;
let randIdx=Math.floor(Math.random()*3);
let randColor = btns[randIdx];
let randbtn=document.querySelector(`.${randColor}`); 

// console.log(randIdx);
// console.log(randColor);
// console.log(randbtn);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randbtn);
}

function checkAns(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
           setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML=`Game over! your score was ${level} <br>press any key to start`

h3.innerText=`your highest score is ${level}`;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        resetGame();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
    for(btn of allbtns){
btn.addEventListener("click",btnPress);
    }
function resetGame(){
    started=false;
    level = 0;
    gameSeq=[];
    userSeq=[];
}
let h3 = document.querySelector("h3");
