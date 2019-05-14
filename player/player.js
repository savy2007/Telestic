class Player{

	constructor(x,y,size){
	this.x = x;
	this.y = y;
	this.size = size;
	this.angle = 100;
	this.health = 100;
	this.dir = "N"; // direction
	this.state = [""];//any affects like fire will go here
	//we will constantly loop through the array to check if player is onfire or poisned
	//once fire or poisned is done, we will remove it from the array
	this.playerClass = 1;
	//0 = undecided 1 = mage 2 = ranger 3 = melee
	this.playerName = "savy";

}

draw(){

	push();
	angleMode(DEGREES);
  translate(this.x, this.y);//translate to the current x and y so we can draw at 0, 0 x and y
	rotate(this.angle + 90); //need this to offset by 90degs
	fill(255);
	rect(0 - this.size / 2, 0  - this.size / 2, this.size, this.size);
	fill(0);
	rect(0 - this.size / 2, 0  - this.size / 2, this.size, this.size / 4);//added to make a visual refrance to the front of the object
	pop();

}

update(){

this.move();
this.shoot();
this.track(mouseX, mouseY);

}

move(){
	if(keyIsDown(UP_ARROW)){
		this.y--;
		this.dir = "N";
		console.log("the char is now facing " + this.dir); //moving up
	}
	if(keyIsDown(DOWN_ARROW)){
		this.y++;
		this.dir = "S";
		console.log("the char is now facing " + this.dir); //moving down
	}
	if(keyIsDown(RIGHT_ARROW)){
		this.x++;
		this.dir = "E";
		console.log("the char is now facing " + this.dir); //moving right
	}
	if(keyIsDown(LEFT_ARROW)){
		this.x--;
		this.dir = "W";
		console.log("the char is now facing " + this.dir);//moving left
	}
}

track(x, y){
		var tx = x;//tracking x
		var ty = y;//tracking y

		/* this function I didnt write and dont fully understand but
			after playing with it i got it to work
		*/
		this.angle = angle360(this.x, this.y, tx, ty);

		strokeWeight(3);//line width
		stroke(255, 0, 0);//red line color
		//line(this.x - 15 + this.size, this.y, tx, ty);//draws a red line to show tracking
		strokeWeight(1);//returns line size back to 1
		stroke(0);//black line color
	}

shoot(){
	if (mouseIsPressed) {
		projectileManager.addProjectile(new RedShoot(this.x, this.y, this.angle, null));
		projectileManager.addProjectile(new BlueShoot(this.x + 50, this.y, this.angle, null));
		projectileManager.addProjectile(new Projectile(this.x + 100, this.y, this.angle, null));

		//null will be the type of ammo
    //console.log("mouse is pressed");
		//this is where i will call the shooting script


  }
}

}
