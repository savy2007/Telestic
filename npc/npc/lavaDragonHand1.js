class lavaDragonHand1 {

  constructor(x,y,size){
	this.x = x;
	this.y = y;
	this.size = size;
	this.angle = 100;
	this.health = 1000;
	this.state = [""];//any affects like fire will go here
	//we will constantly loop through the array to check if player is onfire or poisned
	//once fire or poisned is done, we will remove it from the array
  this.handsAlive = true;
  //this.img = loadImage('https://www.dropbox.com/s/0jd2elzdag68hr2/1.png?dl=0);
  this.bossName = "lavaDragonHand1";

}


}
