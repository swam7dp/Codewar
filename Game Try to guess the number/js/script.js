let checkYourLuck = document.querySelector("#startGame"),
    tryLuck = document.querySelector("#answer"),
    randomNumber = Math.round(Math.random() * 10 + 1),
    showAnswer = document.querySelector("#random"),
    btnShow = document.querySelector("#show"),
    modal = document.querySelector("#myModal"),
    span = document.querySelector(".close");
rulesGame();

if (randomNumber == 11) {
    randomNumber = 10;
}
checkYourLuck.addEventListener("click", function() {
    let userNumber = document.querySelector("#section");
    if (isNaN(userNumber.value) || userNumber.value < 1 || userNumber.value > 10) {
        show();
    } else {
        if (randomNumber === +userNumber.value) {
            tryLuck.innerHTML = "You are won!";
            showWon();
        } else {
            tryLuck.innerHTML = "You are lose!";
            showLose();
        }
    }

});

btnShow.addEventListener("click", function() {
    showAnswer.innerHTML = randomNumber;
});




function show() {
    modal.style.display = "block";
    document.getElementById("status").innerHTML = "Incorect input. Try input corret number";
    document.getElementById("status").style.color = "black";
}

function rulesGame() {
    modal.style.display = "block";
    document.getElementById("status").innerHTML = "The essence of the game. You need to enter a number from 1 to 10 if you guessed then you win in another case you lost.";
    document.getElementById("status").style.color = "magenta";
}

function showWon() {
    modal.style.display = "block";
    document.getElementById("status").innerHTML = "You are win";
    document.getElementById("status").style.color = "green";
}

function showLose() {
    modal.style.display = "block";
    document.getElementById("status").innerHTML = "You are lose!";
    document.getElementById("status").style.color = "red";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}