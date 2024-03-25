let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");


let img1 = "null";
let img2 = "null";
let img3 = "null";
let img4 = "null";
let img5 = "null";
let img6 = "null";
let img7 = "null";
let img8 = "null";
let img9 = "null";

let winnerImg = document.getElementById("winImg");
let winnerName = document.getElementById("winName");
let winner1Count = 0;
let winner2Count = 0;
winnerImg.style.boxShadow = "0px 0px 0px 0px black";

let playerName1 = document.getElementById("playerBox1");
let playerName2 = document.getElementById("playerBox2");
playerName1.style.boxShadow = "0px 7px 0px 0px red";

var iconCheck = 1;
var iterCheck = 1;
var crossImage = "images/cross.png";
var circleImage = "images/circle.png";

function allDisable() {
    box1.removeAttribute("onclick");
    box2.removeAttribute("onclick");
    box3.removeAttribute("onclick");
    box4.removeAttribute("onclick");
    box5.removeAttribute("onclick");
    box6.removeAttribute("onclick");
    box7.removeAttribute("onclick");
    box8.removeAttribute("onclick");
    box9.removeAttribute("onclick");
    iterCheck = 1;
}

function resultShow(winner) {
    let miniImg = document.createElement("img");
    if (winner === 1) {
        miniImg.src = crossImage;
        winnerName.innerHTML = "Player 1 is winner";
        winner1Count += 1;
        winner1Score = document.getElementById("playerScore1");
        winner1Score.innerHTML = winner1Count;
        playerName1.style.boxShadow = "0px 0px 0px 0px black";
        playerName2.style.boxShadow = "0px 0px 0px 0px black";
        winnerImg.style.boxShadow = "0 0 0 3px white";
    }
    else if (winner === 0) {
        miniImg.src = circleImage;
        winnerName.innerHTML = "Player 2 is winner";
        winner2Count += 1;
        winner2Score = document.getElementById("playerScore2");
        winner2Score.innerHTML = winner2Count;
        playerName1.style.boxShadow = "0px 0px 0px 0px black";
        playerName2.style.boxShadow = "0px 0px 0px 0px black";
        winnerImg.style.boxShadow = "0 0 0 3px white";
    }
    else {
        winnerName.innerHTML = "Both Players have Tie";
        playerName1.style.boxShadow = "0px 0px 0px 0px black";
        playerName2.style.boxShadow = "0px 0px 0px 0px black";
        winnerImg.style.boxShadow = "0 0 0 3px white";
    }

    winnerImg.appendChild(miniImg);
}

function userGlow() {
    if (iconCheck === 1) {
        playerName1.style.boxShadow = "0px 7px 0px 0px red";
        playerName2.style.boxShadow = "0px 0px 0px 0px black";
    }
    else {
        playerName1.style.boxShadow = "0px 0px 0px 0px black";
        playerName2.style.boxShadow = "0px 7px 0px 0px rgb(0, 247, 255)";
    }
}

