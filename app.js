let colors = ["pink", "blue", "orange", "purple"];
let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let msg = document.querySelector("#msg");
let btnContainer = document.querySelector("#btn-container");

document.addEventListener("keydown", function (e) {
    if (started == false) {
        console.log("Let's get started!");
        started = true;
        levelUp();
    }
});

function levelUp() {
    level++;
    msg.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    flashBtn(colors[randIdx]);
    gameSeq.push(colors[randIdx]);
}

function flashBtn(color) {
    let btn = document.querySelector(`#${color}`);
    let ogColor = btn.style.color;
    btn.style.backgroundColor = "white";
    setTimeout(function () {
        btn.style.backgroundColor = ogColor;
    }, 200);
}

function checkAns() {
    let idx = userSeq.length - 1;
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            flashBtn(userSeq[idx]);
            document.querySelector("body").style.backgroundColor = "rgb(72, 168, 66)";
            setTimeout(function () {
                document.querySelector("body").style.backgroundColor = "white";
            }, 200);
            userSeq = [];
            setTimeout(levelUp, 1000);
        }
        else {
            flashBtn(userSeq[idx]);
        }
    }
    else {
        gameOver();
    }
}

function gameOver() {
    document.querySelector("body").style.backgroundColor = "rgb(224, 16, 16)";
    setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "white";
    }, 200);
    gameSeq = [];
    userSeq = [];
    started = false;
    msg.innerText = `GAME OVER! Your score was ${level-1}\nPress any key to restart`;
    showHighScore(level-1);
    level = 0;
}

let highScore = document.createElement("h3");
highScore.innerText = "";
highScore.style.color = "rgb(224, 16, 16)";
msg.insertAdjacentElement("beforebegin", highScore);
// high score value
let hs = 0;


function showHighScore(score) {
    if(score > hs){
        hs = score;
        highScore.innerText = `HIGH SCORE: ${hs}`;
    }
}

btnContainer.addEventListener("click", function (e) {
    if (e.target.className == "btn" && started === true) {
        userSeq.push(e.target.id);
        checkAns();
    }
})