

var gameWidth = 512;
var gameHeight = 512;

var player;
var grid;
var projectileManager;

var numOfRows = 20;
var numOfCols = 20;



function setup(){

createCanvas(gameWidth, gameWidth);
player = new Player(gameWidth / 2, gameHeight / 2, 15);//puts it in the middle so on draw we can call 0, 0 for x and y
lavadragon = new lavaDragon(gameWidth/2 , 50, 50);
grid = new Grid(numOfRows, numOfCols, gameWidth / numOfRows, gameHeight / numOfCols);
projectileManager = new ProjectileManager();
}

function update(){
  grid.update();
  player.update();
  lavadragon.update();
  projectileManager.update();
}

function draw(){

background(255);
player.draw();
lavadragon.draw();
projectileManager.draw();
grid.draw();

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
