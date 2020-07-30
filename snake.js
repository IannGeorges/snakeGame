let gameOver = false;
let score;
let fruitX;
let fruitY;
let headX;
let headY;
let direction;
// canvas for snake map
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// size of tile
let size = 30;
let padLeft = size;
let padTop = size;
let padRight = size;
let padBottom = size;

draw();
setup();
//fruit();

// Draw Grid
function draw(){
   gameOver = false;
   direction = "STOP";
   ctx.beginPath();
   for (var x = padLeft; x <= canvas.width - padRight; x += size) {
      ctx.moveTo(x, padTop);
      ctx.lineTo(x, canvas.height - padBottom);
   }
   for (var y = padTop; y <= canvas.height - padBottom; y += size) {
      ctx.moveTo(padLeft, y);
      ctx.lineTo(canvas.width - padRight, y);
   }
   ctx.stroke();
}

// Spawn fruit 
function fruit() {
   // last square in array 
   let arrRange = 26;
   // fruit color / img
   let red = "#FF0000";
   ctx.fillStyle = red;
   fruitX = Math.floor(Math.random() * arrRange) + 1; 
   fruitY = Math.floor(Math.random() * arrRange) + 1;
   console.log("X: " + fruitX );
   console.log("Y: " + fruitY );
   ctx.fillRect(size*fruitX, size*fruitY, size, size);
}

// Spawn map & snake
function setup(){
   // center snake position
   let startX = (Math.floor(canvas.width/2)/size);
   let startY = (Math.floor(canvas.height/2)/size);
   headX = startX;
   headY = startY;
   let green = "#006400";
   ctx.fillStyle = green;
   ctx.fillRect(size*headX, size*headY, size, size)
   score = 0;
}

//input
window.addEventListener('keydown', function(e) {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   draw();
   if (e.keyCode === 87 /*&& direction !== 3*/) {
       direction = 2; // Up 
       console.log("up");
       
       
   } else if (e.keyCode === 83 /*&& direction !== 2*/) {
       direction = 3; // Down
       console.log("down");
       
   } else if (e.keyCode === 65 /*&& direction !== 0*/) {
       direction = 1; // Left
       console.log("left");
       
   } else if (e.keyCode === 68 /*&& direction !== 1*/) {
       direction = 0; // Right
       console.log("right");
       
   } else {
      direction = direction;
   }
   logic();
   
   let green = "#006400";
   ctx.fillStyle = green;
   ctx.fillRect(size*headX, size*headY, size, size);
   
});

// Game logic
function logic(){
  console.log("logic");
  
  
 
      switch(direction){
         case 0: // Right
            headX++;
         console.log("WTF");
         
         break;
         
         case 1: // Left
            headX--;
            console.log("WTF");
         break;
         
         case 2: // Up
            headY--; 
            console.log("WTF");
         break;
         
         case 3: // Down
            headY++; 
            console.log("WTF");
         break;
         default:
            console.log("issue");
            
            break;
      }
     

}
