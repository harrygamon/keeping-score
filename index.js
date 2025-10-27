//Home & Guest count
let hoScore = document.getElementById("hscore")
let guScore = document.getElementById("gscore")
//Home Scores/buttons
let homebtn1 = document.getElementById("hbtn1")
let homebtn2 = document.getElementById("hbtn2")
let homeBtn3 = document.getElementById("hbtn3")
//Guest Scores/buttons
let homebtn4 = document.getElementById("hbtn4")
let homebtn5 = document.getElementById("hbtn5")
let homeBtn6 = document.getElementById("hbtn6")
//Default Scores
let homeScore = 0;
let guestScore = 0;



//Home side
function btn1() {
    homeScore += 1
    hoScore.textContent = homeScore
}

function btn2() {
    homeScore += 2
    hoScore.textContent = homeScore
}

function btn3() {
    homeScore += 3
    hoScore.textContent = homeScore
}

//Guest side
function btn4() {
    guestScore += 1
   guScore.textContent = guestScore
}

function btn5() {
    guestScore += 2
   guScore.textContent = guestScore
}

function btn6() {
    guestScore += 3
    guScore.textContent = guestScore
}