function winner() {

    // cross winning logic........
    if (img1 == "images/cross.png" && img2 == "images/cross.png" && img3 == "images/cross.png") {
        allDisable();
        box1.style.backgroundColor = "white";
        box2.style.backgroundColor = "white";
        box3.style.backgroundColor = "white";
        resultShow(1);
    }
    else if (img4 == "images/cross.png" && img5 == "images/cross.png" && img6 == "images/cross.png") {
        allDisable();
        box4.style.backgroundColor = "white";
        box5.style.backgroundColor = "white";
        box6.style.backgroundColor = "white";
        resultShow(1);
    }
    else if (img7 == "images/cross.png" && img8 == "images/cross.png" && img9 == "images/cross.png") {
        allDisable();
        box7.style.backgroundColor = "white";
        box8.style.backgroundColor = "white";
        box9.style.backgroundColor = "white";
        resultShow(1);
    }
    else if (img1 == "images/cross.png" && img4 == "images/cross.png" && img7 == "images/cross.png") {
        allDisable();
        box1.style.backgroundColor = "white";
        box4.style.backgroundColor = "white";
        box7.style.backgroundColor = "white";
        resultShow(1);
    }
    else if (img2 == "images/cross.png" && img5 == "images/cross.png" && img8 == "images/cross.png") {
        allDisable();
        box2.style.backgroundColor = "white";
        box5.style.backgroundColor = "white";
        box8.style.backgroundColor = "white";
        resultShow(1);
    }
    else if (img3 == "images/cross.png" && img6 == "images/cross.png" && img9 == "images/cross.png") {
        allDisable();
        box3.style.backgroundColor = "white";
        box6.style.backgroundColor = "white";
        box9.style.backgroundColor = "white";
        resultShow(1);
    }
    else if (img1 == "images/cross.png" && img5 == "images/cross.png" && img9 == "images/cross.png") {
        allDisable();
        box1.style.backgroundColor = "white";
        box5.style.backgroundColor = "white";
        box9.style.backgroundColor = "white";
        resultShow(1);
    }
    else if (img3 == "images/cross.png" && img5 == "images/cross.png" && img7 == "images/cross.png") {
        allDisable();
        box3.style.backgroundColor = "white";
        box5.style.backgroundColor = "white";
        box7.style.backgroundColor = "white";
        resultShow(1);
    }

    // circle winning logic........
    if (img1 == "images/circle.png" && img2 == "images/circle.png" && img3 == "images/circle.png") {
        allDisable();
        box1.style.backgroundColor = "white";
        box2.style.backgroundColor = "white";
        box3.style.backgroundColor = "white";
        resultShow(0);
    }
    else if (img4 == "images/circle.png" && img5 == "images/circle.png" && img6 == "images/circle.png") {
        allDisable();
        box4.style.backgroundColor = "white";
        box5.style.backgroundColor = "white";
        box6.style.backgroundColor = "white";
        resultShow(0);
    }
    else if (img7 == "images/circle.png" && img8 == "images/circle.png" && img9 == "images/circle.png") {
        allDisable();
        box7.style.backgroundColor = "white";
        box8.style.backgroundColor = "white";
        box9.style.backgroundColor = "white";
        resultShow(0);
    }
    else if (img1 == "images/circle.png" && img4 == "images/circle.png" && img7 == "images/circle.png") {
        allDisable();
        box1.style.backgroundColor = "white";
        box4.style.backgroundColor = "white";
        box7.style.backgroundColor = "white";
        resultShow(0);
    }
    else if (img2 == "images/circle.png" && img5 == "images/circle.png" && img8 == "images/circle.png") {
        allDisable();
        box2.style.backgroundColor = "white";
        box5.style.backgroundColor = "white";
        box8.style.backgroundColor = "white";
        resultShow(0);
    }
    else if (img3 == "images/circle.png" && img6 == "images/circle.png" && img9 == "images/circle.png") {
        allDisable();
        box3.style.backgroundColor = "white";
        box6.style.backgroundColor = "white";
        box9.style.backgroundColor = "white";
        resultShow(0);
    }
    else if (img1 == "images/circle.png" && img5 == "images/circle.png" && img9 == "images/circle.png") {
        allDisable();
        box1.style.backgroundColor = "white";
        box5.style.backgroundColor = "white";
        box9.style.backgroundColor = "white";
        resultShow(0);
    }
    else if (img3 == "images/circle.png" && img5 == "images/circle.png" && img7 == "images/circle.png") {
        allDisable();
        box3.style.backgroundColor = "white";
        box5.style.backgroundColor = "white";
        box7.style.backgroundColor = "white";
        resultShow(0);
    }

    if (iterCheck === 10) {
        resultShow(10);

    }
}


