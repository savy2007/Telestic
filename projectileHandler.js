class projectileHandler{

  constructor(x,y,size,angle,type,damage,target){

  this.type = type; //if type = 1 it is a magic attack if type = 2 it is a range attack 0 will be null
	this.x = x;
	this.y = y;
	this.size = size;
	this.angle = angle;
  this.damage = damage;
  this.target = target; //not sure if i will need this so the projectile knows where to go
  //this.dir = "N"; direction

}
setup(){

  switch (this.type){

    case 1: //mage
    magicProjectile.draw();
    magicProjectile.update();
    //magic projectile data will go here
    break;

    case 2: //range
    rangeProjectile.draw();
    rangeProjectile.update();

    //range projectile data will go here
    break;

    case 3: //meele
    meeleProjectile.draw();
    meeleProjectile.update();
    //meele projectile data will go here
    break;
  }

}

 draw() {

}

 update(){

 }

}
