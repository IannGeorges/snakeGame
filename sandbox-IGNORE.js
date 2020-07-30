let gameOver;
let score;
let fruitX;
let fruitY;
let headX;
let headY;
let direction;
//let tailX[100]; 
//let tailY[100];
//console.log(Math.floor(Math.random() * 11));
//fruit();


// canvas for snake map
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// size of tile
let size = 30;
let padLeft = size;
let padTop = size;
let padRight = size;
let padBottom = size;
// color of tile
let red = "#FF0000";
ctx.strokeStyle = red;
ctx.beginPath();

// Draw Grid
for (var x = padLeft; x <= canvas.width - padRight; x += size) {
    ctx.moveTo(x, padTop)
    ctx.lineTo(x, canvas.height - padBottom)
 }
 for (var y = padTop; y <= canvas.height - padBottom; y += size) {
    ctx.moveTo(padLeft, y)
    ctx.lineTo(canvas.width - padRight, y)
 }
ctx.stroke()

startPos();
fruit();
console.log(x,y)
 function startPos(){
     let startX = (Math.floor(canvas.width/2)/size);
     let startY = (Math.floor(canvas.height/2)/size);
     let green = "#006400"
     ctx.fillStyle = green;
     ctx.fillRect(size*startX, size*startY, size, size)
     
     
 }

function fruit(){
    // last square in array + 1
    let arrRange = 26;
    // fruit color / img
    let red = "#FF0000";
    ctx.fillStyle = red;
    let randX = Math.floor(Math.random() * arrRange) + 1; 
    let randY = Math.floor(Math.random() * arrRange) + 1;
    console.log("X: " + randX );
    console.log("Y: " + randY );
    
    
    ctx.fillRect(size*randX, size*randY, size, size)
}

function myFunction(event) {
    // Use charCode if the browser supports it, otherwise use event.keyCode (for IE8 and earlier)
    var x = event.charCode || event.keyCode;
    console.log("The Unicode value is: " + x);
    
  }

/*
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

console.log(Math.floor(Math.random() * 11));
fruit();


for (let i = 0; i < canvas.height; i++) {
    for (let j = 0; j < canvas.width; j++) {
    let x = (j * 25);
    let y = (i * 25);
    ctx.beginPath();
    ctx.strokeRect(x, y, 25, 25);
    
    
}
}

function snakeStart () {
    var ctrX = canvas.width / 2;
    var ctrY = canvas.height / 2;
    ctx.fillRect(ctrX, ctrY, 25, 25)
}

function fruit() {
    
    var fruitX = (Math.floor(Math.random() * 71)*10);
    var fruitY = (Math.floor(Math.random() * 71)*10);
    ctx.beginPath();
    ctx.fillRect(fruitX, fruitY, 25, 25)
    console.log(fruitX, fruitY);
}*/
document.body.addEventListener("keydown", function(event) {
    if(event.keyCode==83) {
       
        ctx.fillRect(size*1, size*2, size, size)
    }
    

    //if (event.keyCode)
});