function boxShow1(box) {

    if (box === "box1") {
        box1 = document.getElementById("box1");
        box1.removeAttribute("onclick");
        let img = document.createElement("img");
        if (iconCheck === 1) {
            img.src = crossImage;
            img1 = crossImage;
        }
        else {
            img.src = circleImage;
            img1 = circleImage;
        }
        box1.appendChild(img);
        if (iconCheck === 1) {
            iconCheck = 0;
        }
        else {
            iconCheck = 1;
        }
    }
    else if (box === "box2") {
        box2 = document.getElementById("box2");
        box2.removeAttribute("onclick");
        let img = document.createElement("img");
        if (iconCheck === 1) {
            img.src = crossImage;
            img2 = crossImage;
        }
        else {
            img.src = circleImage;
            img2 = circleImage;
        }
        box2.appendChild(img);
        if (iconCheck === 1) {
            iconCheck = 0;
        }
        else {
            iconCheck = 1;
        }
    }
    else if (box === "box3") {
        box3 = document.getElementById("box3");
        box3.removeAttribute("onclick");
        let img = document.createElement("img");
        if (iconCheck === 1) {
            img.src = crossImage;
            img3 = crossImage;
        }
        else {
            img.src = circleImage;
            img3 = circleImage;
        }
        box3.appendChild(img);
        if (iconCheck === 1) {
            iconCheck = 0;
        }
        else {
            iconCheck = 1;
        }
    }
    else if (box === "box4") {
        box4 = document.getElementById("box4");
        box4.removeAttribute("onclick");
        let img = document.createElement("img");
        if (iconCheck === 1) {
            img.src = crossImage;
            img4 = crossImage;
        }
        else {
            img.src = circleImage;
            img4 = circleImage;
        }
        box4.appendChild(img);
        if (iconCheck === 1) {
            iconCheck = 0;
        }
        else {
            iconCheck = 1;
        }
    }
    else if (box === "box5") {
        box5 = document.getElementById("box5");
        box5.removeAttribute("onclick");
        let img = document.createElement("img");
        if (iconCheck === 1) {
            img.src = crossImage;
            img5 = crossImage;
        }
        else {
            img.src = circleImage;
            img5 = circleImage;
        }
        box5.appendChild(img);
        if (iconCheck === 1) {
            iconCheck = 0;
        }
        else {
            iconCheck = 1;
        }
    }
    else if (box === "box6") {
        box6 = document.getElementById("box6");
        box6.removeAttribute("onclick");
        let img = document.createElement("img");
        if (iconCheck === 1) {
            img.src = crossImage;
            img6 = crossImage;
        }
        else {
            img.src = circleImage;
            img6 = circleImage;
        }
        box6.appendChild(img);
        if (iconCheck === 1) {
            iconCheck = 0;
        }
        else {
            iconCheck = 1;
        }
    }
    else if (box === "box7") {
        box7 = document.getElementById("box7");
        box7.removeAttribute("onclick");
        let img = document.createElement("img");
        if (iconCheck === 1) {
            img.src = crossImage;
            img7 = crossImage;
        }
        else {
            img.src = circleImage;
            img7 = circleImage;
        }
        box7.appendChild(img);
        if (iconCheck === 1) {
            iconCheck = 0;
        }
        else {
            iconCheck = 1;
        }
    }
    else if (box === "box8") {
        box8 = document.getElementById("box8");
        box8.removeAttribute("onclick");
        let img = document.createElement("img");
        if (iconCheck === 1) {
            img.src = crossImage;
            img8 = crossImage;
        }
        else {
            img.src = circleImage;
            img8 = circleImage;
        }
        box8.appendChild(img);
        if (iconCheck === 1) {
            iconCheck = 0;
        }
        else {
            iconCheck = 1;
        }
    }
    else if (box === "box9") {
        box9 = document.getElementById("box9");
        box9.removeAttribute("onclick");
        let img = document.createElement("img");
        if (iconCheck === 1) {
            img.src = crossImage;
            img9 = crossImage;
        }
        else {
            img.src = circleImage;
            img9 = circleImage;
        }
        box9.appendChild(img);
        if (iconCheck === 1) {
            iconCheck = 0;
        }
        else {
            iconCheck = 1;
        }
    }
    iterCheck += 1;

    userGlow();
    winner();
}

function gameReset() {
    // document.location.reload();

    box1.setAttribute("onclick", "boxShow1('box1')");
    box2.setAttribute("onclick", "boxShow1('box2')");
    box3.setAttribute("onclick", "boxShow1('box3')");
    box4.setAttribute("onclick", "boxShow1('box4')");
    box5.setAttribute("onclick", "boxShow1('box5')");
    box6.setAttribute("onclick", "boxShow1('box6')");
    box7.setAttribute("onclick", "boxShow1('box7')");
    box8.setAttribute("onclick", "boxShow1('box8')");
    box9.setAttribute("onclick", "boxShow1('box9')");

    img1 = box1.querySelectorAll('img');
    img1.forEach(img => box1.removeChild(img));
    img2 = box2.querySelectorAll('img');
    img2.forEach(img => box2.removeChild(img));
    img3 = box3.querySelectorAll('img');
    img3.forEach(img => box3.removeChild(img));
    img4 = box4.querySelectorAll('img');
    img4.forEach(img => box4.removeChild(img));
    img5 = box5.querySelectorAll('img');
    img5.forEach(img => box5.removeChild(img));
    img6 = box6.querySelectorAll('img');
    img6.forEach(img => box6.removeChild(img));
    img7 = box7.querySelectorAll('img');
    img7.forEach(img => box7.removeChild(img));
    img8 = box8.querySelectorAll('img');
    img8.forEach(img => box8.removeChild(img));
    img9 = box9.querySelectorAll('img');
    img9.forEach(img => box9.removeChild(img));

    box1.style.backgroundColor = "black";
    box2.style.backgroundColor = "black";
    box3.style.backgroundColor = "black";
    box4.style.backgroundColor = "black";
    box5.style.backgroundColor = "black";
    box6.style.backgroundColor = "black";
    box7.style.backgroundColor = "black";
    box8.style.backgroundColor = "black";
    box9.style.backgroundColor = "black";

    winnerName.innerHTML = "";
    img1 = winnerImg.querySelectorAll('img');
    img1.forEach(img => winnerImg.removeChild(img));

    playerName1.style.boxShadow = "0px 7px 0px 0px red";
    playerName2.style.boxShadow = "0px 0px 0px 0px black";
    winnerImg.style.boxShadow = "0px 0px 0px 0px black";

    img1 = "null";
    img2 = "null";
    img3 = "null";
    img4 = "null";
    img5 = "null";
    img6 = "null";
    img7 = "null";
    img8 = "null";
    img9 = "null";
    iconCheck = 1;
    iterCheck = 1;
    crossImage = "images/cross.png";
    circleImage = "images/circle.png";
}

function gameRestart() {
    document.location.reload();
}