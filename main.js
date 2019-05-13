

var gameWidth = 480;
var gameHeight = 360;
var player;


function setup(){

createCanvas(gameWidth, gameWidth);
player = new Player(gameWidth / 2, gameHeight / 2, 15);//puts it in the middle so on draw we can call 0, 0 for x and y
lavadragon = new lavaDragon(gameWidth/2 , 50, 50);
bg = loadImage('data/Img/2.jpg');

}

function update(){

}

function draw(){

background(bg);
player.draw();
player.update();
lavadragon.draw();
lavadragon.update();
}

function angle(cx, cy, ex, ey) {
var dy = ey - cy;
var dx = ex - cx;
var theta = Math.atan2(dy, dx); // range (-PI, PI]
theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
return theta;
}

function angle360(cx, cy, ex, ey) {
  var theta = angle(cx, cy, ex, ey); // range (-180, 180]
  if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
}
