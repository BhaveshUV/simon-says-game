let colors = ["pink", "blue", "orange", "purple"];
let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let msg = document.querySelector("#msg");

document.addEventListener("keydown", function(e){
    if(started == false) {
        console.log("Let's get started!");
        started = true;
        levelUp();
    }
});

function levelUp() {
    level++;
    msg.innerText =`Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    flashBtn(colors[randIdx]);
    gameSeq.push(colors[randIdx]);
}

function flashBtn(color) {
    let btn = document.querySelector(`#${color}`);
    let ogColor = btn.style.color;
    btn.style.backgroundColor = "white";
    setTimeout(function(){
        btn.style.backgroundColor = ogColor;
    }, 200);
}