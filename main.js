

var gameWidth;
var gameHeight;
var scl = 12;
var aspectRatio = 0.75;// 4:3

var player;
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
player = new Player(gameWidth / 2, gameHeight / 2, 15);//puts it in the middle so on draw we can call 0, 0 for x and y
lavadragon = new lavaDragon(gameWidth/2 , 50, 50);


}

function windowResized() {
	gameWidth = windowWidth;
	gameHeight = windowWidth * aspectRatio;

  resizeCanvas(gameWidth, gameHeight);

  //player.resize(gameWidth / scl);
  grid.resize(gameWidth / scl, gameWidth / scl);

}

function update(){
  grid.update();
  player.update();
  lavadragon.update();
}

function draw(){

background(255);
grid.draw();
player.draw();
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
