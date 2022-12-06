let character = document.getElementById("character");
let car = document.getElementById("car");

function act() {  
    let leftCharacterPos = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    document.addEventListener("keydown", (event) =>{
        keyPressed = event.key;
        if(keyPressed=="d"){
            if(leftCharacterPos<220) {
                character.style.left = leftCharacterPos + 100 + "px"; 
            }
        } else if(keyPressed=="a"){
            if(leftCharacterPos>20) {
                character.style.left = leftCharacterPos - 100 + "px";
            }
        }
    });
}

let arr = [20, 120, 220];

let carSpawnPosition = setInterval(() => {
    let leftCarPos = Math.floor(Math.random() * arr.length);
    car.style.left = arr[leftCarPos] + "px";
}, 1000);

let count = 0, score=0;
let gameOver = setInterval(()=>{
    let leftCharacterPos = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    let topCharacterPos = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let leftCarPos = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
    let topCarPos = parseInt(window.getComputedStyle(car).getPropertyValue("top"));

    score = Math.floor(count++ / 10);
    document.getElementById("score").innerHTML = "Score: " + score;

    if((topCarPos + 100 >= topCharacterPos) && (topCarPos + 100 <= topCharacterPos + 100) && (leftCarPos == leftCharacterPos)) {
        car.style.animation = "none";
        clearInterval(carSpawnPosition);
        confirmExit();
        clearInterval(gameOver);
    } else if ((topCharacterPos + 100 >= topCarPos) && (topCharacterPos < topCarPos) && (leftCharacterPos == leftCarPos)) {
        car.style.animation = "none";
        clearInterval(carSpawnPosition);
        confirmExit();
        clearInterval(gameOver);
    }
},10);

let confirmExit = ()=>{
    if(confirm("Game Over!\nYour score: "+score+"\nDo you wish to continue?")) {
        location.reload();
    }
}