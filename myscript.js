//alert("hello")
let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;
counter = 0;
const gameOverSound = new Audio("death.mp3");
const musicSound = new Audio("music.mp3");


hole.addEventListener("animationiteration", () => {
    let random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
    counter++;
});

//display the ball

setInterval(function () {

    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
    }

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(500 - characterTop);

    if ((characterTop > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
        gameOverSound.play();
        musicSound.pause();


        alert("Game Over score:" + counter);

        character.style.top = 100 + "px";
        counter = 0;
    }
}, 10)


//display the ball for jump

function jump() {

    musicSound.play();
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function () {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

        if ((characterTop > 6) && (jumpCount < 15)) {
            character.style.top = (characterTop - 5) + "px"
        }

        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;

        }

        jumpCount++;
    }, 10)

}