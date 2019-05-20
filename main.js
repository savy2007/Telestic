

var gameWidth;
var gameHeight;
var scl = 12;
var aspectRatio = 0.75;// 4:3

var mage;
var grid;


function preload() {
//load images
}


function setup(){

gameWidth = windowWidth;
gameHeight = windowWidth * aspectRatio;
createCanvas(gameWidth, gameWidth);
var s = gameWidth / scl;
grid = new Grid(scl, scl * aspectRatio, s, s);
mage = new Mage(gameWidth / 2 - gameWidth / scl / 2, gameWidth / 2 - gameHeight / scl / 2, gameWidth / scl, gameWidth / scl, "Player 1");//puts it in the middle so on draw we can call 0, 0 for x and y
lavadragon = new LavaDragon(gameWidth / 2 - gameWidth / scl / 2, 0, gameWidth / scl, gameWidth / scl);


}

function windowResized() {
	gameWidth = windowWidth;
	gameHeight = windowWidth * aspectRatio;

  resizeCanvas(gameWidth, gameHeight);

  mage.resize(gameWidth / scl);
  grid.resize(gameWidth / scl, gameWidth / scl);

}

function update(){
  grid.update();
  mage.update();
  lavadragon.update();
}

function draw(){

background(255);
grid.draw();
mage.draw();
lavadragon.draw();


update();

}

function mouseClicked() {
  grid.clicked();
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
