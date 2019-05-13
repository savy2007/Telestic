class playerProjectile{

  constructor(x,y,size,angle,type,damage){

  this.type = 0; //if type = 1 it is a magic attack if type = 2 it is a range attack 0 will be null
	this.x = x;
	this.y = y;
	this.size = size;
	this.angle = 0;
	this.dir = "N"; // direction
  this.damage;

}
setup(){

//  this.angle = player.angle
  //this.type = player.playerClass

  switch (this.type){

    case 1: //mage
    //magic projectile data will go here
    break;

    case 2: //range
    //range projectile data will go here
    break;

    case 3: //meele
    //meele projectile data will go here
    break;
  }

}

 draw() {

}

 update(){

 }
}
