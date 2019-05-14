class rangeProjectile{

  constructor(x,y,size,angle){

  this.type = 2; //if type = 1 it is a magic attack if type = 2 it is a range attack 0 will be null
	this.x = x;
	this.y = y;
	this.size = size;
  this.angle = angle;

}

draw(){
  push();
  fill(0,255,0);
  rect(this.x++, this.y++, this.size, this.size);
  rotate(angle);
  pop();
}

}
