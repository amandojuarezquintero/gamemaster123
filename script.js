const canvas = document.getElementById('snake')
const ctx = canvas.getContext('2d')

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
let headX = 10;
let headY = 10;

let xVelocity=0;
let yVelocity=0;

//game loop
function drawGame(){
     clearScreen();
     drawSnake();
     setTimeout(drawGame, 1000/ speed)
}

function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawSnake(){
    ctx.fillStile = 'blue'
    ctx.fillRect(headX * tileCount, headY* tileCount, tileSize,tileSize)
}

document.body.addEventListener();


drawGame();


