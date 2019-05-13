class projectileHandler{

  constructor(x,y,size,angle,type,damage){

  this.type = type; //if type = 1 it is a magic attack if type = 2 it is a range attack 0 will be null
	this.x = x;
	this.y = y;
	this.size = size;
	this.angle = angle;
  this.damage = damage;
  //this.dir = "N"; direction

}
setup(){

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
