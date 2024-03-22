let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");


let img1 = "null"
let img2 = "null"
let img3 = "null"
let img4 = "null"
let img5 = "null"
let img6 = "null"
let img7 = "null"
let img8 = "null"
let img9 = "null"

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
    iterCheck = 1
}

function winner() {
    
    // cross winning logic........
    if ( img1 == "images/cross.png" && img2 == "images/cross.png" && img3 == "images/cross.png" ) {
        allDisable();
        box1.style.backgroundColor = "white"
        box2.style.backgroundColor = "white"
        box3.style.backgroundColor = "white"
        alert("Player 1 (X) Win ");
    }
    else if ( img4 == "images/cross.png" && img5 == "images/cross.png" && img6 == "images/cross.png" ) {
        allDisable();
        box4.style.backgroundColor = "white"
        box5.style.backgroundColor = "white"
        box6.style.backgroundColor = "white"
        alert("Player 1 (X) Win ");
    }
    else if ( img7== "images/cross.png" && img8 == "images/cross.png" && img9 == "images/cross.png" ) {
        allDisable();
        box7.style.backgroundColor = "white"
        box8.style.backgroundColor = "white"
        box9style.backgroundColor = "white"
        alert("Player 1 (X) Win ");
    }
    else if ( img1 == "images/cross.png" && img4 == "images/cross.png" && img7 == "images/cross.png" ) {
        allDisable();
        box1.style.backgroundColor = "white"
        box4.style.backgroundColor = "white"
        box7.style.backgroundColor = "white"
        alert("Player 1 (X) Win ");
    }
    else if ( img2 == "images/cross.png" && img5 == "images/cross.png" && img8 == "images/cross.png" ) {
        allDisable();
        box2.style.backgroundColor = "white"
        box5.style.backgroundColor = "white"
        box8.style.backgroundColor = "white"
        alert("Player 1 (X) Win ");
    }
    else if ( img3 == "images/cross.png" && img6 == "images/cross.png" && img9 == "images/cross.png" ) {
        allDisable();
        box3.style.backgroundColor = "white"
        box6.style.backgroundColor = "white"
        box9.style.backgroundColor = "white"
        alert("Player 1 (X) Win ");
    }
    else if ( img1 == "images/cross.png" && img5 == "images/cross.png" && img9 == "images/cross.png" ) {
        allDisable();
        box1.style.backgroundColor = "white"
        box5.style.backgroundColor = "white"
        box9.style.backgroundColor = "white"
        alert("Player 1 (X) Win ");
    }
    else if ( img3 == "images/cross.png" && img5 == "images/cross.png" && img7 == "images/cross.png" ) {
        allDisable();
        box3.style.backgroundColor = "white"
        box5.style.backgroundColor = "white"
        box7.style.backgroundColor = "white"
        alert("Player 1 (X) Win ");
    }

    // circle winning logic........
    if ( img1 == "images/circle.png" && img2 == "images/circle.png" && img3 == "images/circle.png" ) {
        allDisable();
        box1.style.backgroundColor = "white"
        box2.style.backgroundColor = "white"
        box3.style.backgroundColor = "white"
        alert("Player 2 (O) Win ");
    }
    else if ( img4 == "images/circle.png" && img5 == "images/circle.png" && img6 == "images/circle.png" ) {
        allDisable();
        box4.style.backgroundColor = "white"
        box5.style.backgroundColor = "white"
        box6.style.backgroundColor = "white"
        alert("Player 2 (O) Win ");
    }
    else if ( img7 == "images/circle.png" && img8 == "images/circle.png" && img9 == "images/circle.png" ) {
        allDisable();
        box7.style.backgroundColor = "white"
        box8.style.backgroundColor = "white"
        box9.style.backgroundColor = "white"
        alert("Player 2 (O) Win ");
    }
    else if ( img1 == "images/circle.png" && img4 == "images/circle.png" && img7 == "images/circle.png" ) {
        allDisable();
        box1.style.backgroundColor = "white"
        box4.style.backgroundColor = "white"
        box7.style.backgroundColor = "white"
        alert("Player 2 (O) Win ");
    }
    else if ( img2 == "images/circle.png" && img5 == "images/circle.png" && img8 == "images/circle.png" ) {
        allDisable();
        box2.style.backgroundColor = "white"
        box5.style.backgroundColor = "white"
        box8.style.backgroundColor = "white"
        alert("Player 2 (O) Win ");
    }
    else if ( img3 == "images/circle.png" && img6 == "images/circle.png" && img9 == "images/circle.png" ) {
        allDisable();
        box3.style.backgroundColor = "white"
        box6.style.backgroundColor = "white"
        box9.style.backgroundColor = "white"
        alert("Player 2 (O) Win ");
    }
    else if ( img1 == "images/circle.png" && img5 == "images/circle.png" && img9 == "images/circle.png" ) {
        allDisable();
        box1.style.backgroundColor = "white"
        box5.style.backgroundColor = "white"
        box9.style.backgroundColor = "white"
        alert("Player 2 (O) Win ");
    }
    else if ( img3 == "images/circle.png" && img5 == "images/circle.png" && img7 == "images/circle.png" ) {
        allDisable();
        box3.style.backgroundColor = "white"
        box5.style.backgroundColor = "white"
        box7.style.backgroundColor = "white"
        alert("Player 2 (O) Win ");
    }

    if (iterCheck === 10) {
        alert("Both have Tie")

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
        box8 = document.getElementById("box9");
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

    winner();
}

function refreshPage() {
    document.location.reload();
} 